---
name: outbound-sales-execution
description: >
  Executes outbound B2B sales workflows end-to-end: prospecting lists, cold email sequences, LinkedIn
  outreach, follow-up cadences, objection handling scripts, and deal-stage progression.
  Trigger this skill whenever the user mentions: cold outreach, prospecting, sales sequences, follow-ups,
  email templates, pitch decks for sales, closing scripts, lead lists, ICP targeting, "how do I reach X",
  "write a cold email", "draft a follow-up", "help me sell to", "outbound", "pipeline", "book a meeting",
  "go-to-market", "sales copy", "sales deck", or anything about winning new clients or accounts.
  Also trigger proactively when the user describes a new product or service and hasn't yet addressed
  how they'll acquire customers — surface the outbound motion before they ask.
---

# Outbound Sales Execution

## Reference docs — read before drafting any outreach

Before writing a cold email, LinkedIn DM, or follow-up for a prospect, read these in order:

1. `docs/om-identification-field-guide.md` — classify the prospect into one of 5 OM subtypes using their LinkedIn profile or prior reply (Veteran Operator, Promoted EA, Accidental OM, Workplace Experience Builder, OM/HR Hybrid)
2. `docs/om-outreach-templates.md` — pull the subtype-specific email sequence and LinkedIn DM; personalize bracketed fields; do not send generic templates
3. `docs/cbc-personas-deep-dossier.md` — tone calibration; confirms what Sarah/Marcus actually fear, value, and ignore; use this to pressure-test subject lines and opening lines before sending

The generic sequence templates later in this skill are starting points. The subtype-specific templates in `om-outreach-templates.md` take precedence when the prospect has been classified.

---

Doug runs CBC (Culinary Block Collective), a catering platform connecting chef entrepreneurs with Bay Area
corporate clients on a commission model. The outbound motion targets: corporate office managers, executive
assistants, event coordinators, HR / culture leads, and facilities managers at mid-to-large tech companies,
law firms, and financial services firms in the South Bay and SF.

Secondary targets for Unique (sushi catering logistics app): commissary kitchen operators and food-service
management companies who would license or white-label the platform.

---

## Core Frameworks

### ICP (Ideal Customer Profile) — CBC
- **Primary**: Office managers / EA / culture teams at 200–5,000 person tech cos (South Bay, SF, remote-friendly)
- **Budget signal**: Has hosted catering before, company size > 100, physical office
- **Pain**: Inconsistent vendor quality, logistical complexity, corporate account management overhead
- **Hook**: Curated chef marketplace + white-glove logistics, not just another catering app

### Outbound Channels (priority order)
1. **LinkedIn DM** — highest reply rates for office/EA personas
2. **Cold email** — volume plays to HR/Culture leads via domain scraping or Apollo
3. **Phone** — use after 2 unanswered touches; 15-second voicemail referencing prior email
4. **Video DM** (Loom, 60s max) — pattern interrupt for high-value targets; show the chef roster
5. **Warm intro** — through commissary kitchen network (existing Culinary Block LLC clients)
6. **Event presence** — local tech meetups, office manager Slack groups, Silicon Valley EA networks

### Cadence Architecture (non-negotiable: 4–7 touches, multi-channel)
One channel = dead. Every sequence must span at least 3 channels over 10–14 days.

```
Day 1:  LinkedIn connection request (no note) OR Email Touch 1
Day 3:  Email Touch 2 (if no reply) OR LinkedIn DM (if connected)
Day 5:  Phone call + voicemail referencing email
Day 7:  LinkedIn DM (personalized, not copy-paste from email)
Day 9:  Email Touch 3 (breakup / low-friction ask)
Day 12: Loom video (for high-value targets only — personalize the thumbnail)
Day 14: Final LinkedIn DM ("closing the loop")
```

### Daily Execution Rhythm
**50–80 new prospects touched per day minimum.** Volume + quality compound — one without the other fails.
- Morning block (9–11am): New outreach (emails + LinkedIn requests)
- Midday: Follow-ups + call block
- EOD: CRM update + next-day queue prep

**Reply rate benchmarks** — track weekly, not monthly:
| Metric | Acceptable | Fix Required |
|---|---|---|
| Cold email reply rate | > 8–12% | < 8% = rewrite the copy or the list |
| LinkedIn DM reply rate | > 15% | < 10% = wrong persona or generic message |
| Meeting-book rate (replies → booked) | > 25% | < 20% = objection handling gap |
| Close rate (demos → closed) | > 20% | Track from Day 1 |

Anything below 8% reply on cold email is a **process problem**, not a "sales is hard" problem. Diagnose: list quality → subject line → opening line → CTA, in that order.

---

## Sequence Templates

### Cold Email — Office Manager / EA (3-touch email, part of 7-touch multi-channel)

**Touch 1 (Day 1) — Value-first, no ask**
```
Subject: [Company] team lunches — a better option

Hi [Name],

I run a platform called Culinary Block Collective — we connect Bay Area companies
with a vetted roster of chef-entrepreneurs who do corporate catering.

Most of our clients switched from [GrubHub Corporate / Cater2.me / etc.] because
they wanted more variety and a direct relationship with the chef, not a marketplace
middleman. Thought it might be relevant given your team size.

Happy to send over our chef roster — no commitment needed.

— Doug
```

**Touch 2 (Day 4) — Specificity bump**
```
Subject: Re: [Company] team lunches

Just wanted to make sure this didn't get buried — we have a Japanese-cuisine chef
based in San Jose who specifically does corporate sushi spreads. Works a lot with
[similar company] and their team loves it.

Worth a 15-minute call to see if there's a fit?
```

**Touch 3 (Day 9) — Breakup / low-friction close**
```
Subject: Closing the loop

No worries if timing's off — I'll leave it here.

If catering ever becomes a priority, I'm at [email]. We keep the roster small and
quality-controlled, so it's worth knowing us before you need us.
```

---

### LinkedIn DM — Warm (via mutual or group)

```
Hey [Name] — saw you're at [Company]. I run Culinary Block Collective, a Bay Area
chef-to-corporate catering platform. We're a smaller, more curated alternative to
the big marketplaces — direct chef relationships, no middlemen.

If your team does regular catering or event lunches, happy to send the roster.
Not a pitch, just worth a look.
```

---

### Objection Scripts

| Objection | Response |
|---|---|
| "We already use [vendor]" | "Totally understand — most of our clients have a primary vendor. We typically come in for variety events, team offsites, or when they want a higher-quality experience. Worth knowing us as a backup at minimum." |
| "Budget is tight right now" | "Makes sense. We have options from $18/head up — and because you're booking direct with the chef, there's no markup layer. When budget opens up, we're the lean option." |
| "Who else uses you?" | Offer 2–3 reference clients (with permission) or provide a case study PDF. |
| "How is this different from [EzCater]?" | "EzCater is a marketplace — we're a curated collective. You get the same chef every time, they learn your team's preferences, and you're not competing with other bookings on a platform." |

---

## Deal Stage Tracker + CRM Discipline

Every activity must be logged. Every stage has clear **exit criteria** — no deal advances without meeting them.

```
Prospect → Contacted → Replied → Demo/Call booked → Proposal sent → Closed / Lost
```

| Stage | Exit Criteria (must be true to advance) |
|---|---|
| Prospect | ICP confirmed: role, company size, has catering budget or history |
| Contacted | At least 1 touch logged with date + channel |
| Replied | Positive reply OR request for more info (not just "unsubscribe") |
| Demo/Call booked | Calendar invite sent and confirmed |
| Proposal sent | Written proposal or menu PDF delivered, follow-up scheduled |
| Closed-Won | PO or first order placed |
| Closed-Lost | Document reason: Budget / Timing / Competitor / No need |

For each active deal, track:
- Company name, contact name, title
- Channel used (LinkedIn / email / phone / warm intro)
- Last touch date + next action + next action date
- Stage + exit criteria status
- Blocker (if stalled)

Live in the CRM like it's your operating system. Stale deals with no next-action date are invisible pipeline — delete or revive.

When asked to help manage pipeline, output a markdown table with these columns.

---

## Output Standards

- Cold emails: max 5 sentences, no buzzwords, plain text preferred
- LinkedIn DMs: 3–4 lines, conversational, no links in first message
- Follow-ups: reference something specific from prior message or their company
- Call scripts: structured as Opener → Discovery → Pitch → Ask (CTA)
- Always end with one clear CTA, never two

---

## Tone Calibration

Doug's voice: direct, no fluff, credibility through specificity, peer-to-peer not vendor-to-buyer.
Avoid: "I hope this finds you well", "synergy", "best-in-class", "leverage", "circle back".
Use: specific numbers, named references, short sentences, founder energy.
