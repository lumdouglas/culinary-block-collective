# Culinary Block Collective — Project Context for Claude

> **Last updated: 2026-03**

## Who I Am

I'm Doug, an entrepreneur with an EE/systems background and 8 years of IP operations experience. I also run **Culinary Block LLC**, a commercial kitchen commissary in California supporting 20+ micro food businesses.

**Culinary Block Collective (CBC)** is a new venture layered on top of the commissary — a corporate catering operation that connects the commissary's independent chef-tenants to Bay Area tech companies that need reliable, diverse, high-quality catering. CBC operates as **Culinary Block Collective LLC**, a separate entity fully owned by Doug.

---

## What This Project Is

CBC serves two distinct customer segments:

1. **Chef Entrepreneurs / Food Business Operators** — micro food businesses and independent chefs already operating out of the Culinary Block commissary, who gain access to corporate catering gigs, professional infrastructure, and a branded sales channel they couldn't build on their own
2. **Corporate Buyers in the Bay Area** — office managers and HR/People Ops directors at tech firms (50–300 employees) who need reliable, diverse, dietary-friendly catering

**Business model:** CBC acts as the operator, retaining a **25% commission** on each order (20% for Unique Cuisine — negotiated exception). Client-facing price is **$25–$40/person** depending on cuisine and tier. Service is **Chef's Spread (self-serve station) format only — no individual box meals.** CBC charges the client and collects applicable **sales tax**; chefs receive their agreed percentage of the per-person rate (sales tax is not deducted from chef payout). Chefs provide their own serving ware and chafing dishes for the spread; CBC creates dietary labels, **food safety labels** (with consume-by times per FDA Food Code), and handles delivery. Two service tiers: **Tier 1 — Drop-Off Spread** (no on-site CBC staff) and **Tier 2 — Attended Service** (+$8/person, on-site CBC staff, full setup and breakdown). See *Service & Pricing Model* section below.

**Chef roster:** Dynamic — drawn from current Culinary Block commissary tenants. Cuisines on offer at any time may include Chinese, sushi/Japanese, Vietnamese, Mexican fusion, American/pub fare, bakery, juices, and boba. The lineup shifts as tenants change.

**Client-facing price (per person):** $25–$30/person (Standard) · $40/person (Premium) · +$8/person for Attended Service. Commission: 25% CBC / 75% chef standard; Unique Cuisine exception: 20% CBC / 80% chef.

---

## Service & Pricing Model

> **Last updated:** 2026-03

CBC operates **two service tiers** plus a **Premium** price point. All service is **Chef's Spread (self-serve station) format** — no individual box meals.

**Doug's operational role:** CBC (Doug) creates dietary labels and food safety labels (with consume-by times), collects sales tax from clients, and delivers food from the commissary to the client site. Chefs provide their own serving ware and chafing dishes for the spread — CBC handles labeling, food safety compliance, sales tax, and delivery. CBC also reimburses chefs for food costs from tasting sessions. Corporate clients must acknowledge food safety labels (consume-by times) in writing before each event.

---

### Standard Drop-Off Spread (Tier 1)

Chef's Spread with chafing dishes, insulated trays, serving utensils, printed menu card (CBC), dietary labels (CBC). CBC delivers. Client handles cleanup. No on-site CBC staff.

| Chef / Cuisine | Per-Person Price | Min. Guests | Min. Order |
|---|---|---|---|
| Kivi's Kitchen · Chinese | $25–$30/person | 50 | $1,250–$1,500 |
| Five Course Provision · Mexican Fusion | $30/person | 50 | $1,500 |

**CBC service kit cost per order:** ~$50–$100 (dietary labels, printed menu cards, dietary breakdown sheets, delivery fuel/vehicle). Chef provides serving ware. At 25% commission, margins are healthy.

---

### Premium Drop-Off Spread

Elevated Chef's Spread with premium proteins or expanded menu. Same Drop-Off format, elevated ingredients.

| Chef / Cuisine | Per-Person Price | Min. Guests | Min. Order |
|---|---|---|---|
| Five Course · Mexican Fusion (Chef John) | $40/person | 50 | $2,000 |
| Unique Cuisine · Sushi & Japanese | $40/person | 50 | $2,000 |

**Commission notes:**
- Five Course (Premium): 25% standard. Chef gets $30/person, CBC gets $10/person.
- Unique Cuisine: **20% (negotiated exception)**. Chef gets $32/person, CBC gets $8/person.

---

### Attended Service (Tier 2)

Everything in Drop-Off Spread plus on-site CBC staff who set up, maintain stations, and clean up. Proper linen and labeled stations. **+$8/person** on top of Standard or Premium price.

| Chef / Cuisine | Standard + Attended | Premium + Attended |
|---|---|---|
| Kivi · Chinese | $33–$38/person | — |
| Five Course · Mexican Fusion | $38/person | $48/person |
| Unique Cuisine · Sushi | — | $48/person |

**Attended staffing:**
- Doug solo: under 100 guests
- 2 staff: 100–200 guests
- 200+ guests: confirm at booking

**CBC staff cost:** $30/hr fully loaded (taxes + workers comp) · Billed to client at $35–$45/hr. Staff billings are CBC revenue on top of commission. Tier 2 is the margin engine — target mix should shift toward Tier 2 as client relationships mature.

**Min. guests across all chefs:** 50. **Max:** 500 guests.

---

### Commission Summary

| Chef | Commission | Chef Payout | CBC Gets |
|---|---|---|---|
| Kivi's Kitchen | 25% standard | 75% | 25% |
| Five Course Provision | 25% standard | 75% | 25% |
| Unique Cuisine | **20% (exception)** | **80%** | 20% |

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
- **Unique Cuisine commission is 20% (negotiated exception)** — all other chefs (Kivi, Five Course) are 25% standard. Do not discuss commission rates publicly or in client-facing materials.
- **Two contractor agreement files** exist — the `Independent Contractor Agreement for Catering Services.docx` is the current version (includes tier flexibility); the `Contractor Agreement.docx` is the earlier draft.
- **`cbc-sales.plugin`** is a Claude Code plugin (ZIP archive) with 6 slash commands: `/daily`, `/pipeline`, `/draft-email`, `/quote`, `/content-week`, `/scorecard`. To activate, extract the `commands/` folder into `.claude/commands/`. See `CBC_Sales/CBC_Cowork_Shortcuts_Setup.md` for full instructions.
- **Scheduling is not available** — Claude Code has no native task scheduler. All plugin commands must be run manually. Gmail integration is planned but not yet implemented.

---

## Docs That Need to Be Created / Actions Still Pending

1. **Kivi and Five Course formal sign-off** — Unique Cuisine is confirmed at 20%/$40/person. Kivi (Chinese) and Five Course Provision (Mexican Fusion) still need formal written agreements signed before launch. Present the model to each: CBC handles sales, client relationships, dietary labeling, and delivery; chefs focus on cooking and providing spread serving ware.
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

## Working Norms

- **Plan first:** For any task with 3+ steps, write a checklist to `tasks/todo.md` before starting. Mark items complete as you go.
- **Self-correction log:** After any correction from Doug, add a rule to `tasks/lessons.md` to prevent repeating the mistake.
- **Verify before done:** Before finalizing any client-facing or chef-facing content, cross-check pricing and commission details against `CLAUDE.md` and `docs/menu-pricing.md`.
- **Parallel research:** Use subagents to analyze multiple docs simultaneously rather than sequentially.
- **No invented details:** Never fill in chef names, prices, or policies from imagination — ask Doug if the source doc is missing the info.
- **Concise responses:** Be as brief as possible. No filler phrases, no preamble, no restating what Doug said. Cut pleasantries. Lead with the answer or action.

---

## Development Standards (Vercel / Next.js)

- **Parallelize awaits:** Never `await` independent async calls sequentially. Use `Promise.all()` so unrelated fetches run in parallel. Per [Vercel React Best Practices (2026)](https://vercel.com/blog/introducing-react-best-practices) — sequential awaits are the most common avoidable latency source.
  ```ts
  // Bad — sequential, doubles wait time
  const menu = await getMenu();
  const chefs = await getChefs();

  // Good — parallel
  const [menu, chefs] = await Promise.all([getMenu(), getChefs()]);
  ```
- **Lazy state initialization:** Wrap expensive `useState` initializers in a callback so they only run once, not on every render.
- **Keep compute close to data:** Deploy functions in the same region as your database to avoid roundtrip latency.

---

## Key Context

- I'm building CBC alongside running the existing Culinary Block LLC commissary — time is limited
- Target market: **Bay Area / California tech firms**
- Brand tone: professional but warm, community-oriented, chef-forward
- Business model is still being validated — pricing and service packages may evolve
- Tools: **Claude Code**, Cursor AI, HubSpot (free), Vercel, Gmail
