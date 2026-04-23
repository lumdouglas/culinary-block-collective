import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import stripe from "@/lib/stripe";

// Stripe requires the raw body bytes for signature verification — do not parse as JSON.
export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;

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

  if (event.type !== "invoice.paid") {
    return NextResponse.json({ received: true });
  }

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
        {
          filters: [
            { propertyName: "email", operator: "EQ", value: email },
          ],
        },
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
