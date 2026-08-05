import stripe from "@/lib/stripe";

const fontDisplay = "'Cormorant Garamond', Georgia, serif";
const fontBody = "'Inter', system-ui, sans-serif";
const css = {
  dgreen: "#1B4332",
  green: "#2D6A4F",
  lgreen: "#EDF5EE",
  gold: "#C9992A",
  cream: "#FAFAF8",
  border: "#E5E0D8",
  muted: "#6B6560",
  white: "#FFFFFF",
  text: "#1A1814",
} as const;

function fmt(dollars: number) {
  return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default async function DepositConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session } = await searchParams;

  // ── Fetch and validate the PaymentIntent from Stripe ─────────────────
  if (!session || !session.startsWith("pi_")) {
    return <ErrorState message="This confirmation link is missing or invalid. Check your email for your receipt, or contact us." />;
  }

  let paymentIntent;
  try {
    paymentIntent = await stripe.paymentIntents.retrieve(session);
  } catch {
    return <ErrorState message="Could not retrieve your payment details. Please contact us with your payment reference." />;
  }

  if (paymentIntent.status !== "succeeded") {
    const statusMessages: Record<string, string> = {
      processing: "Your payment is still processing. You'll receive a confirmation email shortly.",
      requires_payment_method: "Your payment was not completed. Please return and try again.",
      canceled: "This payment was canceled. Please contact us to reschedule.",
    };
    return (
      <ErrorState
        message={
          statusMessages[paymentIntent.status] ??
          `Payment status: ${paymentIntent.status}. Please contact us for assistance.`
        }
      />
    );
  }

  const meta = paymentIntent.metadata;
  const clientName = meta.clientName ?? "";
  const menuName = meta.menuName ?? "";
  const eventDate = meta.eventDate ?? "";
  const guestCount = meta.guestCount ?? "";
  const orderTotal = parseFloat(meta.orderTotal ?? "0");
  const depositAmount = paymentIntent.amount_received / 100; // use actual charged amount
  const balanceDue = orderTotal - depositAmount;

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: ${fontBody}; background: ${css.cream}; color: ${css.text}; line-height: 1.6; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      {/* Nav */}
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
        <a
          href="tel:+14156994397"
          style={{ color: css.gold, fontWeight: 700, fontSize: "0.875rem", padding: "10px 20px" }}
        >
          (415) 699-4397
        </a>
      </nav>

      {/* Main */}
      <main
        style={{
          minHeight: "calc(100vh - 68px - 88px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            background: css.white,
            border: `1px solid ${css.border}`,
            borderRadius: 8,
            boxShadow: "0 8px 48px rgba(0,0,0,0.11)",
            padding: "52px 48px",
            maxWidth: 560,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Check icon */}
          <div
            style={{
              width: 64,
              height: 64,
              background: css.lgreen,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke={css.green}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: css.green,
              background: css.lgreen,
              padding: "5px 16px",
              borderRadius: 2,
              marginBottom: 16,
            }}
          >
            Deposit Received
          </span>

          <h1
            style={{
              fontFamily: fontDisplay,
              fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: css.dgreen,
              marginBottom: 14,
              letterSpacing: "-0.01em",
            }}
          >
            You&rsquo;re booked, {clientName.split(" ")[0]}.
          </h1>
          <p
            style={{
              fontSize: "0.975rem",
              color: css.muted,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Your deposit has been processed. We&rsquo;ll be in touch to confirm your event details.
            The remaining balance will be invoiced after your event.
          </p>

          {/* Payment summary table */}
          <div
            style={{
              background: css.cream,
              border: `1px solid ${css.border}`,
              borderRadius: 6,
              padding: "22px 24px",
              textAlign: "left",
              marginBottom: 32,
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <ConfirmRow label="Menu" value={menuName} />
                <ConfirmRow label="Event Date" value={eventDate} />
                <ConfirmRow label="Guests" value={`${guestCount} guests`} />
                <ConfirmRow label="Order Total" value={fmt(orderTotal)} />
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      borderTop: `1px solid ${css.border}`,
                      paddingTop: 12,
                      paddingBottom: 4,
                    }}
                  />
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", fontSize: "0.9rem", fontWeight: 700, color: css.dgreen }}>
                    Deposit Paid Today
                  </td>
                  <td
                    style={{
                      padding: "6px 0",
                      textAlign: "right",
                      fontSize: "1.3rem",
                      fontFamily: fontDisplay,
                      fontWeight: 700,
                      color: css.green,
                    }}
                  >
                    {fmt(depositAmount)}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", fontSize: "0.875rem", color: css.muted }}>
                    Remaining Balance
                  </td>
                  <td style={{ padding: "6px 0", textAlign: "right", fontSize: "0.875rem", color: css.muted }}>
                    {fmt(balanceDue)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "#EDF5EE",
              border: "1px solid #B7D4BF",
              borderRadius: 6,
              padding: "14px 18px",
              fontSize: "0.875rem",
              color: css.dgreen,
              lineHeight: 1.6,
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            <strong>What happens next:</strong> We&rsquo;ll confirm your order details within 24
            hours. Your remaining balance of <strong>{fmt(balanceDue)}</strong> will be invoiced
            within 5 business days after your event.
          </div>

          <hr style={{ border: "none", borderTop: `1px solid ${css.border}`, marginBottom: 24 }} />

          <p style={{ fontSize: "0.875rem", color: css.muted }}>
            Questions?{" "}
            <a href="tel:+14156994397" style={{ color: css.green, fontWeight: 600 }}>
              (415) 699-4397
            </a>{" "}
            ·{" "}
            <a href="mailto:culinaryblockcatering@gmail.com" style={{ color: css.green, fontWeight: 600 }}>
              culinaryblockcatering@gmail.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0D2118", padding: "28px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.28)" }}>
          © 2026 Culinary Block Collective · San Jose, CA
        </p>
      </footer>
    </>
  );
}

function ConfirmRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={{ padding: "6px 0", fontSize: "0.875rem", color: css.muted }}>{label}</td>
      <td style={{ padding: "6px 0", textAlign: "right", fontSize: "0.875rem", color: css.text }}>
        {value}
      </td>
    </tr>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <>
      <style>{`body { font-family: ${fontBody}; background: ${css.cream}; margin: 0; }`}</style>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            background: css.white,
            border: "1px solid #f0c0b0",
            borderRadius: 8,
            padding: "48px 36px",
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
          }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: 20 }}>⚠️</div>
          <h1
            style={{
              fontFamily: fontDisplay,
              fontSize: "1.8rem",
              fontWeight: 600,
              color: css.dgreen,
              marginBottom: 12,
            }}
          >
            Payment not confirmed
          </h1>
          <p style={{ fontSize: "0.925rem", color: css.muted, lineHeight: 1.7, marginBottom: 28 }}>
            {message}
          </p>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: `1.5px solid ${css.green}`,
              color: css.green,
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "12px 24px",
              borderRadius: 6,
            }}
          >
            Back to Home
          </a>
        </div>
      </main>
    </>
  );
}
