import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import stripe from "@/lib/stripe";

// Stripe requires the raw body bytes for signature verification — do not parse as JSON.
export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe-Signature header" }, { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      return handlePaymentIntentSucceeded(event);
    case "invoice.paid":
      return handleInvoicePaid(event);
    default:
      // Return 200 for unhandled events — non-2xx causes Stripe to retry indefinitely.
      return NextResponse.json({ received: true });
  }
}

// ── payment_intent.succeeded ──────────────────────────────────────────────
// Fired when a deposit PaymentIntent is completed.
// TODO: Update HubSpot deal stage to "Deposit Received" once a CRM stage is defined.
// Registration reminder: add https://<your-domain>/api/stripe/webhook to the
// Stripe dashboard (Developers → Webhooks) listening for payment_intent.succeeded.

function handlePaymentIntentSucceeded(event: Stripe.Event) {
  const pi = event.data.object as Stripe.PaymentIntent;
  const { clientName, clientEmail, menuName, eventDate, depositAmount, orderTotal } = pi.metadata;

  console.log("[payment_intent.succeeded]", {
    paymentIntentId: pi.id,
    clientName,
    clientEmail,
    menuName,
    eventDate,
    depositAmount,
    orderTotal,
    amountReceived: `$${(pi.amount_received / 100).toFixed(2)}`,
  });

  // TODO: Update HubSpot deal to "Deposit Received" stage using clientEmail.
  // See app/api/stripe/webhook/route.ts handleInvoicePaid for the HubSpot pattern.

  return NextResponse.json({ received: true });
}

// ── invoice.paid ──────────────────────────────────────────────────────────
// Fired when a final balance invoice is paid via the invoicing flow.
// Updates the corresponding HubSpot deal to "Closed Won".

async function handleInvoicePaid(event: Stripe.Event) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const invoice = event.data.object as Stripe.Invoice;
  const customerEmail = invoice.customer_email;

  if (!customerEmail) {
    console.error("invoice.paid event has no customer_email", { invoiceId: invoice.id });
    // Return 200 — retrying won't fix a missing email field.
    return NextResponse.json({ received: true, warning: "no_customer_email" });
  }

  if (!hubspotToken) {
    console.error("HUBSPOT_ACCESS_TOKEN is not set");
    return NextResponse.json({ error: "HubSpot not configured" }, { status: 500 });
  }

  try {
    const contactId = await findContactByEmail(customerEmail, hubspotToken);

    if (!contactId) {
      console.warn("No HubSpot contact found for email", { email: customerEmail });
      return NextResponse.json({ received: true, hubspot: "contact_not_found" });
    }

    const dealIds = await getAssociatedDealIds(contactId, hubspotToken);

    if (dealIds.length === 0) {
      console.warn("No deals associated with HubSpot contact", { contactId });
      return NextResponse.json({ received: true, hubspot: "no_deals" });
    }

    await Promise.all(dealIds.map((id) => markDealWon(id, hubspotToken)));

    return NextResponse.json({ received: true, hubspot: "updated", dealIds });
  } catch (err) {
    const message = err instanceof Error ? err.message : "HubSpot error";
    console.error("HubSpot update error:", message);
    // Return 500 so Stripe retries delivery.
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// ── HubSpot helpers ───────────────────────────────────────────────────────

async function findContactByEmail(
  email: string,
  token: string
): Promise<string | null> {
  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filterGroups: [
        { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
      ],
      limit: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`HubSpot contact search failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json() as { results?: { id: string }[] };
  return data.results?.[0]?.id ?? null;
}

async function getAssociatedDealIds(
  contactId: string,
  token: string
): Promise<string[]> {
  const res = await fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}/associations/deals`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!res.ok) {
    throw new Error(`HubSpot association lookup failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json() as { results?: { id: string }[] };
  return (data.results ?? []).map((r) => r.id);
}

async function markDealWon(dealId: string, token: string): Promise<void> {
  const res = await fetch(`https://api.hubapi.com/crm/v3/objects/deals/${dealId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: { dealstage: "closedwon" },
    }),
  });

  if (!res.ok) {
    throw new Error(`HubSpot deal PATCH failed for ${dealId}: ${res.status} ${res.statusText}`);
  }
}
