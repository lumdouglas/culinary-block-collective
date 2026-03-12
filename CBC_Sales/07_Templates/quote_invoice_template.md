# CBC Quote / Invoice Template

> **Usage:** Use this structure for all quotes and invoices. Generate via `/quote` command or manually in Stripe Invoicing. Ensure every field is filled before sending to a client.

---

## QUOTE

```
╔══════════════════════════════════════════════════════════════╗
║                CULINARY BLOCK COLLECTIVE                     ║
║           Corporate Catering — San Jose, CA                  ║
║                                                              ║
║  Phone: (408) 555-0192                                       ║
║  Email: hello@culinaryblockcollective.com                    ║
║  Web:   culinaryblockcollective.com                          ║
╚══════════════════════════════════════════════════════════════╝

                         CATERING QUOTE

Quote #:        CBC-Q-[YYYY]-[###]
Date:           [Quote Date]
Valid Through:  [Quote Date + 14 days]

─────────────────────────────────────────────────────────────

PREPARED FOR:

  Company:      [Client Company Name]
  Contact:      [First Name] [Last Name]
  Title:        [Office Manager / HR Lead / etc.]
  Email:        [Client Email]
  Phone:        [Client Phone]

─────────────────────────────────────────────────────────────

EVENT DETAILS:

  Event Date:       [Date]
  Delivery Window:  [Time Range]
  Location:         [Full Address + Suite/Floor]
  Guest Count:      [Number]
  Service Tier:     [Tier 1 — Premium Drop-Off / Tier 2 — Attended Service]
  Cuisine:          [e.g., Sushi & Japanese]
  Chef:             [Chef Name]

─────────────────────────────────────────────────────────────

PRICING BREAKDOWN:

  Item                              Qty     Rate        Total
  ─────────────────────────────────────────────────────────
  [Cuisine] — [Tier] Service        [###]   $[##]/head  $[####]

  Add-Ons:
  ├─ [Add-on 1, e.g., Juice Bundle] [###]   $[##]/each  $[####]
  ├─ [Add-on 2, e.g., Carbon Offset] 1      $50         $50
  └─ [Add-on 3, if any]             [###]   $[##]       $[####]

                                            ─────────────────
                                Subtotal:   $[####]
                 New Client Discount (10%):  -$[####]
                                            ─────────────────
                              TOTAL QUOTE:   $[####]

─────────────────────────────────────────────────────────────

WHAT'S INCLUDED:

  ✓ Branded packaging & disposable serving ware
  ✓ Chafing dishes or insulated delivery trays
  ✓ Serving utensils & printed menu card
  ✓ Individual dietary labeling (vegan, GF, nut-free, dairy-free)
  ✓ Delivery within confirmed window
  [If Tier 2:]
  ✓ 1–2 on-site CBC staff (setup, buffet maintenance, cleanup)
  ✓ Proper linen and labeled stations

  On-Time Delivery Guarantee: If delivery arrives outside the
  confirmed window, your next order is on us.

  Certificate of Insurance available upon request.

─────────────────────────────────────────────────────────────

DIETARY ACCOMMODATIONS:

  Vegan:        [Number]
  Gluten-Free:  [Number]
  Nut-Free:     [Number]
  Dairy-Free:   [Number]
  Other:        [Specify]

  All items individually labeled. Full dietary breakdown sheet
  included with every order.

─────────────────────────────────────────────────────────────

PAYMENT TERMS:

  • 50% deposit due at booking confirmation ($[####])
  • Remaining 50% due within 15 days of event (Net 15)
  • Accepted: ACH bank transfer, credit card (Stripe), check
  • Credit card payments include a 3% processing fee

CANCELLATION POLICY:

  • 5+ business days before event: Full deposit refund minus
    $150 administrative fee
  • Under 5 business days: Deposit is non-refundable. If
    ingredients purchased, client owes ingredient cost.

─────────────────────────────────────────────────────────────

TO CONFIRM THIS BOOKING:

  1. Reply to this email or call (408) 555-0192
  2. We'll send a deposit invoice via Stripe
  3. Once deposit is received, your date is locked

  This quote is valid for 14 days from the date above.

─────────────────────────────────────────────────────────────

  Culinary Block Collective
  "Fresh, sustainable catering that wows your team —
   delivered on time."
```

---

## INVOICE (Post-Event)

```
╔══════════════════════════════════════════════════════════════╗
║                CULINARY BLOCK COLLECTIVE                     ║
║           Corporate Catering — San Jose, CA                  ║
║                                                              ║
║  Phone: (408) 555-0192                                       ║
║  Email: hello@culinaryblockcollective.com                    ║
║  Web:   culinaryblockcollective.com                          ║
╚══════════════════════════════════════════════════════════════╝

                       CATERING INVOICE

Invoice #:      CBC-INV-[YYYY]-[###]
Invoice Date:   [Date — within 24 hours of event]
Due Date:       [Invoice Date + 15 days]
Quote Ref:      CBC-Q-[YYYY]-[###]

─────────────────────────────────────────────────────────────

BILLED TO:

  Company:      [Client Company Name]
  Contact:      [First Name] [Last Name]
  Email:        [Client Email]
  Phone:        [Client Phone]
  Address:      [Billing Address if different from event]

─────────────────────────────────────────────────────────────

EVENT SUMMARY:

  Event Date:       [Date]
  Location:         [Full Address]
  Final Guest Count:[Actual number served — may differ from quote]
  Cuisine:          [Cuisine]
  Chef:             [Chef Name]
  Service Tier:     [Tier 1 / Tier 2]

─────────────────────────────────────────────────────────────

CHARGES:

  Item                              Qty     Rate        Total
  ─────────────────────────────────────────────────────────
  [Cuisine] — [Tier] Service        [###]   $[##]/head  $[####]

  Add-Ons:
  ├─ [Add-on 1]                     [###]   $[##]       $[####]
  └─ [Add-on 2]                     [###]   $[##]       $[####]

                                            ─────────────────
                                Subtotal:   $[####]
                           Discount (10%):  -$[####]
                                            ─────────────────
                               Event Total: $[####]

  PAYMENTS RECEIVED:
  ├─ Deposit (50%) — [Deposit Date]         -$[####]
                                            ─────────────────
                          BALANCE DUE:       $[####]

─────────────────────────────────────────────────────────────

DELIVERY CONFIRMATION:

  ✓ Delivered on [Date] at [Time]
  ✓ [##] boxes delivered (matches order)
  ✓ All items individually labeled for dietary needs
  ✓ Dietary breakdown sheet included

─────────────────────────────────────────────────────────────

PAYMENT INSTRUCTIONS:

  Pay online:   [Stripe Invoice Link — "Pay Now" button]
  ACH Transfer: [Bank Name], Routing: [####], Account: [####]
  Check:        Make payable to "Culinary Block Collective"
                Mail to: [CBC Mailing Address]

  Payment is due by [Due Date].
  Credit card payments include a 3% processing fee.

─────────────────────────────────────────────────────────────

QUESTIONS?

  Contact Doug: (408) 555-0192
  Email: hello@culinaryblockcollective.com

  Thank you for choosing Culinary Block Collective!
```

---

## Numbering Convention

- **Quotes:** CBC-Q-2026-001, CBC-Q-2026-002, ...
- **Invoices:** CBC-INV-2026-001, CBC-INV-2026-002, ...
- Reset numbering each calendar year
- Every invoice must reference its original quote number
