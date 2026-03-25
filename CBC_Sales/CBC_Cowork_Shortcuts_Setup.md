# CBC Sales Plugin — Setup & Command Reference

> **What this is:** A Claude Code plugin with 6 slash commands that automate the CBC sales workflow — morning pipeline review, email drafting, quote generation, social content, and weekly scorecards.
>
> **Plugin file:** `CBC_Sales/cbc-sales.plugin`
>
> ⚠️ **Note on scheduling:** Automatic daily scheduling is NOT a native Claude Code feature. All commands must be run manually (on demand). The daily routine takes ~5 minutes to trigger and runs autonomously from there.

---

## The 6 Slash Commands

| Command | What It Does |
|---|---|
| `/daily` | Full morning routine — pipeline review + follow-up email drafts + new lead outreach + LinkedIn post + briefing summary |
| `/pipeline` | Quick read-only pipeline scan — stale deals table, hot leads, top 3 priorities. No drafts. |
| `/draft-email [name] [company] [1-5]` | Draft one personalized email for a specific prospect at the right sequence step |
| `/quote [name] [company] [guests] [cuisine] [date]` | Generate an itemized quote — saves PDF to `04_Quotes/` |
| `/content-week` | Full week of content — 5 LinkedIn posts + 5 Instagram captions, saved to `05_Content/` |
| `/scorecard` | Weekly KPI report — reads pipeline + activity data, generates a filled-in Word doc with 🟢/🟡/🔴 status |

---

## Installation

The plugin commands are defined as markdown files inside `cbc-sales.plugin` (which is a ZIP archive). To activate them in Claude Code:

1. Extract `cbc-sales.plugin` — it contains a `commands/` folder with one `.md` file per command
2. Copy the contents of `commands/` into `.claude/commands/` in this project root
3. The slash commands will then be available in Claude Code sessions for this project

```
# From the project root:
python3 -c "
import zipfile, os, shutil
with zipfile.ZipFile('CBC_Sales/cbc-sales.plugin') as z:
    z.extractall('/tmp/cbc-plugin')
os.makedirs('.claude/commands', exist_ok=True)
for f in os.listdir('/tmp/cbc-plugin/commands'):
    shutil.copy(f'/tmp/cbc-plugin/commands/{f}', f'.claude/commands/{f}')
print('Done — commands installed to .claude/commands/')
"
```

---

## Folder Structure Required

All commands read from and write to `CBC_Sales/`. This structure must exist before running any command.

```
CBC_Sales/
├── 01_Leads/          ← Drop LinkedIn CSV exports here
├── 02_Pipeline/       ← Drop HubSpot export CSVs here
├── 03_Emails_Drafts/  ← Commands save email drafts here
├── 04_Quotes/         ← Commands save quote PDFs here
├── 05_Content/        ← Commands save social posts here
├── 06_Reports/        ← Commands save weekly scorecards here
├── 07_Templates/      ← Your email templates, one-pager, menus
└── 08_Completed/      ← Archive sent emails and closed deals here
```

**Before first use:**
- Export HubSpot pipeline as CSV → drop in `02_Pipeline/`
- Export LinkedIn Sales Navigator leads as CSV → drop in `01_Leads/`
- Copy `CBC_Email_Outreach_Templates.docx`, `CBC_Sales_One_Pager_v2.pdf`, and any chef menu PDFs into `07_Templates/`

---

## Usage Examples

**Start your morning:**
```
/daily
```

**Quick pipeline check mid-day:**
```
/pipeline
```

**Draft a cold email for a new prospect:**
```
/draft-email Sarah Stripe 1
```
*(Drafts Email 1 for Sarah at Stripe — saves to `03_Emails_Drafts/`)*

**Generate a quote:**
```
/quote Jennifer Google 150 sushi 2025-07-15
```
*(150-guest sushi buffet for Jennifer at Google on July 15 — saves PDF to `04_Quotes/`)*

**Get a full week of posts ready on Monday:**
```
/content-week
```

**Review your week every Friday:**
```
/scorecard
```

---

## Recommended Daily Workflow

| Time | Action |
|---|---|
| 8:30 AM | Run `/daily` in Claude Code |
| 8:45 AM | Review `03_Emails_Drafts/` — edit and approve each draft |
| 9:00 AM | Send approved emails from Gmail |
| 9:10 AM | Make any phone/text follow-up calls flagged in the briefing |
| 9:30 AM | Done |

**Weekly:** Run `/scorecard` every Friday. Run `/content-week` every Monday.

---

## Feeding in New Leads

Drop any of these into `01_Leads/` — `/daily` picks them up and drafts Email 1 automatically:
- LinkedIn Sales Navigator CSV export
- HubSpot contact export CSV
- A plain text file: `FirstName, LastName, Company, Email, Title`

## Feeding in Chef Menu Updates

Drop updated menu PDFs into `07_Templates/` named as:
`ChefName_Menu_YYYY-MM.pdf`
*(e.g., `Sushi_Chef_Menu_2025-06.pdf`)*

The `/daily` and `/draft-email` commands reference the latest menu files when writing Email 3.

---

## Business Reference (Baked Into All Commands)

All commands already know CBC's details — no setup needed:

| Field | Value |
|---|---|
| Phone / Text | (408) 555-0192 |
| Email | hello@culinaryblockcollective.com |
| Website | culinaryblockcollective.com |
| Pricing | $15–$25/person · 100–300 guests |
| Chef lineup | Sichuan · Sushi/Japanese · Mexican Fusion · American · Specialty/Seasonal |
| New client offer | 10% off first order (book by June 30, 2025) |
| Tasting offer | Free chef tasting · 10 slots/month |
| Recurring contracts | Weekly/bi-weekly standing orders with fixed pricing |

---

## Future / Not Yet Available

The following were planned but are not currently implemented:

- **Automatic daily scheduling** — Claude Code does not have a native task scheduler. Commands must be triggered manually.
- **Gmail integration** — Planned: inbound email scanning, auto-flagging prospects, draft-and-approve sending. Not yet connected.
- **Auto-send** — All commands save drafts for your review. Nothing sends automatically. This is by design.

---

*CBC Sales Plugin v0.1.0 | Culinary Block Collective*
