import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

interface CreateInvoiceBody {
  clientName: string;
  clientEmail: string;
  guestCount: number;
  pricePerGuest: number;
  menuName: string;
  eventDate: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: CreateInvoiceBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { clientName, clientEmail, guestCount, pricePerGuest, menuName, eventDate } = body;

  if (!clientName?.trim()) {
    return NextResponse.json({ error: "clientName is required" }, { status: 400 });
  }
  if (!clientEmail?.trim() || !EMAIL_RE.test(clientEmail)) {
    return NextResponse.json({ error: "A valid clientEmail is required" }, { status: 400 });
  }
  if (!Number.isInteger(guestCount) || guestCount < 1) {
    return NextResponse.json({ error: "guestCount must be a positive integer" }, { status: 400 });
  }
  if (typeof pricePerGuest !== "number" || pricePerGuest <= 0) {
    return NextResponse.json({ error: "pricePerGuest must be a positive number" }, { status: 400 });
  }
  if (!menuName?.trim()) {
    return NextResponse.json({ error: "menuName is required" }, { status: 400 });
  }
  if (!eventDate?.trim()) {
    return NextResponse.json({ error: "eventDate is required" }, { status: 400 });
  }

  try {
    const customer = await stripe.customers.create({
      name: clientName.trim(),
      email: clientEmail.trim(),
    });

    const invoice = await stripe.invoices.create({
      customer: customer.id,
      collection_method: "send_invoice",
      days_until_due: 30,
      payment_settings: {
        payment_method_types: ["card", "us_bank_account"],
      },
      metadata: {
        menuName: menuName.trim(),
        eventDate: eventDate.trim(),
        guestCount: String(guestCount),
      },
    });

    await stripe.invoiceItems.create({
      customer: customer.id,
      invoice: invoice.id,
      description: `${menuName.trim()} — ${guestCount} guests @ $${pricePerGuest.toFixed(2)}/person (Event: ${eventDate.trim()})`,
      amount: Math.round(guestCount * pricePerGuest * 100),
      currency: "usd",
    });

    const finalized = await stripe.invoices.finalizeInvoice(invoice.id);
    const sent = await stripe.invoices.sendInvoice(finalized.id);

    return NextResponse.json({
      invoiceId: sent.id,
      invoiceUrl: sent.hosted_invoice_url,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create invoice";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
