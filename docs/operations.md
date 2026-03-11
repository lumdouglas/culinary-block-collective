# CBC Operations — Order Fulfillment Workflow

> **Purpose:** How an order moves from first inquiry to delivery, payment, and follow-up. Reference this when coordinating events, onboarding a new chef, or troubleshooting any stage of the process.
> **Responsibility split:** Chefs own food prep and delivery (established catering businesses with their own teams). CBC owns sales, packaging, labeling, coordination, and invoicing. Doug assists with box preparation and staging when needed to ensure on-time delivery and quality, and provides backup delivery capacity at a negotiated per-mile rate.

---

## The Full Order Lifecycle

```
Inquiry → Quote → Booking Confirmation → Chef Assignment → Prep Day → Delivery → Post-Event → Payment
```

---

## Stage 1 — Inquiry

**Inbound channels:**
- Phone / Text: (408) 555-0192 ← primary close channel
- Email: hello@culinaryblockcollective.com
- Website quote form (Vercel-hosted site)
- LinkedIn DM → redirected to phone/email

**When an inquiry comes in:**
1. Log it in HubSpot immediately — stage: **New Lead**
2. Respond within **2 hours** (phone/text) or **24 hours** (email/form)
3. Collect the 5 essential details before quoting anything:
   - Event date and time
   - Guest count
   - Cuisine preference (or ask: "Any cuisines your team loves?")
   - Dietary restrictions (vegan, GF, nut-free, halal-adjacent, etc.)
   - Budget per person or total

**If they're not ready to book:** Send menus + quote by end of day. Text: *"Happy to hold a slot — just let me know."*

---

## Stage 2 — Quote

**Turnaround commitment:** Quote within 24 hours of inquiry. Speed is the #1 conversion lever.

**How to build the quote:**
1. Choose package based on guest count and context:
   - Standard Box ($20–25/box) — team lunches, onboarding, informal events
   - Premium Box ($25–30/box) — all-hands, product launches, client dinners
   - Mix & Match — 150+ guests wanting 2+ cuisines (custom pricing)
2. Apply per-person rate for chosen cuisine (see `docs/menu-pricing.md`)
3. Add any relevant add-ons
4. Apply new client 10% discount if applicable
5. Total = guests × per-person rate + add-ons − discount

**Use `/quote` command** in the cbc-sales plugin to generate a formatted PDF automatically.

**Quote format must include:**
- Itemized pricing (no line items hidden)
- Dietary labeling confirmation
- On-time delivery guarantee language
- Validity period (14 days)
- CTA: call/text (408) 555-0192 or email to confirm

**Move HubSpot stage to: Quote Sent**

**Offer follow-up:** If no response in 48 hours, call or text: *"Just checking on the quote I sent — happy to adjust the menu or hold a delivery slot."*

---

## Stage 3 — Booking Confirmation

**Once client says yes:**
1. Confirm in writing (text or email) — date, guest count, cuisine, delivery address, time window
2. Collect delivery details:
   - Exact address + floor/suite/building access instructions
   - Parking/loading dock info
   - Onsite contact name and phone number
   - Setup requirements (tables, serving area, etc.)
3. **Collect deposit** — 50% of quoted total due at booking confirmation (secures the date and triggers chef assignment). Deposit is non-refundable if client cancels under 5 business days before the event (see Cancellation Policy below).
4. **Send client welcome email** — confirmation of all event details, what to expect on delivery day, CBC contact info for day-of questions, and a link to the cancellation/change policy.
5. Move HubSpot stage to: **Won**
6. Create event entry — log all delivery details

**Lead time requirements:**
| Order Size | Minimum Booking Window |
|---|---|
| Under 150 guests | 48 hours |
| 150–300 guests | 5 business days |
| Mix & Match (2+ cuisines) | 5 business days |
| Recurring standing order | Set once — no per-event lead time |

---

## Stage 4 — Chef Assignment

**Immediately after booking is confirmed:**
1. Check chef availability for the event date (refer to `docs/chef-profiles.md` for each chef's availability preferences and communication style)
2. Contact the relevant chef — match cuisine to order
3. Confirm they can fulfill: guest count, date, dietary requirements, tier
4. Communicate:
   - Event date and delivery window
   - Guest count and box count (minimum 50 boxes)
   - Dietary breakdown (e.g., "20 vegan, 10 GF, 5 nut-free out of 100 total")
   - Any special menu notes from the client
   - Delivery handoff time and location at the commissary

**Chef responsibilities (per contractor agreement):**
- Menu prep, ingredient sourcing, cooking
- Maintaining food safety logs and temperature control
- Handing off food at commissary at agreed time in proper containers
- Following CBC's labeling and packaging standards

**CBC responsibilities:**
- Packaging into compostable containers (WebstaurantStore, ~$0.02/unit)
- Applying individual dietary labels to every item
- Coordinating delivery with the chef's team — confirming handoff time, delivery window, and on-site contact details
- On-site setup if included in the quote

**⚠️ Chef cancellation policy:** If a chef cancels within 7 days of a confirmed order, they owe CBC a $250 fee. Maintain at least one backup option per cuisine type in case of cancellation.

**Chef change/availability notice:** 7 days written notice required for any changes to availability or services.

---

## Stage 5 — Prep Day

**CBC ops checklist (day before or morning of event):**

- [ ] Confirm chef is on track — brief check-in text
- [ ] Confirm delivery address and access details with onsite contact
- [ ] Confirm delivery window, route, and driver with chef's team
- [ ] Compostable containers and packaging materials are stocked
- [ ] Label stock is ready (vegan, GF, nut-free, dairy-free labels)
- [ ] Delivery coordinator is briefed on event details

**Packaging standards (non-negotiable):**
- Every individual item gets a dietary label
- No unlabeled items leave the kitchen — zero exceptions
- BPI-certified compostable containers only
- Branded napkins included (if premium packaging was ordered)
- Full dietary breakdown sheet included with every order (one sheet listing all items + their labels)

---

## Stage 6 — Delivery

**Delivery method:** Chef's team. The chefs operating through Culinary Block are established catering business owners with their own delivery teams and existing commercial delivery operations. Delivery terms are confirmed with each chef at onboarding and documented in their contractor agreement.

**Doug's role:** Box preparation and staging assistance when needed to ensure on-time delivery and quality. Coordination oversight on every order. Available as backup delivery driver at a negotiated per-mile rate when the chef's team is unavailable or needs support.

**Chef delivery responsibilities (per delivery SOP — see Chef Delivery Protocol below):**
- Transport food from commissary to client site within the confirmed delivery window
- Maintain safe food temperature from kitchen to handoff
- Count all boxes against the order before loading — no short deliveries
- Confirm arrival and setup with the on-site contact
- Report any delays or issues to Doug immediately — never let the client find out first

**Doug's coordination responsibilities:**
- Confirm delivery window, route, and driver with chef's team the day before
- Be reachable by phone throughout the delivery window
- Serve as the client-facing point of contact for any day-of questions
- Confirm delivery completion with the on-site contact after handoff

**On-time delivery guarantee:** If delivery arrives outside the confirmed window, the client's next order is free. Log any late delivery immediately in HubSpot with reason.

**If something goes wrong day-of:**
- Wrong item or missing box: Call the chef immediately, assess if a replacement can be made
- Delivery delay: Call the client's onsite contact proactively — never let them find out on their own
- Chef no-show: Activate backup chef or contact the client immediately with options

---

## Stage 7 — Post-Event Follow-Up

**Within 48 hours of delivery:**
1. Send Email 5 (post-event thank you + feedback ask) — see `docs/email-outreach.md`
2. Text the client: *"Hope the team loved the food — any feedback for us?"*
3. Request a Google review: *"Would you mind leaving us a quick Google review? Here's the link: [link]"*
4. If feedback is positive: pitch recurring contract immediately
   - *"We have a standing order program — 5% off weekly or bi-weekly bookings. Want me to put together a proposal?"*
5. Log all feedback in HubSpot notes

**NPS / satisfaction signals to watch:**
- Did food arrive on time? (If not — trigger free next order, log the issue)
- Were dietary labels accurate? (If any complaint — investigate with chef, document)
- Did the team enjoy the food? (Use positive responses in testimonials with permission)

---

## Stage 8 — Invoicing & Payment

### Client-Facing Invoice
- Send invoice within 24 hours of event completion
- Include: itemized breakdown, dietary labeling confirmation, delivery confirmation
- No hidden charges — what was quoted is what is invoiced
- **Accepted payment methods:** ACH bank transfer (preferred — no processing fee), credit card via Stripe (3% processing fee passed to client or absorbed by CBC — decide before launch), check (Net 15 terms)
- **Payment terms:** Net 15 from invoice date. Remaining balance = quoted total minus 50% deposit already collected at booking.
- **Late payment policy:** Reminder email at Day 16. Second notice at Day 22. At Day 30, account is placed on hold — no new bookings accepted until balance is cleared. At Day 45, escalate to collections or small claims. All late payment terms must be stated on the invoice and in the client service agreement.
- **Recurring clients:** Invoiced weekly or bi-weekly per their contract cadence. 5% recurring discount applied before the 75/25 split.

### Financial Reconciliation (after every event)
- Compare actual guest count vs. quoted guest count — adjust invoice if different
- Confirm any add-ons delivered match what was quoted
- Log actual CBC service kit cost for this event (packaging, labels, chafing dishes, napkins)
- Calculate actual margin: (CBC commission − kit cost − any staff cost) / total revenue
- Flag any event where actual margin falls below 15% — review pricing or minimum order size

### Chef / Contractor Payment
- **Revenue split:** Chef 75% / CBC 25%
- **Payment terms:** Net 30 from service date — paid only after CBC has received full client payment
- Calculate chef payment: (total order revenue after any client discount) × 75%
- Chef sets their own minimum revenue threshold per order — confirm before booking
- Chef is responsible for their own taxes, benefits, and overhead
- **Payment method to chefs:** ACH direct deposit or check — confirm banking details at onboarding (see Bank Account & Payment Setup below)
- **Payout documentation:** Each payment includes a remittance summary: event date, client name, guest count, gross revenue, 75% payout amount

---

## Chef Delivery Protocol

> **Purpose:** Standard operating procedures for every chef delivering a CBC order. These are the minimum requirements that protect the on-time delivery guarantee and the CBC brand. Doug reviews this with each chef at onboarding and enforces it on every order.

### Pre-Delivery (Day Before)
- [ ] Confirm delivery window with Doug by end of day
- [ ] Confirm driver name and contact number with Doug
- [ ] Confirm vehicle capacity is sufficient for the order size
- [ ] Review delivery address, floor/suite, parking, and loading dock details

### Day of Delivery
- [ ] Count all boxes against the order manifest before loading — short deliveries are not acceptable
- [ ] Confirm all items are labeled and the full dietary breakdown sheet is included
- [ ] Depart with enough time to arrive **15 minutes before** the confirmed delivery window
- [ ] Text Doug when the vehicle is loaded and en route: *"[Order name] loaded, en route, ETA [time]"*
- [ ] Text Doug when food is handed off to the on-site contact: *"[Order name] delivered and confirmed at [time]"*

### If Something Goes Wrong
- **Running late:** Call Doug immediately — not after arrival. Doug contacts the client proactively. Never let the client find out on their own.
- **Access issue (parking, loading dock, locked entrance):** Call the on-site contact first, then text Doug.
- **Missing or damaged item:** Call Doug immediately. Doug assesses whether a replacement is possible and communicates with the client.

### On-Time Guarantee — Chef's Responsibility
The CBC on-time delivery guarantee (late = client's next order free) is backed by the chef's delivery. A late delivery triggered by the chef's team may be factored into future order negotiations. Doug will discuss any delivery failures directly with the chef within 24 hours.

### Doug's Backup Delivery Rate
If Doug delivers on behalf of or in support of the chef's team, a per-mile delivery fee is charged to the order at a rate negotiated with the chef at onboarding. This rate is documented in the contractor agreement.

---

## Recurring Orders

**Once a client is on a standing order:**
1. Confirm the standing schedule (weekly, bi-weekly), cuisine rotation preferences, and dietary profile once
2. Lock in per-head pricing for the contract term (minimum 3 months)
3. Send a formal recurring program proposal (see `docs/personas.md` → Marcus section for what to include)
4. Log in HubSpot as **Recurring** stage
5. Chef is notified of the standing order at setup — 7 days notice required for any changes
6. 90-day review clause: check in with client at the 90-day mark to confirm satisfaction and renew

**Weekly recurring rhythm (CBC side):**
- Monday: Confirm this week's order is on track with chef
- Day before: Packaging and labeling prep
- Delivery day: Standard delivery flow
- Post-delivery: Quick text check-in with client

---

## Cancellation & Change Policy

| Scenario | Policy |
|---|---|
| Client cancels 5+ business days before event | Full deposit refund minus $150 administrative fee. No chef cancellation fee triggered. |
| Client cancels under 5 business days | Deposit is non-refundable. If ingredients have been purchased, client also owes ingredient cost (documented by chef). Chef receives their ingredient cost reimbursement from the forfeited deposit. |
| Client reduces guest count | Adjust invoice; check if still above chef's 50-box minimum |
| Chef cancels 7+ days before event | Find replacement; no fee |
| Chef cancels within 7 days of confirmed order | $250 cancellation fee owed to CBC |
| CBC cancels (rare) | Full refund + credit toward future order |

---

## Compliance Checklist

Every order must meet:
- [ ] California food safety laws — temperature control from prep through delivery
- [ ] Individual dietary labeling on every item
- [ ] BPI-certified compostable packaging only
- [ ] Chef has current product liability + general liability insurance ($1M minimum each)
- [ ] CBC general liability insurance covers delivery-related incidents ($1M minimum)
- [ ] Chef maintains food safety logs available to CBC on request
- [ ] Transparent invoicing — no undisclosed fees

---

## Key Contacts & Tools

| Role | Contact / Tool |
|---|---|
| Client inbound | (408) 555-0192 · hello@culinaryblockcollective.com |
| CRM / pipeline | HubSpot (free) — stages: New Lead → Contacted → Quote Sent → Won → Recurring |
| Quote generation | `/quote` command (cbc-sales plugin) or manual |
| Delivery | Chef's team (primary) · Doug — coordination oversight + backup delivery at negotiated per-mile rate |
| Delivery tracking | Trello delivery checklist (day-of) |
| Packaging supplier | WebstaurantStore (~$0.02/container) |
| Chef profiles & contacts | `docs/chef-profiles.md` |
| Pricing reference | `docs/menu-pricing.md` |
| Email templates | `docs/email-outreach.md` |

---

## Liability Insurance Requirements

> **Purpose:** Protect CBC, chefs, clients, and the commissary from financial exposure. Every event must have coverage in place before food leaves the kitchen.

### CBC's Insurance (carried by Culinary Block Collective)

| Policy | Minimum Coverage | Purpose |
|---|---|---|
| **Commercial General Liability (CGL)** | $1,000,000 per occurrence / $2,000,000 aggregate | Bodily injury, property damage at client sites, slip-and-fall during attended service events |
| **Product Liability** | $1,000,000 per occurrence | Foodborne illness, allergic reaction, contamination claims arising from CBC-coordinated orders |
| **Commercial Auto** (if Doug delivers) | $1,000,000 combined single limit | Covers delivery vehicle accidents when Doug or CBC staff transport food |
| **Workers' Compensation** | Per California state requirements | Required for any W-2 employees (Tier 2 on-site staff). Not required for 1099 chef contractors, but verify. |
| **Hired & Non-Owned Auto** | $1,000,000 | Covers liability when staff use personal vehicles for CBC deliveries |

**Action items:**
- [ ] Contact Culinary Block LLC's current insurer — confirm whether existing CGL policy covers CBC catering operations or if a separate policy/rider is needed
- [ ] Get a quote for product liability coverage specific to off-site catering (differs from commissary-only coverage)
- [ ] If Doug uses a personal vehicle for delivery, add Hired & Non-Owned Auto rider to the CGL policy
- [ ] Obtain a Certificate of Insurance (COI) for CBC — many corporate clients will require this before booking
- [ ] Set up a process to issue event-specific COIs on request (some clients require them per-event with the client named as additional insured)

### Chef Insurance (carried by each independent contractor)

Per the contractor agreement, each chef must carry:

| Policy | Minimum Coverage |
|---|---|
| **Product Liability** | $1,000,000 per occurrence |
| **General Liability** | $1,000,000 per occurrence |

**Verification:**
- [ ] Collect a copy of each chef's insurance certificate at onboarding — file in `CBC_Sales/07_Templates/Chef_Insurance/`
- [ ] Verify coverage is current (not expired) and covers off-site catering, not just commissary operations
- [ ] Set a calendar reminder to re-verify chef insurance annually (policies typically renew every 12 months)
- [ ] If a chef does not carry adequate insurance, CBC must either: (a) require them to obtain it before their first CBC event, or (b) add them as an additional insured under CBC's policy (increases CBC premium — factor into margin)

### Client-Site Requirements
- Some corporate clients require vendors to carry specific insurance minimums and provide a COI before the event
- Standard ask: $1M CGL + $1M product liability + CBC names the client as "additional insured" for the event
- Budget 24–48 hours to obtain an event-specific COI from your insurer when a client requests one
- Add a line to the quote template: *"Certificate of Insurance available upon request"*

---

## Bank Account & Payment Setup

> **Purpose:** Separate CBC finances from Culinary Block LLC and personal accounts. Clean books from day one.

### Business Bank Account

- [ ] Open a **dedicated business checking account** for Culinary Block Collective (separate from Culinary Block LLC operating account)
- [ ] Recommended: a business checking account with a bank that integrates with your bookkeeping tool (QuickBooks → Chase, Wells Fargo, or similar; Wave → most major banks)
- [ ] Set up **online banking and bill pay** for chef payouts and vendor payments
- [ ] Order business checks with CBC branding (backup payment method for chefs who prefer checks)
- [ ] Set up a **savings sub-account or reserve fund** — target 1 month of operating expenses ($2,000–$3,000) as a buffer

### Payment Processing (Client-Facing)

| Method | Processor | Fee | Best For |
|---|---|---|---|
| **ACH / Bank Transfer** | Stripe or direct ACH | $0–$5 flat | Recurring clients, large invoices — lowest cost |
| **Credit Card** | Stripe | 2.9% + $0.30 | One-time clients, fast payment — pass fee to client or absorb |
| **Check** | N/A | Free | Legacy clients who prefer paper — slower (Net 15 terms) |
| **Wire Transfer** | Bank | $15–$30 | Large custom events ($5K+) — fast and guaranteed |

**Setup steps:**
- [ ] Create a Stripe account linked to the CBC business checking account
- [ ] Enable Stripe Invoicing (send branded invoices with a "Pay Now" button — ACH or card)
- [ ] Set up Stripe automatic payment reminders (Day 1, Day 8, Day 15)
- [ ] Create a recurring billing schedule in Stripe for standing-order clients
- [ ] Test the full payment flow: send a test invoice → pay it → confirm funds land in CBC checking account

### Chef Payout Process

| Step | Timing | Detail |
|---|---|---|
| Client pays CBC | Net 15 from invoice | Full payment lands in CBC checking account |
| CBC calculates chef share | Within 3 business days of client payment | (Order revenue after discounts) × 75% |
| CBC sends chef payout | Net 30 from service date, or within 5 business days of receiving client payment (whichever is later) | ACH direct deposit or check |
| Remittance summary sent | Same day as payout | Event date, client, guests, gross revenue, payout amount |

**Setup steps:**
- [ ] Collect each chef's banking details at onboarding (routing number, account number for ACH) — store securely
- [ ] Set up recurring ACH transfers in online banking or use a payroll tool (Gusto, or manual ACH)
- [ ] Create a payout tracking spreadsheet or QuickBooks entries: Date, Chef, Event, Gross Revenue, Chef 75%, CBC 25%, Kit Cost, Net CBC Margin

### Bookkeeping & Tax Prep

- [ ] Choose a bookkeeping tool: **QuickBooks Self-Employed** ($15/mo) or **Wave** (free) — both support invoicing, expense tracking, and 1099 generation
- [ ] Set up chart of accounts: Revenue (client payments), COGS (chef payouts, packaging), Operating Expenses (tech stack, ads, insurance), Labor (Tier 2 staff)
- [ ] Track every CBC service kit cost per event — this is your main variable cost and the #1 margin risk
- [ ] Issue **1099-NEC forms** to each chef by January 31 of the following year (required for any contractor paid $600+ annually)
- [ ] Set aside **25–30% of CBC net profit** for estimated quarterly taxes (federal + California)

---

## Dispute Resolution & Refund Policy

> **Purpose:** Handle client complaints, food quality issues, and payment disputes before they escalate.

### Client Complaint Escalation

| Severity | Example | Response Time | Resolution |
|---|---|---|---|
| **Low** | "Food was good but portions were small" | 24 hours | Apologize, note for next order, offer a small credit ($50–$100) toward next booking |
| **Medium** | "Several items were mislabeled" or "Food arrived lukewarm" | 4 hours | Apologize, investigate with chef, partial refund (10–25% of order), corrective action documented |
| **High** | "Employee had an allergic reaction" or "Food was spoiled" | Immediately | Apologize, full refund, notify insurer, investigate with chef, file incident report (see Allergen/Food Safety Incident Protocol below), pause chef's CBC bookings pending investigation |

### Refund Policy

| Situation | Refund |
|---|---|
| Late delivery (outside confirmed window) | Client's next order free (on-time guarantee — already in effect) |
| Wrong cuisine or major menu error | Full refund for affected items + credit toward next order |
| Minor quality complaint (portions, temperature) | 10–25% credit toward next order |
| Dietary label error (no adverse reaction) | 25% refund + corrective action |
| Dietary label error (adverse reaction) | Full refund + insurance claim + chef investigation |
| Client cancels per policy | Per cancellation table above |

### Allergen & Food Safety Incident Protocol

If a client or guest reports an allergic reaction or foodborne illness:

1. **Immediately:** Express concern and offer assistance. Do not admit fault or liability — say: *"I'm very sorry to hear that. Let me look into this right away."*
2. **Within 1 hour:** Contact the chef — get full details on ingredients, prep process, labeling for the affected item
3. **Within 4 hours:** Notify CBC's insurance carrier — provide event details, client report, chef's ingredient documentation
4. **Within 24 hours:** Issue a written incident report: what happened, what was ordered, labeling details, chef's response, corrective actions
5. **Corrective action:** Review and re-verify the chef's allergen labeling process. If systemic, pause the chef's CBC bookings until retraining is complete.
6. **Client communication:** Full refund, follow-up call from Doug within 24 hours, written summary of findings and corrective actions within 72 hours

---

## Structured Feedback Loop

> **Purpose:** Close the loop from delivery back to continuous improvement. Every event generates data that makes the next one better.

### Post-Event Feedback Collection (within 48 hours)

**Client feedback — 3-question text/email survey:**
1. *"How would you rate the food quality? (1–5)"*
2. *"Was delivery on time and setup as expected? (Yes / No / Details)"*
3. *"Anything you'd change for next time?"*

**Internal debrief — Doug logs after every event:**
- On-time delivery? (Y/N, if late: how many minutes and why)
- Box count accurate? (Y/N, if short: how many missing)
- Any dietary labeling issues? (Y/N, details)
- Client mood at delivery/pickup (positive / neutral / negative)
- CBC service kit cost for this event (actual $)
- Any operational surprises or lessons learned

**Chef feedback — quick text or call after first 3 events, then monthly:**
- *"How did prep go? Anything we can improve on the CBC side?"*
- *"Any issues with timing, packaging, or communication?"*

### Feedback-to-Action Cycle

| Signal | Action | Timeline |
|---|---|---|
| Client rates food 4–5 | Request Google review + testimonial | Within 48 hours |
| Client rates food 1–3 | Call client, investigate with chef, offer credit | Within 24 hours |
| Late delivery logged | Debrief with chef within 24 hours, update delivery SOP if needed | Within 48 hours |
| Dietary labeling issue | Retrain chef on labeling standards, verify next 3 orders | Immediately |
| Kit cost exceeds $375 | Review packaging vendor pricing, consider minimum order adjustment | Weekly review |
| Client requests recurring | Send recurring program proposal within 24 hours | Same day |
| NPS/satisfaction below 4.0 average (rolling 10 events) | Pause outreach, focus on operational fixes | Weekly review |

### Monthly Review (first Friday of each month)

- [ ] Review all event feedback from the past month
- [ ] Calculate average client satisfaction score
- [ ] Calculate average margin per event (after kit costs)
- [ ] Identify top 3 operational improvements for next month
- [ ] Review chef performance: on-time rate, labeling accuracy, client feedback
- [ ] Update `docs/operations.md` with any SOP changes
