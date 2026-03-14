# CBC Operations — Order Fulfillment Workflow

> **Purpose:** How an order moves from first inquiry to delivery, payment, and follow-up. Reference this when coordinating events, onboarding a new chef, or troubleshooting any stage of the process.
> **Responsibility split:** Chefs own food prep and delivery (established catering businesses with their own teams). CBC owns sales, packaging, labeling, coordination, and invoicing. Doug assists with box preparation and staging when needed to ensure on-time delivery and quality, and provides backup delivery capacity at a negotiated per-mile rate.

---

## Tasting Program

> **Purpose:** Convert interested prospects into paying clients by letting them experience the food before committing. This is CBC's primary customer acquisition tool — not a nice-to-have.

### How It Works

A free tasting is offered to qualified corporate prospects (10–12 people, 2 cuisines of their choice, fully dietary-labeled, delivered to their office). Other caterers charge $300–500 for tastings. CBC's is free. The tasting eliminates the biggest buyer hesitations — food quality, dietary accuracy, professionalism — in a single event.

**CBC's cost per tasting:** ~$60–100 in food/ingredient cost. Treated as a marketing expense — not recouped from the chef or from future commissions.

### Scheduling

- **Frequency:** One fixed tasting date per month to start. Add a second date only once tastings are being booked consistently (Month 2–3).
- **Day:** Second Tuesday of each month (or a fixed date Doug sets at the start of each month). Communicate dates to chefs at the start of each month.
- **Cuisine assignment:** Match the tasting chef to the prospect's expressed interest (e.g., if they opened the sushi email, assign the Japanese chef). Don't default to the same chef every time — rotate fairly.
- **Lead time:** Confirm the tasting with the chef at least 7 days in advance.

### Cost & Compensation Structure

| Item | Who Bears It | Notes |
|---|---|---|
| Food/ingredient cost | **CBC pays** | Doug reimburses the chef directly for ingredients — not deducted from future commissions |
| Chef prep time (approx. 1–2 hrs) | **Chef absorbs** | Framed as investment in winning a recurring account |
| Delivery/logistics | **Doug handles** | Consistent with Doug's operational role on all orders |

**Do not recoup the food cost from future commissions.** That creates a running tab and unnecessary friction before the relationship is established. The $60–100 is a straight marketing expense.

### How to Present the Tasting to a Chef

Present this as part of the original commission agreement conversation — not as a separate ask after the fact.

> *"Here's how I generate your orders. When I have a company that's seriously interested but hasn't committed yet, I offer them a free tasting — 10–12 boxes, 2 cuisines, fully labeled. I cover the ingredient cost, you cook on a date we agree on in advance, and I handle all delivery and logistics. These tastings are how we land recurring accounts. Your time investment is roughly 2 hours once a month. The upside is a client ordering from you weekly or monthly."*

**Likely questions and how to answer them:**

| Their Question | Your Answer |
|---|---|
| "Who buys the ingredients?" | "I do — you cook, I cover the food cost." |
| "What if they don't convert?" | "That's my risk. You still got the exposure and owe me nothing." |
| "How often will you ask me to do this?" | "Once a month, on a day we set in advance. Never a surprise ask." |
| "What's in it for me if it converts?" | Show them the math: 100 guests × $22/head × 75% = $1,650 per order to them. Weekly = $85,800/year. |

### Chef's Responsibilities at a Tasting

- Cook 10–12 boxes of their standard menu at their normal quality standard
- Follow CBC's labeling and packaging standards (same as a paid order)
- Hand off food at the commissary at the agreed time — Doug handles delivery from there
- No client-facing contact required unless Doug arranges an introduction

### After the Tasting

- If the prospect wants to move forward: enter normal order lifecycle (Stage 1 → Booking)
- If they're not ready: Doug follows up — chef has no further involvement
- If they convert to recurring: notify the chef and confirm standing order cadence

### Tasting Log

Track every tasting in HubSpot as a separate deal with stage: **Tasting Scheduled / Tasting Completed / Converted / Not Converted.** Over time this tells you conversion rate per cuisine, per chef, and per prospect type — useful for deciding when to invest in more tastings.

---

## The Full Order Lifecycle

```
[Tasting (optional)] → Inquiry → Quote → Booking Confirmation → Chef Assignment → Prep Day → Delivery → Post-Event → Payment
```

---

## Stage 1 — Inquiry

**Inbound channels:**
- Phone / Text: (408) 555-0192 ← primary close channel
- Email: hello@culinaryblockcollective.com
- Website quote form (Squarespace)
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
3. Move HubSpot stage to: **Won**
4. Create event entry — log all delivery details

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
- Accepted payment methods: [TBD — update when payment processing is set up]

### Chef / Contractor Payment
- **Revenue split:** Chef 75% / CBC 25%
- **Payment terms:** Net 30 from service date
- Calculate chef payment: (total order revenue) × 75%
- Chef sets their own minimum revenue threshold per order — confirm before booking
- Chef is responsible for their own taxes, benefits, and overhead

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
| Client cancels 5+ business days before event | [TBD — define and add to contracts] |
| Client cancels under 5 business days | [TBD — define and add to contracts] |
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
