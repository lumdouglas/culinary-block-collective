# Culinary Block Collective — Project Context for Claude

## Who I Am

I'm Doug, an entrepreneur with an EE/systems background and 8 years of IP operations experience. I also run **Culinary Block LLC**, a commercial kitchen commissary in California supporting 20+ micro food businesses.

**Culinary Block Collective (CBC)** is a new venture layered on top of the commissary — a corporate catering operation that connects the commissary's independent chef-tenants to Bay Area tech companies that need reliable, diverse, high-quality catering.

---

## What This Project Is

CBC serves two distinct customer segments:

1. **Chef Entrepreneurs / Food Business Operators** — micro food businesses and independent chefs already operating out of the Culinary Block commissary, who gain access to corporate catering gigs, professional infrastructure, and a branded sales channel they couldn't build on their own
2. **Corporate Buyers in the Bay Area** — office managers and HR/People Ops directors at tech firms (50–300 employees) who need reliable, diverse, dietary-friendly catering

**Business model:** CBC acts as the operator, retaining a **25% commission** on each order. Client-facing price is **$20–30/box** (tier depends on menu complexity). CBC charges the client; chefs receive 75% of the per-box rate. Chefs provide their own box packaging; CBC creates dietary labels and handles delivery. Two service tiers: **Tier 1 — Premium Drop-Off** (no on-site CBC staff) and **Tier 2 — Attended Service** (on-site CBC staff, full setup and breakdown). See *Service & Pricing Model* section below.

**Chef roster:** Dynamic — drawn from current Culinary Block commissary tenants. Cuisines on offer at any time may include Sichuan, sushi/Japanese, Vietnamese, Mexican fusion, American/pub fare, bakery, juices, and boba. The lineup shifts as tenants change.

**Client-facing price (per box):** $20–30/box. CBC commission: 25%. Chef payout: 75% of per-box price. Box tiers approximate: Budget ~$20 · Core ~$25 · Premium ~$30.

⚠️ **Chef buy-in pending:** The 25% commission and $20–30/box pricing structure still needs to be presented and agreed to by each active chef. This is a priority action before launch. Key selling points: CBC handles all sales, client relationships, dietary labeling, and delivery — chefs focus on cooking and boxing.

---

## Service & Pricing Model

CBC operates **two service tiers**. **Commission is 25% (CBC) / 75% (chef)** — this is the standard rate across all chefs. Client price is $20–30/box depending on tier. Document confirmed rates per chef in `docs/chef-profiles.md` once agreements are signed.

**Doug's operational role:** CBC (Doug) creates dietary labels and delivers food from the commissary to the client site. Doug assists with boxing only if needed (e.g., chef's team is running late). Chefs provide their own box packaging — CBC handles labeling and delivery. This is a key part of the value CBC provides to chefs — they don't have to manage sales, labeling compliance, or last-mile delivery.

---

### Tier 1 — Premium Drop-Off

Chef-provided box packaging, chafing dishes or insulated trays, serving utensils, printed menu card (CBC), dietary labels (CBC), disposable plates and napkins. CBC delivers. Client sets up and cleans up. No on-site CBC staff.

| Chef / Cuisine | Per-Head Price | Minimum Guests | Minimum Order |
|---|---|---|---|
| Chinese (Sichuan) | $22/head | 75 | $1,650 |
| Mexican Fusion | $26/head | 100 | $2,600 |
| Sushi / Japanese | $28/head | 100 | $2,800 |

**CBC service kit cost per order:** ~$50–$100 (dietary labels, printed menu cards, dietary breakdown sheets, delivery fuel/vehicle). Packaging is the chef's cost. At 25% commission, margins are healthier than when CBC supplied packaging.

---

### Tier 2 — Attended Service

Everything in Tier 1 plus 1–2 on-site CBC staff who set up, maintain the buffet, and clean up. Proper linen and labeled stations.

| Chef / Cuisine | Per-Head Price | Minimum Guests | Minimum Order |
|---|---|---|---|
| Chinese (Sichuan) | $38/head | 75 | $2,850 |
| Mexican Fusion | $44/head | 100 | $4,400 |
| Sushi / Japanese | $48/head | 100 | $4,800 |

**CBC staff cost:** $30/hr fully loaded (taxes + workers comp) · Billed to client at $35–$45/hr
**Staff contribution per event (2 staff × 4 hrs):** $40–$120 above labor cost, on top of commission

Tier 2 is the margin engine — target mix should shift toward Tier 2 as client relationships mature. Commission: 25% CBC / 75% chef (same as Tier 1). Staff billings are CBC revenue on top of commission.

---

### Coming Soon

Cold-pressed juice · Tacos · Thai food — pricing and minimums TBD

---

## Project Status

**Stage:** Pre-launch — infrastructure built, outreach not yet started

| Area | Status |
|---|---|
| Website | ✅ Live on Vercel |
| Client avatars / personas | ✅ `docs/personas.md` + `CBC_Client_Avatars.md` |
| Business plan | ✅ `docs/business-plan.md` |
| Menu & pricing reference | ✅ `docs/menu-pricing.md` |
| Landing page copy | ✅ `docs/landing-page.md` |
| Email outreach sequence | ✅ `docs/email-outreach.md` |
| Sales action plan (30/60/90) | ✅ `docs/sales-action-plan.md` |
| Campaign plan | ✅ `docs/campaign-plan.md` |
| Sales folder + Cowork automation | ✅ Set up (`CBC_Sales/`) |
| Contractor agreements | ✅ Drafted (two versions in root) |
| One-pager PDF | ✅ `CBC_Sales_One_Pager_v2.pdf` |
| HubSpot CRM + leads | ✅ CSVs in `CBC_Sales/01_Leads/` + `CBC_Sales/02_Pipeline/` |
| Active outreach | ❌ Not started |
| Paying clients | ❌ None yet |
| Chef profiles (3 active chefs) | ⚠️ Structure created — `docs/chef-profiles.md` needs names + details filled in |
| Operational workflow doc | ✅ `docs/operations.md` |

---

## File Map

```
/
├── CLAUDE.md                                        ← This file
│
├── docs/                                            ← PRIMARY REFERENCE DOCS (markdown, Claude-readable)
│   ├── business-plan.md                             ← Full business plan: market, financials, ops, risks
│   ├── personas.md                                  ← Corporate buyer avatars: Sarah (OM) + Marcus (HR)
│   ├── menu-pricing.md                              ← Customer-facing pricing, chef roster, tiers, add-ons
│   ├── landing-page.md                              ← All live website copy: headlines, FAQs, CTAs
│   ├── email-outreach.md                            ← Full 5-email cold outreach sequence with tips
│   ├── sales-action-plan.md                         ← 30/60/90 day playbook, scripts, weekly checklist
│   ├── campaign-plan.md                             ← 6-month brand awareness + lead gen campaign with KPIs
│   ├── chef-profiles.md                             ← The 3 active chefs: personality, story, content angles, event routing
│   └── operations.md                                ← Full order lifecycle: inquiry → quote → chef assignment → delivery → invoicing
│
├── — Source Files (originals — not directly readable by Claude) —
├── Business plan.docx                               ← Source for docs/business-plan.md
├── CBC_Client_Avatars.docx                          ← Source for docs/personas.md
├── CBC_Client_Avatars.md                            ← Standalone copy of personas (root-level)
├── CBC_Campaign_Plan_2025.docx                      ← Source for docs/campaign-plan.md
├── CBC_Sales_Action_Plan_30_60_90.docx              ← Source for docs/sales-action-plan.md
├── CBC_Email_Outreach_Templates.docx                ← Source for docs/email-outreach.md
├── CBC_Sales_One_Pager_v2.pdf                       ← Leave-behind / Email 1 & 3 attachment for prospects
├── Action items and notes.docx                      ← Prioritized task list with deadlines (not yet converted)
├── Contractor Agreement.docx                        ← Earlier contractor agreement draft (superseded)
├── Independent Contractor Agreement for...docx      ← Current contractor agreement (use this one)
├── CBC_Cowork_Setup_Guide.docx                      ← Full Cowork onboarding instructions
│
├── — Website (live on Vercel) —
├── index.html                                       ← Main landing page
├── admin.html                                       ← Admin/backend interface
├── calendar.html                                    ← Menu calendar view
├── chef-john.html                                   ← Chef profile page
├── chef-unique-cuisine.html                         ← Chef profile template
├── CBC_Landing_Page_SEO.html                        ← Source for docs/landing-page.md
├── CBC_Menu_Calendar_Wireframe.html                 ← Menu calendar wireframe
├── sitemap.xml
├── vercel.json
├── images/                                          ← Sushi/chef photography assets
│
├── — Sales Operations —
├── CBC_Sales/01_Leads/LinkedIn_Leads_CBC.csv        ← LinkedIn lead exports
├── CBC_Sales/02_Pipeline/HubSpot_Pipeline_CBC.csv   ← HubSpot pipeline data
├── CBC_Sales/03_Emails_Drafts/                      ← Cowork drops ready-to-send emails here
├── CBC_Sales/04_Quotes/                             ← Quote PDFs
├── CBC_Sales/05_Content/                            ← LinkedIn posts, Instagram captions
├── CBC_Sales/06_Reports/                            ← Weekly scorecards
├── CBC_Sales/07_Templates/                          ← Email templates, menus, one-pager
├── CBC_Sales/08_Completed/                          ← Sent emails, closed deals, archive
├── CBC_Sales/CBC_Cowork_Shortcuts_Setup.md          ← Plugin setup guide + slash command reference
├── CBC_Sales/cbc-sales.plugin                       ← Claude Code plugin (ZIP): 6 slash commands for sales automation
│
└── Book1.xlsx                                       ← (Purpose unclear — needs review)
```

---

## Known Inconsistencies to Resolve

- **Chef count** varies across docs (5, 6, or 7) — the correct answer is that the roster is dynamic based on commissary tenants. Any doc that states a fixed number needs a disclaimer.
- **Commission rate is confirmed at 25% (CBC) / 75% (chef)** — standard across all chefs. Chef agreements still pending signature — see Pending Actions.
- **Two contractor agreement files** exist — the `Independent Contractor Agreement for Catering Services.docx` is the current version (includes tier flexibility); the `Contractor Agreement.docx` is the earlier draft.
- **`cbc-sales.plugin`** is a Claude Code plugin (ZIP archive) with 6 slash commands: `/daily`, `/pipeline`, `/draft-email`, `/quote`, `/content-week`, `/scorecard`. To activate, extract the `commands/` folder into `.claude/commands/`. See `CBC_Sales/CBC_Cowork_Shortcuts_Setup.md` for full instructions.
- **Scheduling is not available** — Claude Code has no native task scheduler. All plugin commands must be run manually. Gmail integration is planned but not yet implemented.

---

## Docs That Need to Be Created / Actions Still Pending

1. **Sell 25% commission + $20–30/box pricing to chefs** — present the model to each active chef and get sign-off before launch. Key pitch: CBC handles sales, client relationships, dietary labeling, and delivery; chefs focus on cooking and boxing. ⚠️ **Priority before any outreach starts.**
2. **Chef profiles** → `docs/chef-profiles.md` — structure exists, needs Doug to fill in names, personalities, stories, and operational details for the 3 active chefs
3. **Install the sales plugin** — extract `CBC_Sales/cbc-sales.plugin` into `.claude/commands/` to activate the 6 slash commands (see `CBC_Sales/CBC_Cowork_Shortcuts_Setup.md`)
4. **Define client cancellation policy** — `docs/operations.md` Cancellation table has two `[TBD]` entries (client cancels 5+ days out; client cancels under 5 days); add to contracts when ready

---

## Primary Goals When We Work Together

1. **Content creation** — drafting emails, copy, proposals, LinkedIn posts, and docs
2. **Audit & gap analysis** — flagging inconsistencies, missing pieces, and next steps
3. **Sales operations** — working with leads, pipeline data, and outreach sequences

When I start a session without a specific task, ask: *"What are we working on today — content, sales ops, or something else?"*

---

## How to Help Me Best

- Be direct and structured — I think in systems
- When reviewing docs, flag gaps and inconsistencies, don't just summarize
- When brainstorming, give me options with tradeoffs, not just one answer
- Always tell me the **next most important action** if I don't ask
- Reference existing project files before generating new content from scratch
- Don't treat the chef count as fixed — ask which chefs are currently active if it matters

---

## Key Context

- I'm building CBC alongside running the existing Culinary Block LLC commissary — time is limited
- Target market: **Bay Area / California tech firms**
- Brand tone: professional but warm, community-oriented, chef-forward
- Business model is still being validated — pricing and service packages may evolve
- Tools: **Claude Code**, Cursor AI, HubSpot (free), Vercel, Gmail
