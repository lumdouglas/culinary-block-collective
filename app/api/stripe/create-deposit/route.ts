import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

interface CreateDepositBody {
  clientName: string;
  clientEmail: string;
  guestCount: number;
  pricePerGuest: number;
  menuName: string;
  eventDate: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: CreateDepositBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { clientName, clientEmail, guestCount, pricePerGuest, menuName, eventDate } = body;

  if (!clientName?.trim())
    return NextResponse.json({ error: "clientName is required" }, { status: 400 });
  if (!clientEmail?.trim() || !EMAIL_RE.test(clientEmail))
    return NextResponse.json({ error: "A valid clientEmail is required" }, { status: 400 });
  if (!Number.isInteger(guestCount) || guestCount < 1)
    return NextResponse.json({ error: "guestCount must be a positive integer" }, { status: 400 });
  if (typeof pricePerGuest !== "number" || pricePerGuest <= 0)
    return NextResponse.json({ error: "pricePerGuest must be a positive number" }, { status: 400 });
  if (!menuName?.trim())
    return NextResponse.json({ error: "menuName is required" }, { status: 400 });
  if (!eventDate?.trim())
    return NextResponse.json({ error: "eventDate is required" }, { status: 400 });

  const orderTotal = guestCount * pricePerGuest;
  const depositAmount = orderTotal * 0.25;
  const depositCents = Math.round(depositAmount * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: depositCents,
      currency: "usd",
      payment_method_types: ["card", "us_bank_account"],
      metadata: {
        clientName: clientName.trim(),
        clientEmail: clientEmail.trim(),
        menuName: menuName.trim(),
        eventDate: eventDate.trim(),
        guestCount: String(guestCount),
        orderTotal: orderTotal.toFixed(2),
        depositAmount: depositAmount.toFixed(2),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      depositAmount,
      orderTotal,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create payment intent";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
