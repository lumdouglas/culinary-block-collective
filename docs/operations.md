# CBC Operations — Order Fulfillment Workflow

> **Purpose:** How an order moves from first inquiry to delivery, payment, and follow-up. Reference this when coordinating events, onboarding a new chef, or troubleshooting any stage of the process.
> **Responsibility split:** Chefs own food prep and box packaging (established catering businesses with their own containers and supplies). CBC owns sales, dietary labeling, delivery, coordination, and invoicing. Doug assists with boxing only if needed (e.g., chef's team is running late) to ensure on-time delivery.

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
1. Collect **25% deposit** before confirming the order — deposit is required to hold the date and trigger chef assignment. No deposit = no confirmed booking.
   - Deposit covers CBC's commission and hard costs (service kit, coordination) in the event of a late cancellation
   - Deposit is applied to the final invoice at time of payment
   - Communicate clearly: *"To lock in your date and get the chef scheduled, I'll send a deposit invoice for 25% — the rest is due within 24 hours after the event."*
2. Confirm in writing (text or email) — date, guest count, cuisine, delivery address, time window, **and cancellation policy**
3. Collect delivery details:
   - Exact address + floor/suite/building access instructions
   - Parking/loading dock info
   - Onsite contact name and phone number
   - Setup requirements (tables, serving area, etc.)
4. Move HubSpot stage to: **Won**
5. Create event entry — log all delivery details

**Cancellation policy language to include in every booking confirmation:**
> *"A 25% deposit is required to confirm your booking — it holds your date and chef, and is applied to your final invoice. If you need to cancel more than 7 days before your event, your deposit is fully refunded. Cancellations within 7 days forfeit the deposit, but we're happy to apply it as a credit toward a future order. For cancellations within 72 hours, a fee of 50% of the total order value applies (the deposit covers the first half, and an additional 25% is invoiced). These terms protect our independent chef partners who begin purchasing ingredients and allocating kitchen time as soon as your booking is confirmed."*

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
- Providing box packaging (chef supplies their own containers and serving ware)
- Maintaining food safety logs and temperature control
- Handing off boxed food at commissary at agreed time, ready for labeling and delivery

**CBC responsibilities:**
- Creating and applying individual dietary labels to every item
- Printing menu cards and dietary breakdown sheets
- Delivering food from commissary to client site within the confirmed delivery window
- Coordinating delivery logistics — confirming delivery window, route, and on-site contact details
- Assisting with boxing only if needed (e.g., chef's team is running late or behind schedule)
- On-site setup if included in the quote

**⚠️ Chef cancellation policy:** If a chef cancels within 7 days of a confirmed order, they owe CBC a $250 fee. Maintain at least one backup option per cuisine type in case of cancellation.

**Chef change/availability notice:** 7 days written notice required for any changes to availability or services.

---

## Stage 5 — Prep Day

**CBC ops checklist (day before or morning of event):**

- [ ] Confirm chef is on track — brief check-in text
- [ ] Confirm chef's boxes/packaging are ready and sufficient for order size
- [ ] Confirm delivery address and access details with onsite contact
- [ ] Confirm delivery route and timing — CBC delivers
- [ ] Label stock is ready (vegan, GF, nut-free, dairy-free labels)
- [ ] Printed menu card and dietary breakdown sheet are prepared
- [ ] Delivery vehicle and coordinator are briefed on event details

**Labeling standards (non-negotiable — CBC responsibility):**
- Every individual item gets a dietary label (applied by CBC after chef handoff)
- No unlabeled items leave the commissary — zero exceptions
- Full dietary breakdown sheet included with every order (one sheet listing all items + their labels)

**Packaging standards (chef responsibility):**
- Chef provides their own boxes, containers, and serving ware
- Packaging must be food-safe and presentable for corporate clients
- Branded napkins included (if premium packaging was ordered as an add-on)

---

## Stage 6 — Delivery

**Delivery method:** CBC (Doug or CBC delivery coordinator). CBC picks up labeled, boxed food from the commissary and delivers to the client site. This gives CBC full control over the client experience from kitchen to door.

**Doug's role:** Primary delivery coordinator. Applies labels at the commissary, loads the vehicle, and delivers. Assists with boxing only if needed (e.g., chef's team is behind schedule). Coordination oversight on every order.

**CBC delivery responsibilities (per delivery SOP — see Delivery Protocol below):**
- Pick up boxed food from chef at commissary at the agreed handoff time
- Apply dietary labels and include menu card / dietary breakdown sheet
- Transport food to client site within the confirmed delivery window
- Maintain safe food temperature from commissary to client
- Count all boxes against the order before loading — no short deliveries
- Confirm arrival and setup with the on-site contact
- Report any delays or issues to the client proactively — never let them find out on their own

**Chef's handoff responsibilities:**
- Have all food boxed in their own packaging and ready at the agreed handoff time
- Maintain safe food temperature from kitchen through handoff
- Provide a manifest of all items and quantities for label matching
- Alert Doug immediately if they will be late on handoff — CBC may need to assist with boxing

**On-time delivery guarantee:** "Late" is defined as the order not being staged and ready for the client's team at the agreed service time. If that occurs, the client automatically receives 10% off their next order. Log any late delivery immediately in HubSpot with reason.

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
   - *"We have a standing order program — fixed per-box pricing, rotating menus, 90-day review clause. Want me to put together a proposal?"*
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

## CBC Delivery Protocol

> **Purpose:** Standard operating procedures for every CBC delivery. These are the minimum requirements that protect the on-time delivery guarantee and the CBC brand. Doug reviews the chef handoff expectations with each chef at onboarding.

### Chef Handoff (Day Before)
- [ ] Chef confirms food will be boxed and ready at the agreed handoff time
- [ ] Chef confirms item count and manifest for label matching
- [ ] Doug confirms delivery route, vehicle capacity, and timing

### Chef Handoff (Day Of)
- [ ] Chef has all food boxed in their own packaging and ready at handoff time
- [ ] Chef provides manifest of all items and quantities
- [ ] If chef is running late on boxing: Doug assists with boxing to protect the delivery window

### CBC Delivery (Day Of)
- [ ] Apply dietary labels to every item at the commissary
- [ ] Include printed menu card and full dietary breakdown sheet
- [ ] Count all boxes against the order manifest before loading — short deliveries are not acceptable
- [ ] Depart with enough time to arrive **15 minutes before** the confirmed delivery window
- [ ] Text/confirm with on-site contact when en route with ETA
- [ ] Confirm delivery and handoff with on-site contact upon arrival

### If Something Goes Wrong
- **Chef handoff late:** Doug assists with boxing if feasible. If the delay threatens the delivery window, call the client proactively with an updated ETA.
- **Access issue (parking, loading dock, locked entrance):** Call the on-site contact first.
- **Missing or damaged item:** Assess whether a replacement can be sourced from the chef. Communicate with the client immediately.

### On-Time Guarantee
The CBC on-time delivery guarantee (late = order not staged and ready for the client's team at the agreed time → client receives 10% off next order) is backed by CBC's delivery. A late chef handoff that causes a late delivery will be discussed directly with the chef within 24 hours and may be factored into future order negotiations.

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
- Day before: Labeling prep (labels, menu card, dietary breakdown sheet)
- Delivery day: Pick up from chef, label, deliver — standard delivery flow
- Post-delivery: Quick text check-in with client

---

## Tasting Package Workflow

> **Purpose:** The tasting package is a distinct product from a full catering order. It has its own booking flow, prep, and follow-up cadence. Always available to book on the website; fulfillment happens on scheduled days only.

### Booking
1. Client books via the website tasting calendar (specific days only — not open-ended)
2. Log in HubSpot immediately — stage: **Tasting Booked**
3. Confirm delivery address, time window, and on-site contact name + phone
4. Charge tasting fee at booking (if applicable — see `docs/menu-pricing.md` for confirmed price)

### Prep (Day Before)
- [ ] Confirm which 2–3 cuisines are featured (coordinate with available chefs for that day)
- [ ] Chef prepares 3–4 dishes per cuisine, 2–4 portions each — at-cost basis
- [ ] Chef packages in their own containers (same as full orders)
- [ ] Label every item individually (dietary labels — same standard as full orders)
- [ ] Assemble printed menu card + "how to order" insert
- [ ] Apply CBC branded sticker to box lid — use tamper-evident placement if box form factor supports it

### Delivery
- Delivered by CBC (Doug) within the confirmed time window
- Delivery zone: South Bay / Peninsula (same as full orders)
- Treat it like a real order — on-time, professional, no exceptions

### Follow-Up (Critical — within 24 hours)
1. Text or email the client: *"Hope you and the team enjoyed the tasting — what did you think?"*
2. If positive: move directly to quote conversation — *"Ready to bring this to your whole team? I can have a quote to you today."*
3. If no response within 48 hours: follow up once more — *"Just checking in on the tasting — happy to answer questions or put together a custom menu."*
4. Apply tasting fee as credit on first full order invoice
5. Move HubSpot stage: **Tasting Delivered** → **Quote Sent** (if they engage) or **Nurture** (if not yet ready)

> **⚠️ The 72-hour post-tasting window is the highest-conversion moment in the sales funnel. A slow follow-up kills the conversion.** Do not wait more than 24 hours to reach out.

---

## Cancellation & Change Policy

### Client Cancellation

| Window | Penalty | Deposit Treatment | Reason |
|---|---|---|---|
| 7+ days before event | No fee | Deposit fully refunded | Chef hasn't ordered ingredients yet; slot can be rebooked |
| Within 7 days (but more than 72 hours) | Forfeit 25% deposit | Deposit forfeited — OR applied as credit toward a future order (client's choice) | Chef may have begun planning; deposit covers CBC's coordination costs |
| Within 72 hours | 50% of total order value | Deposit (25%) retained by CBC + additional 25% invoiced (goes to chef for food costs) | Chef has purchased ingredients and prepped; loss is unrecoverable |

**Penalty split — client cancellations:**
> The 25% deposit equals CBC's full commission on the order. For 7-day cancellations, **CBC keeps the deposit** (or applies it as credit to a future order at the client's request) — the chef receives nothing but also owes nothing. For 72-hour cancellations, the total fee is 50% of the order value: **CBC retains the 25% deposit** to cover lost commission and coordination costs, and the **additional 25% invoiced goes directly to the chef** to cover food and ingredient costs already incurred. This structure ensures the chef is compensated for real prep work while CBC covers its operational losses.

### Chef Cancellation

| Window | Penalty | CBC Response |
|---|---|---|
| 7+ days before event | No fee | Find replacement chef; rebook slot |
| Within 7 days of confirmed order | $250 fee owed to CBC | Execute Chef Cancellation Response Protocol (below) |

**⚠️ Chef Cancellation Response Protocol:**
When a chef cancels within 7 days, execute in this priority order:

1. **Don't tell the client yet** — assess options first (target: resolution within 2 hours)
2. **Step 1 — Find a replacement within the commissary.** Contact other CBC chefs or Culinary Block tenants who can cover the cuisine and volume with the available lead time. This is the best outcome — same collective, minimal client disruption.
3. **Step 2 — Offer a cuisine substitution.** If same-cuisine replacement isn't available, identify the best available alternative and call the client: *"We have a situation on our end — Chef [X] is unavailable. We can offer [Alternative Cuisine] from Chef [Y] at the same price, or we can reschedule. Which works better for you?"* Frame it as a proactive solution, not an apology.
4. **Step 3 — Source externally.** If no internal replacement exists, identify a reliable external caterer who can fulfill the order. Doug absorbs any margin hit — the client price does not change. Use sparingly; this erodes the CBC brand premise.
5. **Step 4 — Reschedule.** Offer to move the event date if the client has flexibility. Offer a 10% discount on the rescheduled order as goodwill.
6. **Step 5 — Cancel with full refund + compensation.** Last resort. Full deposit refund + a credit equal to 10% of the order toward a future booking. Log in HubSpot. Follow up within 48 hours.

> **Rule:** The client should never feel like the cancellation is their problem. Doug owns the resolution — not the chef, not the client.

### Other Change Scenarios

| Scenario | Policy |
|---|---|
| Client reduces guest count (5+ days out) | Adjust invoice; confirm still above chef's minimum box count |
| Client reduces guest count (under 5 days) | Invoice at original count if chef has already purchased for that quantity |
| Client changes cuisine (5+ days out) | Accommodate if available chef can fulfill; no fee |
| CBC cancels (rare — weather, emergency) | Full deposit refund + 15% credit toward future order |

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
| Delivery | CBC (Doug or CBC coordinator) — picks up from commissary, labels, and delivers to client |
| Delivery tracking | Trello delivery checklist (day-of) |
| Packaging | Chef provides their own boxes/containers · CBC provides dietary labels and menu cards |
| Chef profiles & contacts | `docs/chef-profiles.md` |
| Pricing reference | `docs/menu-pricing.md` |
| Email templates | `docs/email-outreach.md` |
