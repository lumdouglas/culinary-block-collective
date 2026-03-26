---
name: cbc-doc-auditor
description: >
  Audits CBC project files for cross-document inconsistencies, pricing drift, stale information,
  and structural gaps. Covers: canonical values, route coverage, SEO consistency, and known drift points.
  Trigger when: running an audit, checking consistency, reviewing docs for accuracy, "is anything
  out of date", "check for inconsistencies", "audit the docs", "what's wrong", "what needs updating",
  "are the prices consistent", before launch milestones, or after any pricing or roster change.
---

# CBC Document Auditor

CBC has 20+ interconnected files: HTML pages, markdown docs, CSVs, and config files. Values like
pricing, chef count, commission rates, and routes appear in multiple places. When one file gets
updated and others don't, clients or chefs see conflicting information.

This skill defines what's canonical and how to check for drift.

---

## Canonical Values (Source of Truth)

These values are settled. If any file disagrees with these, the file is wrong.

| Value | Canonical | Source |
|---|---|---|
| Commission split | 25% CBC / 75% chef | `CLAUDE.md` |
| Client-facing price range | $20–30/box | `CLAUDE.md` |
| Sushi (Tier 1) per-head | $30 | `CLAUDE.md` + `docs/chef-profiles.md` |
| Chinese (Tier 1) per-head | $22 | `CLAUDE.md` |
| Mexican (Tier 1) per-head | $26 | `CLAUDE.md` |
| Sushi (Tier 2) per-head | $48 | `CLAUDE.md` |
| Chinese (Tier 2) per-head | $38 | `CLAUDE.md` |
| Mexican (Tier 2) per-head | $44 | `CLAUDE.md` |
| Sushi min guests (Tier 1) | 50 | `docs/chef-profiles.md` |
| Chinese min guests | 75 | `CLAUDE.md` |
| Mexican min guests | 100 | `CLAUDE.md` |
| Chef count | Dynamic (never state a fixed number without disclaimer) | `CLAUDE.md` |
| Service tiers | Tier 1 (Premium Drop-Off), Tier 2 (Attended Service) | `CLAUDE.md` |
| Domain | culinaryblockcollective.com | `sitemap.xml` |

---

## Known Drift Points

These are places where inconsistencies already exist or are likely to appear:

### 1. CBC_Landing_Page_SEO.html vs index.html
`CBC_Landing_Page_SEO.html` is an older SEO reference artifact. It contains outdated values
(e.g., "$15–25/box", "6 chefs") that conflict with the live `index.html`. If updating the live
site, do NOT use `CBC_Landing_Page_SEO.html` as a source — use `CLAUDE.md` and `docs/menu-pricing.md`.

### 2. Chef Count Across Docs
Multiple docs state different fixed chef counts (5, 6, or 7). The correct answer is that the
roster is dynamic. Any doc that states a fixed number should include a disclaimer or say
"currently X active chefs" with a date.

Files to check: `index.html`, `docs/business-plan.md`, `docs/landing-page.md`, `docs/menu-pricing.md`,
`docs/campaign-plan.md`.

### 3. Sitemap vs Actual Routes
`sitemap.xml` currently lists: `/`, `/calendar`, `/chef-john`, `/chef-unique-cuisine`.

Missing from sitemap: `/programs`, `/chef-partner`.
Not in sitemap (intentionally — noindex): `/admin`, `/chef-onboarding`.

### 4. vercel.json vs HTML Files
`vercel.json` has rewrites for: `/calendar`, `/admin`, `/chef-john`, `/chef-unique-cuisine`, `/chef-partner`.
Missing rewrite: `/programs` (works via `cleanUrls` but should be explicit for consistency).

### 5. OG Image
`index.html` references `https://www.culinaryblockcollective.com/images/og-hero.jpg` for OpenGraph.
This file does not appear in the local `images/` directory — verify it exists on the deployed site.

### 6. Pricing in docs/menu-pricing.md vs CLAUDE.md
These should match exactly. After any pricing change, both must be updated simultaneously.

### 7. PRIORITY.md vs Actual Architecture
`PRIORITY.md` references Supabase auth, mobile order submission, delivery route optimization,
and dark mode — none of which exist in the current codebase (static HTML + localStorage).
This file either describes aspirational features or was copied from another project.

---

## Full Audit Checklist

When running an audit, check every item. Output a markdown table with:
`Check | Status (PASS/FAIL/WARN) | Details`

### Pricing Consistency
- [ ] `index.html` pricing section matches `CLAUDE.md` matrix
- [ ] `docs/menu-pricing.md` matches `CLAUDE.md` matrix
- [ ] `docs/chef-profiles.md` pricing matches `CLAUDE.md` matrix
- [ ] `CBC_Landing_Page_SEO.html` — flag any values that differ from canonical (expected to drift)
- [ ] Commission split stated as 25/75 everywhere it appears
- [ ] No page shows the old "$15–25" range

### Chef Roster Consistency
- [ ] No doc states a fixed chef count without disclaimer
- [ ] All chef profile pages have matching entries in `docs/chef-profiles.md`
- [ ] Chef cards on `index.html` match the active roster
- [ ] Chef names and cuisines are consistent across all mentions

### Route & SEO Coverage
- [ ] Every `.html` file with a public route has a `vercel.json` rewrite
- [ ] Every public route is in `sitemap.xml`
- [ ] Every public page has unique `<title>`, `<meta description>`, and OG tags
- [ ] JSON-LD schemas are valid (check `index.html`, chef pages)
- [ ] `og:image` URL resolves to an actual image
- [ ] No dead internal links

### Operational Doc Accuracy
- [ ] `docs/operations.md` cancellation table — check for [TBD] entries
- [ ] `docs/chef-profiles.md` — check for unfilled bracket fields
- [ ] `docs/sales-action-plan.md` — dates and timelines still relevant
- [ ] `CLAUDE.md` file map matches actual repo contents

### File Hygiene
- [ ] No orphaned HTML files (exist but not linked from nav or any page)
- [ ] `images/` directory — all referenced images exist locally
- [ ] No `.docx` temp files (`~$*.docx`) committed
- [ ] `.gitignore` covers `.env`, `.claude/`, `.vercel/`, `node_modules/`

---

## Audit Output Format

```
# CBC Audit — [Date]

## Summary
- Total checks: [N]
- Passed: [N]
- Failed: [N]
- Warnings: [N]

## Failures (fix now)
| # | Check | Details | Fix |
|---|---|---|---|
| 1 | [check name] | [what's wrong] | [specific action to fix] |

## Warnings (review)
| # | Check | Details | Recommendation |
|---|---|---|---|
| 1 | [check name] | [what's concerning] | [suggested action] |

## Passed
[List or collapse — less important than failures]
```

---

## When to Audit

- After any pricing change
- After adding or removing a chef
- After adding a new HTML page
- After updating `CLAUDE.md`
- Before any launch milestone or client-facing material is sent
- On request ("audit", "check consistency", "what's out of date")
