# CBC Marketing Launch Checklist & Daily Schedule

**Target Launch Date:** April 1, 2026
**Today:** March 11, 2026
**Working Days:** 15 business days (March 11 – March 31)

---

## Master Task List — What Must Be Done Before Outreach

### 1. Chef Agreements & Onboarding (BLOCKER — Week 1)

- [ ] Schedule calls with all 3 active chefs (this week)
- [ ] Present the 25% CBC / 75% chef commission model to each chef
- [ ] Present per-box pricing tiers ($20 / $25 / $30) and confirm each chef's tier
- [ ] Walk chefs through what CBC handles (sales, client relationships, delivery logistics, box prep/staging)
- [ ] Confirm each chef's maximum weekly capacity (boxes per week)
- [ ] Confirm each chef's minimum order size and lead time requirements
- [ ] Get each chef's menu finalized — exact items, dietary options, allergen info
- [ ] Get pricing confirmed for cuisines currently listed as "Coming Soon" (American, Vietnamese, Thai, Tacos)
- [ ] Have each chef sign the Independent Contractor Agreement (`Independent Contractor Agreement for Catering Services.docx`)
- [ ] Collect signed W-9 from each chef (required before first payout)
- [ ] Get photo/likeness release signed for marketing use

### 2. Chef Profiles & Marketing Assets (Week 1–2)

- [ ] Fill in `docs/chef-profiles.md` with real names, personalities, stories, content angles
- [ ] Get professional headshot or high-quality photo of each chef
- [ ] Get 3–5 action shots per chef (cooking, plating, kitchen scenes)
- [ ] Get 3–5 finished dish photos per chef (hero shots for website and social)
- [ ] Write 150-word chef bio for each (website + one-pager use)
- [ ] Identify each chef's "signature story" for social media spotlights
- [ ] Update `chef-john.html` and `chef-unique-cuisine.html` with real photos (replace placeholders)
- [ ] Create third chef profile page (matching template style)

### 3. Operations & Legal (Week 1–2)

- [ ] Define cancellation policy: client cancels 5+ business days out → full deposit refund minus $150 admin fee
- [ ] Define cancellation policy: client cancels under 5 business days → deposit non-refundable + ingredient costs if applicable
- [ ] Add cancellation terms to client-facing contracts/quotes
- [ ] Set up payment processing (Stripe recommended — supports invoicing, ACH, and card payments)
- [ ] Update `docs/operations.md` with accepted payment methods ✅ Done
- [ ] Create a standard client service agreement / terms of service (include: pricing, payment terms Net 15, deposit 50% at booking, cancellation, liability, dispute resolution)
- [ ] Confirm food handler certifications are current for all chefs
- [ ] Set up a dedicated CBC business email (e.g., orders@culinaryblockcollective.com)
- [ ] Set up a business phone number or confirm the (408) 555-0192 line is active and goes to voicemail after hours
- [ ] Build a quote/invoice template (PDF) with CBC branding, payment terms, cancellation policy
- [ ] Create a client welcome email template (sent after booking confirmation with event details, what to expect, cancellation policy link)
- [ ] Define late payment escalation process (Day 16 reminder → Day 22 second notice → Day 30 account hold → Day 45 collections)
- [ ] Create a 3-question post-event feedback survey (food quality 1–5, delivery on time Y/N, what to change)
- [ ] Define refund policy for quality complaints, labeling errors, and late delivery
- [ ] Create an allergen/food safety incident protocol (response within 1 hour, insurer notified within 4 hours, written report within 24 hours)

### 3a. Liability Insurance (Week 1 — CRITICAL)

- [ ] Contact Culinary Block LLC's current insurer — ask whether existing CGL policy covers CBC's off-site catering operations
- [ ] If not covered: get a quote for a separate Commercial General Liability (CGL) policy — $1M per occurrence / $2M aggregate
- [ ] Get a quote for Product Liability coverage — $1M per occurrence (foodborne illness, allergic reaction, contamination)
- [ ] If Doug delivers using a personal vehicle: add Hired & Non-Owned Auto rider — $1M combined single limit
- [ ] Confirm Workers' Compensation coverage for any W-2 employees (Tier 2 on-site staff) — required by California law
- [ ] Obtain a Certificate of Insurance (COI) for CBC — many corporate clients require this before booking
- [ ] Set up a process to issue event-specific COIs on request (client named as additional insured)
- [ ] Collect each chef's insurance certificate at onboarding — verify $1M product liability + $1M general liability
- [ ] File chef insurance certificates in `CBC_Sales/07_Templates/Chef_Insurance/`
- [ ] Set a calendar reminder to re-verify all insurance (CBC + chefs) annually

### 3b. Bank Account & Payment Setup (Week 1)

- [ ] Open a dedicated business checking account for CBC (separate from Culinary Block LLC and personal accounts)
- [ ] Choose a bank that integrates with your bookkeeping tool (Chase or Wells Fargo for QuickBooks; most major banks for Wave)
- [ ] Set up online banking and bill pay for chef payouts and vendor payments
- [ ] Order business checks with CBC branding (backup method for chef payouts)
- [ ] Set up a savings sub-account or reserve fund — target $2,000–$3,000 (1 month of operating expenses)
- [ ] Create a Stripe account linked to the CBC business checking account
- [ ] Enable Stripe Invoicing (branded invoices with "Pay Now" button — ACH or card)
- [ ] Configure Stripe automatic payment reminders (Day 1, Day 8, Day 15)
- [ ] Test the full payment flow: send a test invoice → pay it → confirm funds land in CBC checking
- [ ] Collect each chef's banking details at onboarding (routing + account number for ACH payouts) — store securely
- [ ] Choose a bookkeeping tool: QuickBooks Self-Employed ($15/mo) or Wave (free)
- [ ] Set up chart of accounts: Revenue, COGS (chef payouts, packaging), Operating Expenses (tech, ads, insurance), Labor (Tier 2 staff)
- [ ] Create a payout tracking system: Date, Chef, Event, Gross Revenue, Chef 75%, CBC 25%, Kit Cost, Net Margin

### 4. Website & Digital Presence (Week 2)

- [ ] Replace all placeholder/Unsplash images with real chef and food photography
- [ ] Verify all CTAs work: "Get a Quick Quote" mailto, phone link, SMS link
- [ ] Test the menu calendar — confirm items, pricing, and "Book This Date" flow
- [ ] Add Google Analytics or Vercel Analytics for traffic tracking
- [ ] Set up Google Business Profile for CBC (local SEO)
- [ ] Verify sitemap.xml is submitted to Google Search Console
- [ ] Test website on mobile devices (iPhone, Android) — fix any layout issues
- [ ] Add testimonial section placeholder (even "Coming Soon" is better than nothing)
- [ ] Ensure contact form or quote request actually reaches Doug's inbox

### 5. Sales Infrastructure (Week 2)

- [ ] Install the sales plugin: extract `CBC_Sales/cbc-sales.plugin` into `.claude/commands/`
- [ ] Test all 6 slash commands (`/daily`, `/pipeline`, `/draft-email`, `/quote`, `/content-week`, `/scorecard`)
- [ ] Review and clean the 100-lead CSV — remove duplicates, verify emails still valid
- [ ] Prioritize leads: tag the 15–20 highest-probability prospects (largest companies, warmest titles)
- [ ] Set up HubSpot email tracking (opens, clicks, replies)
- [ ] Create email signature with CBC branding, phone, website link
- [ ] Prepare the one-pager PDF for email attachment (verify `CBC_Sales_One_Pager_v2.pdf` is current)
- [ ] Draft 3 personalized email variants for top-priority leads (beyond the template)
- [ ] Set up a Calendly or scheduling link for tasting events / intro calls
- [ ] Define tasting event logistics: location (commissary?), format, capacity (10 slots/month per campaign plan)

### 6. Content & Social Media (Week 2–3)

- [ ] Create LinkedIn company page for Culinary Block Collective (if not done)
- [ ] Create Instagram business account for CBC (if not done)
- [ ] Prepare Week 1 content batch: 5 LinkedIn posts + 5 Instagram posts (use `/content-week`)
- [ ] Design 3–5 Instagram post templates (Canva or similar) with CBC branding
- [ ] Write Doug's personal LinkedIn post announcing CBC launch
- [ ] Schedule first week of social posts (buffer or manual)
- [ ] Identify 10 Bay Area food/office culture hashtags for Instagram
- [ ] Draft a "launch announcement" email for existing Culinary Block LLC contacts

### 7. Financial & Administrative (Week 1)

- [ ] *(Bank account and bookkeeping setup — see Section 3b above)*
- [ ] Define the invoicing workflow: invoice within 24 hours of event, payment terms Net 15, 50% deposit at booking
- [ ] Calculate CBC service kit cost per order (~$300–375) and confirm margin at various order sizes
- [ ] Determine minimum order threshold where CBC is profitable after kit costs (model: $475 commission per avg order minus ~$337 kit cost = ~$138 net on smallest orders — tight)
- [ ] Set a monthly operating budget for the first 3 months (campaign plan says $1,400–$2,000 over 6 months)
- [ ] Budget for insurance premiums — estimate $1,500–$3,000/year for CGL + product liability (get actual quotes in Week 1)
- [ ] Plan for 1099-NEC issuance to chefs by January 31 of following year — set up tracking from event #1
- [ ] Set aside 25–30% of CBC net profit for estimated quarterly taxes (federal + California)

### 8. Staffing & Logistics (Week 2–3)

- [ ] Confirm Doug's personal availability for box prep and delivery assistance
- [ ] Identify 1–2 backup staff for Tier 2 Attended Service events ($30/hr fully loaded)
- [ ] Define delivery radius and any mileage/fuel surcharge policy
- [ ] Source branded packaging: boxes, labels, napkins, menu cards (get samples + pricing from vendors)
- [ ] Order initial branded packaging inventory (enough for first 5 events)
- [ ] Source chafing dishes, insulated trays, serving utensils (buy or rent?)
- [ ] Create a delivery day-of checklist (printed, laminated — goes in every delivery vehicle)
- [ ] Identify commissary kitchen time blocks available for CBC event prep

### 9. Soft Launch & Validation (Week 3)

- [ ] Reach out to 3–5 warm contacts (friends of friends, existing Culinary Block network) for a pilot order
- [ ] Offer a "founding client" discount (10–15% off first order) to incentivize early adoption
- [ ] Execute one full dry-run event: order → chef prep → box assembly → delivery → feedback
- [ ] Document what went well and what needs fixing from the dry run
- [ ] Collect a testimonial or quote from the pilot client
- [ ] Photograph the pilot event for social proof content

---

## Daily Schedule: March 11 – April 1

### WEEK 1: Chef Alignment & Foundation (March 11–14)

**Wednesday, March 11 — Chef Outreach + Financial & Insurance Foundation**
- [ ] Call/text all 3 chefs to schedule sit-down meetings this week
- [ ] Draft a 1-page summary of the CBC model to share with chefs before the meeting (commission, pricing, what CBC handles, what chefs handle)
- [ ] **BANK:** Open a dedicated CBC business checking account (or confirm one exists and is separate from Culinary Block LLC)
- [ ] **BANK:** Set up online banking and bill pay on the new account
- [ ] **INSURANCE:** Call Culinary Block LLC's current insurer — ask: "Does our existing CGL policy cover off-site corporate catering operations under the CBC brand, or do we need a separate policy/rider?"
- [ ] **INSURANCE:** Request quotes for: CGL ($1M/$2M), Product Liability ($1M), Hired & Non-Owned Auto ($1M if Doug delivers with personal vehicle)
- [ ] Review and finalize the Independent Contractor Agreement (ensure it reflects current pricing tiers, 50% deposit requirement, cancellation policy)
- [ ] Set up basic bookkeeping tracker (even a Google Sheet: Date, Client, Chef, Boxes, Revenue, Chef Payout, CBC Commission, Kit Cost, Net Margin)

**Thursday, March 12 — Chef Meeting #1 + Payment Systems**
- [ ] Meet with Chef #1: present model, get feedback, discuss menu and pricing
- [ ] **Collect Chef #1's insurance certificate** — verify $1M product liability + $1M general liability, confirm it covers off-site catering
- [ ] **Collect Chef #1's banking details** for ACH payouts (routing + account number)
- [ ] Define cancellation policy terms (5+ days and under 5 days) — finalized in `docs/operations.md`
- [ ] **BANK:** Create a Stripe account linked to CBC checking account
- [ ] **BANK:** Enable Stripe Invoicing — test with a sample invoice
- [ ] Begin filling in `docs/chef-profiles.md` with Chef #1's details

**Friday, March 13 — Chef Meeting #2 + Insurance Finalization**
- [ ] Meet with Chef #2: present model, get feedback, discuss menu and pricing
- [ ] **Collect Chef #2's insurance certificate** — verify coverage
- [ ] **Collect Chef #2's banking details** for ACH payouts
- [ ] **INSURANCE:** Review quotes received — select and bind CGL + Product Liability policies (target: policies active before first event)
- [ ] **INSURANCE:** Obtain CBC Certificate of Insurance (COI) — you'll need this for corporate client quotes
- [ ] Configure Stripe automatic payment reminders (Day 1, Day 8, Day 15)
- [ ] Update `docs/operations.md` with cancellation policy and payment methods ✅ Already done
- [ ] Fill in `docs/chef-profiles.md` with Chef #2's details

**Saturday, March 14 — Chef Meeting #3 + Admin Close-Out**
- [ ] Meet with Chef #3: present model, get feedback, discuss menu and pricing
- [ ] **Collect Chef #3's insurance certificate** — verify coverage
- [ ] **Collect Chef #3's banking details** for ACH payouts
- [ ] Collect W-9s and signed contracts from any chefs ready to sign
- [ ] File all chef insurance certificates in `CBC_Sales/07_Templates/Chef_Insurance/`
- [ ] Set up dedicated CBC email address if not done
- [ ] **BANK:** Test full payment flow end-to-end: create test invoice in Stripe → pay it → confirm funds land in CBC checking
- [ ] Choose bookkeeping tool (QuickBooks Self-Employed $15/mo or Wave free) and set up chart of accounts
- [ ] Set a calendar reminder to re-verify all insurance (CBC + chefs) annually

---

### WEEK 2: Infrastructure & Assets (March 16–20)

**Monday, March 16 — Photography + Website**
- [ ] Schedule photo sessions with chefs (can be informal — kitchen action shots + plated dishes)
- [ ] Take photos of Chef #1 if available today
- [ ] Follow up with any chef who hasn't signed the contractor agreement yet
- [ ] Install the sales plugin (`cbc-sales.plugin` → `.claude/commands/`)
- [ ] Test `/pipeline` and `/daily` slash commands

**Tuesday, March 17 — Website Updates**
- [ ] Update website chef profile pages with real photos and bios
- [ ] Create third chef profile page (if only 2 exist)
- [ ] Take photos of Chef #2 if available
- [ ] Set up Google Analytics on the website
- [ ] Test all website CTAs (quote request, phone, SMS) — confirm they reach Doug

**Wednesday, March 18 — Sales Prep**
- [ ] Review and clean the 100-lead CSV — remove duplicates, flag invalid emails
- [ ] Tag top 20 priority leads in HubSpot (largest companies, best-fit titles)
- [ ] Create CBC-branded email signature
- [ ] Set up Calendly link for intro calls / tasting scheduling
- [ ] Take photos of Chef #3 if available

**Thursday, March 19 — Content Creation**
- [ ] Create LinkedIn company page for CBC
- [ ] Create Instagram business account for CBC
- [ ] Use `/content-week` to generate first batch of social posts
- [ ] Design 3 Instagram post templates in Canva with CBC branding
- [ ] Verify one-pager PDF (`CBC_Sales_One_Pager_v2.pdf`) is current — update if needed

**Friday, March 20 — Quote & Invoice Systems**
- [ ] Build the quote/invoice PDF template (CBC logo, pricing table, payment terms, cancellation policy)
- [ ] Test `/quote` command with sample data
- [ ] Generate 2–3 sample quotes for review
- [ ] Draft personalized emails for top 5 priority leads (beyond generic template)
- [ ] Set up Google Business Profile for CBC
- [ ] Submit sitemap.xml to Google Search Console

---

### WEEK 3: Soft Launch & Outreach Prep (March 23–27)

**Monday, March 23 — Packaging & Logistics**
- [ ] Order branded packaging samples (boxes, labels, napkins, menu cards)
- [ ] Source or purchase chafing dishes and serving equipment for Tier 1
- [ ] Identify 1–2 backup staff for Tier 2 events — reach out to them
- [ ] Create the delivery day-of checklist
- [ ] Block commissary kitchen time for CBC event prep on the calendar

**Tuesday, March 24 — Warm Outreach + Pilot**
- [ ] Identify 3–5 warm contacts for a pilot order (personal network, Culinary Block LLC contacts)
- [ ] Call/email warm contacts with a "founding client" offer (10–15% off first order)
- [ ] Schedule the dry-run event for later this week
- [ ] Write Doug's personal LinkedIn launch announcement post (don't publish yet)
- [ ] Draft the "launch announcement" email for existing Culinary Block contacts

**Wednesday, March 25 — Dry Run Prep**
- [ ] Coordinate with pilot client: confirm date, headcount, cuisine, dietary needs
- [ ] Coordinate with assigned chef: confirm menu, prep timeline, box count
- [ ] Confirm packaging and supplies are ready for the dry run
- [ ] Review and rehearse the full order lifecycle (inquiry → quote → booking → prep → delivery)
- [ ] Pre-schedule Week 1 social media posts for launch week (April 1–4)

**Thursday, March 26 — Dry Run Execution**
- [ ] Execute the pilot event end-to-end: chef prep → box assembly → Doug assists staging → delivery
- [ ] Photograph everything: prep, boxing, delivery, client setup
- [ ] Collect real-time feedback from the client
- [ ] Note what worked, what was slow, what broke
- [ ] Get a written testimonial or quote from the pilot client

**Friday, March 27 — Dry Run Debrief + Fixes**
- [ ] Debrief with the chef: what worked, what to change
- [ ] Fix any operational issues found during the dry run
- [ ] Update `docs/operations.md` with lessons learned
- [ ] Add pilot photos to the website and social content queue
- [ ] Add testimonial to the website (even a simple quote block)

---

### WEEK 4: Go Live (March 30–31 + April 1)

**Monday, March 30 — Final Checks**
- [ ] Confirm all 3 chef contracts are signed
- [ ] Confirm payment processing is live and tested
- [ ] Confirm website is updated with real photos, bios, and testimonial
- [ ] Confirm all CTAs and contact methods are working
- [ ] Confirm branded packaging inventory is on hand
- [ ] Confirm Calendly / scheduling link is active
- [ ] Do a final review of the 5-email outreach sequence — personalize Email 1 for top 20 leads
- [ ] Load Email 1 drafts into HubSpot (or Gmail) for the top 20 leads
- [ ] Run `/scorecard` to establish a baseline (everything should be zero or near-zero)

**Tuesday, March 31 — Launch Eve**
- [ ] Send final internal alignment email to all 3 chefs: "We go live tomorrow — here's what to expect"
- [ ] Publish Doug's LinkedIn launch announcement post
- [ ] Publish CBC LinkedIn company page launch post
- [ ] Post first Instagram content (chef spotlight or dish photo)
- [ ] Send the "launch announcement" email to existing Culinary Block contacts and warm network
- [ ] Test one more time: quote request flow, phone number, email — all working
- [ ] Get a good night's sleep

**Wednesday, April 1 — LAUNCH DAY**
- [ ] Send Email 1 to the first batch of 20 priority leads (morning, 9–10 AM)
- [ ] Post launch content on LinkedIn and Instagram
- [ ] Run `/daily` for the first time — establish the daily sales routine
- [ ] Monitor inbox for replies throughout the day
- [ ] Respond to any inbound inquiries within 2 hours
- [ ] Log all activity in HubSpot — update deal stages
- [ ] Celebrate — you built this

---

## Post-Launch: First Week Cadence (April 1–7)

| Time | Daily Action |
|---|---|
| 8:30 AM | Run `/daily` — review pipeline, draft emails, queue social |
| 9:00 AM | Send outreach emails (5–10/day, never more) |
| 10:00 AM | Follow up on yesterday's replies and quote requests |
| 12:00 PM | Post scheduled social content (LinkedIn + Instagram) |
| 2:00 PM | Make 3–5 follow-up calls to prospects who opened emails |
| 4:00 PM | Update HubSpot: move deals, add notes, log calls |
| Friday PM | Run `/scorecard` — review weekly metrics against 30/60/90 plan |

---

## Key Metrics to Track (from Sales Action Plan)

| Metric | 30-Day Target | 60-Day Target | 90-Day Target |
|---|---|---|---|
| Leads contacted | 50 | 100 | 100+ |
| Quotes sent | 10 | 25 | 40 |
| Booked events | 2 | 5 | 10 |
| Paying clients | 1–2 | 3–5 | 5–8 |
| Recurring clients | 0 | 1 | 1–2 |
| Revenue (gross) | $3,000 | $10,000 | $20,000 |

---

## Risk Watchlist

| Risk | Mitigation |
|---|---|
| Chef says no to 25% commission | Emphasize value: CBC handles ALL sales, logistics, box prep. Offer trial period at 20% if needed. |
| No replies to cold outreach | Pivot to warm intros, LinkedIn engagement, tasting events. 2–3% response rate is normal. |
| First event goes poorly | That's what the dry run is for. Document and fix before real clients. |
| Packaging costs eat margin | Monitor per-event kit cost (~$300–375). Consider flat kit fee or minimum box count for small orders. |
| Chef can't handle volume | Stagger bookings across chefs. Never book a chef beyond their stated capacity. |
| Client cancels last minute | 50% deposit at booking + cancellation policy protects CBC and chef. Enforce it. |
| **No insurance in place at launch** | **BLOCKER.** Do not accept bookings without active CGL + product liability. One allergic reaction claim without coverage could end the business. |
| **Client doesn't pay (Net 15)** | 50% deposit collected upfront limits exposure. Late payment escalation: reminder Day 16, second notice Day 22, account hold Day 30, collections Day 45. |
| **Chef's insurance lapses** | Verify at onboarding + annual re-check. No CBC events without valid chef insurance. |
| **Allergic reaction or foodborne illness** | Insurance + incident protocol (see `docs/operations.md`). Individual dietary labeling on every item is the #1 prevention. |
| **Bank account not separated** | Commingling CBC revenue with personal or LLC funds creates tax and liability exposure. Open dedicated account in Week 1. |

---

## End-to-End Order Lifecycle — Gap Analysis

> Summary of 14 gaps found in the original `docs/operations.md` and fixes applied. Reference this when reviewing operational readiness.

### Gaps Found & Fixed (updated in `docs/operations.md`)

| # | Gap | Risk | Fix Applied |
|---|---|---|---|
| 1 | **No deposit required at booking** | Client no-shows cost chef ingredient money and CBC coordination time | Added 50% deposit at booking confirmation (Stage 3) |
| 2 | **Payment methods listed as [TBD]** | Can't invoice clients without a payment method | Specified ACH, credit card (Stripe), check, wire transfer |
| 3 | **No late payment policy** | Clients pay whenever they want — cash flow risk | Added escalation: Day 16 reminder → Day 22 notice → Day 30 hold → Day 45 collections |
| 4 | **No financial reconciliation step** | CBC doesn't know actual margin per event | Added post-event reconciliation: actual vs. quoted guest count, kit cost, margin calculation |
| 5 | **Cancellation policy had two [TBD] entries** | No protection if client cancels | Filled in: 5+ days = refund minus $150 fee; under 5 days = deposit non-refundable |
| 6 | **No client welcome email after booking** | Client doesn't know what to expect on delivery day | Added welcome email step to Stage 3 with event details, what to expect, cancellation link |
| 7 | **No dispute resolution process** | Complaints escalate with no playbook | Added 3-tier escalation (Low/Medium/High) with response times and resolution actions |
| 8 | **No refund policy** | Every complaint is ad-hoc — inconsistent treatment | Added refund table: late delivery, wrong cuisine, quality issues, labeling errors |
| 9 | **No allergen/food safety incident protocol** | Allergic reaction with no response plan = lawsuit risk | Added 5-step protocol: immediate response → chef investigation → insurer notification → incident report → corrective action |
| 10 | **No structured feedback collection** | Post-event follow-up is informal — no data to improve | Added 3-question client survey, internal debrief checklist, chef feedback cadence |
| 11 | **No feedback-to-action cycle** | Feedback collected but not acted on systematically | Added signal → action → timeline mapping for every feedback type |
| 12 | **Website listed as Squarespace but runs on Vercel** | Inconsistency confuses ops team | Fixed reference to Vercel in Stage 1 |
| 13 | **No insurance detail beyond "carry $1M"** | No guidance on policy types, where to get them, how to verify chefs | Added full Insurance Requirements section with CBC policies, chef verification, and COI process |
| 14 | **No bank account or payment processing setup guide** | Money flows with no infrastructure | Added Bank Account & Payment Setup section with Stripe setup, chef payout process, bookkeeping |

### The Complete Money Flow (Client → CBC → Chef)

```
CLIENT BOOKS EVENT
    │
    ├─→ 50% deposit collected at booking (Stripe invoice or ACH)
    │   └─→ Funds land in CBC business checking account
    │
    ├─→ Event is executed (chef preps → CBC stages → delivery)
    │
    ├─→ CBC sends final invoice within 24 hours of event
    │   └─→ Balance = quoted total − deposit already paid
    │
    ├─→ Client pays remaining 50% (Net 15 terms)
    │   └─→ If late: Day 16 reminder → Day 22 second notice → Day 30 account hold
    │
    ├─→ CBC reconciles: actual guest count vs. quote, actual kit cost, actual margin
    │
    ├─→ CBC calculates chef payout: (order revenue after discounts) × 75%
    │
    ├─→ CBC pays chef (Net 30 from service date, or within 5 days of receiving full client payment — whichever is later)
    │   └─→ ACH direct deposit + remittance summary
    │
    └─→ CBC retains 25% commission − kit cost − any Tier 2 staff cost = NET MARGIN
        └─→ Log in bookkeeping tool, flag if margin < 15%
```

### The Complete Feedback Flow (Event → Improvement)

```
EVENT DELIVERED
    │
    ├─→ Within 48 hours: Send 3-question client feedback survey
    │   ├─→ Score 4–5: Request Google review + testimonial + pitch recurring
    │   └─→ Score 1–3: Call client, investigate with chef, offer credit, log corrective action
    │
    ├─→ Within 48 hours: Doug completes internal debrief checklist
    │   └─→ On-time? Box count accurate? Labeling issues? Kit cost? Lessons learned?
    │
    ├─→ After first 3 events per chef, then monthly: Chef feedback check-in
    │   └─→ "How did prep go? Anything we can improve?"
    │
    └─→ First Friday of each month: Monthly operational review
        ├─→ Average satisfaction score
        ├─→ Average margin per event
        ├─→ Top 3 improvements for next month
        └─→ Chef performance review (on-time rate, labeling, client feedback)
```

---

*This checklist was generated on March 11, 2026, and updated with insurance, bank account, payment lifecycle, and end-to-end order audit on the same date. Update weekly as tasks are completed.*
