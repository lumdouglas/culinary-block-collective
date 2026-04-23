"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// ── Design tokens matching the CBC site ────────────────────────────────────
const css = {
  dgreen: "#1B4332",
  green: "#2D6A4F",
  lgreen: "#EDF5EE",
  gold: "#C9992A",
  lgold: "#FAF4E1",
  cream: "#FAFAF8",
  cream2: "#F4F1EB",
  border: "#E5E0D8",
  text: "#1A1814",
  muted: "#6B6560",
  white: "#FFFFFF",
} as const;

const fontDisplay = "'Cormorant Garamond', Georgia, serif";
const fontBody = "'Inter', system-ui, sans-serif";

function fmt(dollars: number) {
  return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// ── Stripe Payment Element form ───────────────────────────────────────────
function CheckoutForm({
  depositAmount,
  orderTotal,
  piId,
}: {
  depositAmount: number;
  orderTotal: number;
  piId: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setErrorMsg(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/deposit-confirmed?session=${piId}`,
      },
    });

    // confirmPayment only returns here if there's an immediate error.
    // Successful payments redirect to return_url.
    if (error) {
      setErrorMsg(error.message ?? "Payment failed. Please try again.");
      setProcessing(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMsg && (
        <p
          style={{
            marginTop: 16,
            fontSize: "0.875rem",
            color: "#b91c1c",
            lineHeight: 1.5,
          }}
        >
          {errorMsg}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{
          marginTop: 24,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: processing ? "#a67e09" : css.gold,
          color: css.dgreen,
          fontFamily: fontBody,
          fontWeight: 700,
          fontSize: "1rem",
          padding: "16px 28px",
          borderRadius: 6,
          border: "none",
          cursor: processing ? "not-allowed" : "pointer",
          transition: "background .15s, transform .15s",
          boxShadow: "0 4px 20px rgba(0,0,0,0.13)",
          opacity: processing ? 0.8 : 1,
        }}
      >
        {processing ? "Processing…" : `Pay deposit — ${fmt(depositAmount)}`}
      </button>
      <p
        style={{
          marginTop: 12,
          textAlign: "center",
          fontSize: "0.75rem",
          color: css.muted,
          lineHeight: 1.6,
        }}
      >
        Secured by Stripe · Balance of {fmt(orderTotal - depositAmount)} invoiced after your event
      </p>
    </form>
  );
}

// ── Order summary + payment layout ────────────────────────────────────────
interface OrderDetails {
  clientName: string;
  clientEmail: string;
  menuName: string;
  eventDate: string;
  guestCount: number;
  pricePerGuest: number;
}

function DepositInner() {
  const searchParams = useSearchParams();

  const clientName = searchParams.get("clientName") ?? "";
  const clientEmail = searchParams.get("clientEmail") ?? "";
  const menuName = searchParams.get("menuName") ?? "";
  const eventDate = searchParams.get("eventDate") ?? "";
  const guestCount = parseInt(searchParams.get("guestCount") ?? "0", 10);
  const pricePerGuest = parseFloat(searchParams.get("pricePerGuest") ?? "0");

  const hasValidParams =
    clientName && clientEmail && menuName && eventDate && guestCount > 0 && pricePerGuest > 0;

  const orderTotal = guestCount * pricePerGuest;
  const depositAmount = orderTotal * 0.25;
  const suggestACH = orderTotal > 1000;

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [piId, setPiId] = useState<string>("");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasValidParams) return;
    setLoading(true);

    fetch("/api/stripe/create-deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientName, clientEmail, menuName, eventDate, guestCount, pricePerGuest }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setClientSecret(data.clientSecret);
        setPiId((data.clientSecret as string).split("_secret_")[0]);
      })
      .catch((err: Error) => setFetchError(err.message))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount — params come from URL and won't change

  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: css.green,
      colorBackground: css.white,
      colorText: css.text,
      fontFamily: fontBody,
      borderRadius: "6px",
    },
  };

  return (
    <>
      {/* ── Global styles ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: ${fontBody}; color: ${css.text}; background: ${css.cream}; line-height: 1.6; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 860px) { .nav-links { display: none !important; } .nav-burger { display: flex !important; } }
        @media (max-width: 700px) { .deposit-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* ── Nav ── */}
      <Nav />

      {/* ── Page header ── */}
      <div
        style={{
          background: css.dgreen,
          padding: "52px 32px 48px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "5px 16px",
            borderRadius: 2,
            marginBottom: 16,
          }}
        >
          Deposit Payment
        </span>
        <h1
          style={{
            fontFamily: fontDisplay,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: css.white,
            lineHeight: 1.15,
          }}
        >
          Confirm Your Booking
        </h1>
        <p
          style={{
            marginTop: 10,
            fontSize: "0.975rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.7,
          }}
        >
          A 25% deposit secures your date. Balance invoiced after your event.
        </p>
      </div>

      {/* ── Main content ── */}
      <main
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "52px 24px 80px",
        }}
      >
        {!hasValidParams ? (
          <ErrorCard message="This deposit link is missing required order details. Please contact us and we'll send a corrected link." />
        ) : fetchError ? (
          <ErrorCard message={`Could not initialize payment: ${fetchError}`} />
        ) : (
          <div
            className="deposit-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              alignItems: "start",
            }}
          >
            {/* ── Order summary ── */}
            <div
              style={{
                background: css.white,
                border: `1px solid ${css.border}`,
                borderRadius: 8,
                padding: "32px 28px",
                boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: css.green,
                  background: css.lgreen,
                  display: "inline-block",
                  padding: "5px 16px",
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              >
                Order Summary
              </p>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: css.dgreen,
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                {menuName}
              </h2>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <SummaryRow label="Client" value={clientName} />
                  <SummaryRow label="Event Date" value={eventDate} />
                  <SummaryRow label="Guest Count" value={`${guestCount} guests`} />
                  <SummaryRow label="Per Person" value={fmt(pricePerGuest)} />
                </tbody>
              </table>

              <div
                style={{
                  margin: "20px 0",
                  borderTop: `1px solid ${css.border}`,
                }}
              />

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <SummaryRow label="Order Total" value={fmt(orderTotal)} bold />
                  <tr>
                    <td
                      style={{
                        padding: "10px 0 10px",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: css.dgreen,
                      }}
                    >
                      Deposit Due Today (25%)
                    </td>
                    <td
                      style={{
                        padding: "10px 0 10px",
                        textAlign: "right",
                        fontSize: "1.4rem",
                        fontFamily: fontDisplay,
                        fontWeight: 700,
                        color: css.dgreen,
                      }}
                    >
                      {fmt(depositAmount)}
                    </td>
                  </tr>
                  <SummaryRow
                    label="Balance After Event"
                    value={fmt(orderTotal - depositAmount)}
                    muted
                  />
                </tbody>
              </table>

              {suggestACH && (
                <div
                  style={{
                    marginTop: 20,
                    background: css.lgold,
                    border: `1px solid rgba(184,150,12,0.3)`,
                    borderRadius: 6,
                    padding: "14px 16px",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>💡</span>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: css.dgreen,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong>ACH bank transfer recommended</strong> for orders over $1,000 — avoids
                    card processing fees. Select "Bank account" in the payment form.
                  </p>
                </div>
              )}
            </div>

            {/* ── Payment form ── */}
            <div
              style={{
                background: css.white,
                border: `1px solid ${css.border}`,
                borderRadius: 8,
                padding: "32px 28px",
                boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: css.green,
                  background: css.lgreen,
                  display: "inline-block",
                  padding: "5px 16px",
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              >
                Secure Payment
              </p>

              {loading || !clientSecret ? (
                <div
                  style={{
                    minHeight: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: css.muted,
                    fontSize: "0.875rem",
                  }}
                >
                  {loading ? "Preparing payment…" : "Initializing…"}
                </div>
              ) : (
                <Elements
                  stripe={stripePromise}
                  options={{ clientSecret, appearance }}
                >
                  <CheckoutForm
                    depositAmount={depositAmount}
                    orderTotal={orderTotal}
                    piId={piId}
                  />
                </Elements>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────

function SummaryRow({
  label,
  value,
  bold,
  muted,
}: {
  label: string;
  value: string;
  bold?: boolean;
  muted?: boolean;
}) {
  return (
    <tr>
      <td
        style={{
          padding: "7px 0",
          fontSize: "0.875rem",
          color: muted ? css.muted : css.text,
          fontWeight: bold ? 600 : 400,
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "7px 0",
          textAlign: "right",
          fontSize: "0.875rem",
          color: muted ? css.muted : css.text,
          fontWeight: bold ? 600 : 400,
        }}
      >
        {value}
      </td>
    </tr>
  );
}

function ErrorCard({ message }: { message: string }) {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: css.white,
        border: "1px solid #f0c0b0",
        borderRadius: 8,
        padding: "48px 36px",
        textAlign: "center",
        boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
      }}
    >
      <div style={{ fontSize: "1.5rem", marginBottom: 20 }}>⚠️</div>
      <h2
        style={{
          fontFamily: fontDisplay,
          fontSize: "1.6rem",
          fontWeight: 600,
          color: css.dgreen,
          marginBottom: 12,
        }}
      >
        Something went wrong
      </h2>
      <p style={{ fontSize: "0.925rem", color: css.muted, lineHeight: 1.7, marginBottom: 28 }}>
        {message}
      </p>
      <a
        href="mailto:culinaryblockcatering@gmail.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          border: `1.5px solid ${css.green}`,
          color: css.green,
          fontWeight: 600,
          fontSize: "0.9rem",
          padding: "12px 24px",
          borderRadius: 6,
          transition: "background .15s, color .15s",
        }}
      >
        Email Us
      </a>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: css.white,
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          borderBottom: `1px solid ${css.border}`,
          boxShadow: "0 1px 12px rgba(0,0,0,0.06)",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: fontDisplay,
            color: css.dgreen,
            fontWeight: 600,
            fontSize: "1.25rem",
            letterSpacing: ".02em",
          }}
        >
          Culinary Block <span style={{ color: css.gold }}>Collective</span>
        </a>

        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 2, margin: "0 16px" }}
        >
          {["/#menus", "/#pricing", "/#faq"].map((href, i) => (
            <a
              key={href}
              href={href}
              style={{
                color: css.muted,
                fontSize: "0.875rem",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 4,
              }}
            >
              {["Our Chefs", "Pricing", "FAQ"][i]}
            </a>
          ))}
        </div>

        <a
          href="tel:+14156994397"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: css.gold,
            fontWeight: 700,
            fontSize: "0.875rem",
            padding: "10px 20px",
          }}
        >
          (415) 699-4397
        </a>

        <button
          className="nav-burger"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: css.dgreen, borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: css.dgreen, borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: css.dgreen, borderRadius: 2 }} />
        </button>
      </nav>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            background: css.white,
            borderTop: `1px solid ${css.border}`,
            zIndex: 99,
            padding: "12px 16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
        >
          <a href="/#menus" style={{ padding: "10px 14px", fontSize: "0.95rem", color: css.muted }}>
            Our Chefs
          </a>
          <a href="/#pricing" style={{ padding: "10px 14px", fontSize: "0.95rem", color: css.muted }}>
            Pricing
          </a>
          <a href="tel:+14156994397" style={{ padding: "12px 14px", background: css.dgreen, color: css.white, fontWeight: 600, borderRadius: 6, textAlign: "center", marginTop: 8 }}>
            📞 (415) 699-4397
          </a>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#0D2118",
        padding: "36px 32px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: fontBody,
          fontSize: "1rem",
          fontWeight: 600,
          color: css.white,
          marginBottom: 10,
        }}
      >
        Culinary Block <span style={{ color: css.gold }}>Collective</span>
      </p>
      <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: 8 }}>
        Questions?{" "}
        <a href="tel:+14156994397" style={{ color: "rgba(255,255,255,0.55)" }}>
          (415) 699-4397
        </a>{" "}
        ·{" "}
        <a href="mailto:culinaryblockcatering@gmail.com" style={{ color: "rgba(255,255,255,0.55)" }}>
          culinaryblockcatering@gmail.com
        </a>
      </p>
      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", marginTop: 8 }}>
        © 2026 Culinary Block Collective · San Jose, CA
      </p>
    </footer>
  );
}

// ── Page export ───────────────────────────────────────────────────────────

export default function DepositPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fontBody,
            color: css.muted,
          }}
        >
          Loading…
        </div>
      }
    >
      <DepositInner />
    </Suspense>
  );
}
