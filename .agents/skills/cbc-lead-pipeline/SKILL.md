---
name: cbc-lead-pipeline
description: >
  Works with CBC's sales data: LinkedIn lead CSVs, HubSpot pipeline exports, and the CBC_Sales folder
  structure. Covers: reading and filtering leads, identifying stale deals, prepping outreach lists,
  adding new records, and maintaining folder conventions.
  Trigger when: working with leads, pipeline data, CRM exports, prospect lists, CSV files in CBC_Sales,
  "show me the pipeline", "who's stale", "find leads in [industry]", "add a lead", "export prospects",
  "how many leads", "pipeline summary", "next actions", or any question about lead/deal data.
---

# CBC Lead & Pipeline Operations

CBC's sales data lives in two CSV files inside `CBC_Sales/`. There is no live CRM API — HubSpot free
tier is used for entry, then exported to CSV for agent-readable operations. All data work happens
against these files.

---

## File Locations

| File | Path | Purpose |
|---|---|---|
| LinkedIn leads | `CBC_Sales/leads/LinkedIn_Leads_CBC.csv` | Raw prospect list from LinkedIn Sales Navigator |
| HubSpot pipeline | `CBC_Sales/pipeline/HubSpot_Pipeline_CBC.csv` | Active deals with stage tracking |

---

## LinkedIn CSV Schema

```
First Name, Last Name, Title, Company, Company Size, Industry, Location,
LinkedIn URL, Email Address (verify), Connection Degree, Connected On,
Tags, Profile Notes, Saved on
```

- **Email Address (verify):** Treat as unverified until confirmed — flag in outreach prep
- **Tags:** Used for segmentation (e.g., "Bay Area Catering Target")
- **Profile Notes:** Contains ICP qualification notes
- **Connection Degree:** 1st = connected, 2nd = need connection request, 3rd = cold

---

## HubSpot Pipeline CSV Schema

```
Record ID, First Name, Last Name, Email, Phone Number, Job Title,
Company Name, Company Domain, Company Size, Industry, City, State/Region,
Country, LinkedIn Profile URL, Deal Stage, Lead Source, Create Date,
Last Activity Date, Email Sequence Number, Notes, Priority
```

- **Record ID format:** `CBC-NNNN` (zero-padded 4-digit, sequential)
- **Deal Stage values:** `New Lead`, `Contacted`, `Replied`, `Demo/Call booked`, `Proposal sent`, `Closed-Won`, `Closed-Lost`
- **Email Sequence Number:** Which touch in the outreach sequence (0 = not started, 1–5 = touch number)
- **Priority values:** `High`, `Medium`, `Normal`, `Low`
- **Lead Source values:** `Website`, `LinkedIn`, `Referral`, `Event`

---

## Deal Stage Definitions

| Stage | Meaning | Exit Criteria |
|---|---|---|
| New Lead | Identified, ICP-qualified, not yet contacted | Has email or LinkedIn URL |
| Contacted | At least one outreach touch sent | Touch logged with date + channel |
| Replied | Prospect responded positively or asked for info | Not just "unsubscribe" or auto-reply |
| Demo/Call booked | Meeting scheduled | Calendar invite confirmed |
| Proposal sent | Quote or menu PDF delivered | Follow-up date set |
| Closed-Won | First order placed or PO received | Revenue recorded |
| Closed-Lost | Dead — document why | Reason logged in Notes |

---

## Stale Deal Rules

A deal is **stale** when:

| Stage | Stale After |
|---|---|
| New Lead | 14 days with no first touch |
| Contacted | 10 days with no reply and no follow-up scheduled |
| Replied | 7 days with no next action taken |
| Demo/Call booked | 5 days past the meeting with no proposal |
| Proposal sent | 14 days with no response |

To find stale deals: compare `Last Activity Date` against today using these thresholds. Output a
markdown table sorted by staleness (most overdue first) with columns:
`Record ID | Name | Company | Stage | Last Activity | Days Stale | Suggested Action`

---

## Folder Structure and Conventions

```
CBC_Sales/
├── leads/             ← LinkedIn exports. Never delete rows — archive stale leads.
├── pipeline/          ← HubSpot exports. Source of truth for deal stages.
├── outreach/          ← Ready-to-send email drafts. Naming: YYYY-MM-DD_FirstName_LastName_TouchN.docx
├── quotes/            ← Quote PDFs and vendor agreements
├── content/           ← LinkedIn posts, Instagram captions
├── reports/           ← Weekly scorecards
├── templates/         ← Master email templates, menus, one-pager
├── completed/         ← Sent emails, closed deals, archive
└── setup/             ← cbc-sales.plugin + CBC_Cowork_Shortcuts_Setup.md
```

Each subfolder has a `README.txt` with naming conventions. Follow them exactly.

---

## Common Operations

### Pipeline Summary
When asked for a pipeline summary, output:
1. Total leads by stage (table)
2. Stale deals (table with suggested actions)
3. Top 3 priority actions for today
4. Leads by industry breakdown

### Outreach List Prep
When prepping an outreach list:
1. Filter LinkedIn CSV by: Location contains "San Jose" OR "San Francisco" OR "Bay Area"
2. Cross-reference against HubSpot to exclude already-contacted leads
3. Sort by Company Size descending (larger companies = higher value)
4. Flag any records missing email addresses
5. Output as a markdown table with: Name, Title, Company, Size, Email, Status

### Adding a New Lead
When adding a lead to the pipeline:
1. Assign next sequential `CBC-NNNN` Record ID
2. Set Deal Stage to `New Lead`
3. Set Create Date to today
4. Set Priority based on company size: 200+ = High, 100–200 = Medium, <100 = Normal
5. Add ICP qualification note

---

## ICP Quick Reference

> When classifying or prioritizing a prospect, also consult:
> - `docs/om-identification-field-guide.md` — classify the OM into one of 5 subtypes; add subtype to Profile Notes
> - `docs/cbc-personas-deep-dossier.md` — tone and pain-point reference for Sarah (OM) and Marcus (HR)

**Primary buyer:** Office managers, executive assistants, HR/Culture leads, facilities managers

**Company fit signals:**
- Bay Area / South Bay / SF location
- 100–5,000 employees (sweet spot: 200–500)
- Tech, SaaS, financial services, or law firm
- Has physical office (not fully remote)
- History of catering events or team lunches

**Disqualifiers:**
- Fully remote company (no office to cater)
- Under 50 employees (below minimums)
- Outside California
