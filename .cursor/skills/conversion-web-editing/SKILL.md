---
name: conversion-web-editing
description: >
  Rewrites and optimizes web pages, landing pages, and app UI for higher conversion — applying CRO
  principles to copy, layout, CTAs, and React component structure.
  Trigger this skill whenever the user mentions: landing page, homepage, hero section, CTA, "above the fold",
  conversion rate, bounce rate, "make this page convert better", "rewrite this copy", "improve the headline",
  "what should my CTA say", "why aren't people signing up", "optimize this page", "A/B test",
  "value proposition", pricing page, onboarding flow, signup flow, or asks to "make this better"
  about any customer-facing web page or React component.
  Also trigger proactively when Doug shares a URL or pastes page copy and hasn't asked for CRO feedback —
  surface conversion gaps before he asks.
---

# Conversion-Focused Web Editing

Doug's customer-facing surfaces: CBC landing page, Unique landing/demo, Signal Apparel website,
culinaryblock.com. Stack: React + Tailwind + Vercel. Edits should be production-ready JSX unless
otherwise specified. Copy rewrites should match Doug's voice: direct, founder-led, no corporate fluff.

---

## Rule Zero: Data Layer Before Editing

**Never edit blind.** Before changing a single pixel, you must have:
- [ ] Session recordings (PostHog, Hotjar, or FullStory) — watch 10+ real sessions
- [ ] Heatmaps — where do people click, scroll to, and ignore?
- [ ] Analytics funnel — which step has the biggest drop-off?
- [ ] Exit-intent survey — "What almost stopped you from signing up?" (Tally, Typeform)

If this data doesn't exist yet, the first recommendation is always to instrument it and wait 1–2 weeks before editing. Gut-feel edits without data are just expensive opinions.

---

## CRO First Principles

1. **One page, one goal.** Every element should serve the primary CTA. Remove anything that doesn't.
2. **Clarity beats cleverness.** Visitors should understand the offer in 5 seconds. Test by squinting.
3. **Specificity builds trust.** "200+ orders placed" beats "trusted by teams everywhere."
4. **CTAs are verbs.** "Start your trial" beats "Get started." "Book a chef" beats "Learn more."
5. **Social proof near friction.** Place testimonials, logos, or stats adjacent to signup forms.
6. **Mobile-first scrolling.** 60%+ of clicks on landing pages come from mobile. Design for thumb reach.
7. **Speed is conversion.** Every extra second of load time = 7–20% conversion drop. Hard targets: LCP < 2.5s, CLS < 0.1 (Core Web Vitals). Flag any heavy image, unoptimized font, or blocking script.
8. **Data before opinions.** If there's no recording or funnel data, the first fix is instrumentation.

---

## Page Audit Framework

When given a URL or page code, assess in this order:

### 1. Above-the-Fold Audit
- [ ] Is the headline benefit-oriented (not feature-oriented)?
- [ ] Is there a sub-headline that adds specificity?
- [ ] Is the primary CTA visible without scrolling on mobile?
- [ ] Is there a supporting trust signal (logo, stat, or quote) near the CTA?
- [ ] Is the visual hierarchy clear (headline → sub → CTA)?

### 2. Copy Audit
- [ ] Does every headline answer "what do I get?"
- [ ] Are there any jargon-heavy or passive phrases?
- [ ] Is there a clear value prop differentiated from competitors?
- [ ] Does the body copy speak to the reader's pain, not the product's features?

### 3. CTA Audit
- [ ] Is there exactly one primary CTA per section?
- [ ] Is the CTA button copy action-oriented?
- [ ] Does the CTA repeat at the bottom of the page?
- [ ] Is there a low-friction secondary CTA for non-ready visitors? ("See examples" vs "Book now")

### 4. Trust Audit
- [ ] Are there real client names, logos, or photos?
- [ ] Are there specific metrics (not vague claims)?
- [ ] Is there an FAQ addressing the top 3 objections?

### 5. Friction Audit
- [ ] How many fields does the signup/contact form have? (Fewer = better)
- [ ] Is there any unnecessary navigation that leaks visitors away?
- [ ] Are there any dead links or broken states?

---

## Copy Rewrite Templates

### Copy Framework: Problem → Agitation → Solution → Proof → Risk Reversal → CTA

Every page section, email, and CTA sequence should follow this arc — not necessarily in one block, but across the full page scroll:

```
Problem:        "Managing team catering from 3 different apps is a mess."
Agitation:      "You spend 2 hours per event just coordinating. And something always goes wrong."
Solution:       "CBC gives you one chef, one contact, and zero logistics overhead."
Proof:          "40+ Bay Area teams. 200+ orders. 4.9★ average."
Risk Reversal:  "No contracts. Pay per order. Cancel any time."
CTA:            "Browse our chefs →"
```

When rewriting page copy, always check: does this section address the next step in the PAS arc, or is it out of sequence?

### Hero Headline Formula
```
[Do the thing they want] + [without the thing they hate]

Examples:
  "Corporate catering that your team actually looks forward to"
  "Sushi prep logistics — without the spreadsheets"
  "Wear Bitcoin. No phone needed."
```

### Sub-headline Formula
```
[Who it's for] + [specific mechanism] + [proof or differentiator]

Examples:
  "CBC connects Bay Area office teams with vetted chef-entrepreneurs.
   Order once, and your chef remembers everything."
```

### Feature → Benefit Conversion
| Feature (don't say) | Benefit (say this) |
|---|---|
| "Commission-based model" | "Only pay when an order ships" |
| "Curated chef roster" | "Every chef is hand-selected — no random pickups" |
| "Real-time task tracking" | "Your prep team always knows what's next" |
| "Discord integration" | "Your crew gets updates in the tools they already use" |

---

## React Component Patterns for CRO

### High-Converting Hero Section
```jsx
export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 max-w-4xl mx-auto">
      {/* Trust badge — sets frame before headline */}
      <div className="text-sm text-emerald-600 font-medium mb-4">
        Used by 40+ Bay Area teams
      </div>

      {/* Headline: benefit, not feature */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Corporate catering your team<br />
        <span className="text-emerald-500">actually looks forward to</span>
      </h1>

      {/* Sub-headline: specificity */}
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Culinary Block Collective connects South Bay companies with vetted
        chef-entrepreneurs — direct relationships, no middleman markup.
      </p>

      {/* CTA group: primary + secondary */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition">
          Browse our chefs →
        </button>
        <button className="border border-gray-300 px-8 py-4 rounded-lg text-lg text-gray-700 hover:border-gray-500 transition">
          See how it works
        </button>
      </div>

      {/* Social proof — adjacent to CTA, not at bottom */}
      <p className="text-sm text-gray-500 mt-6">
        "Hands down the best team lunch we've done." — Office Manager, Rippling
      </p>
    </section>
  )
}
```

### High-Converting Pricing Section
```jsx
// Always lead with the middle tier (anchoring)
// Show annual savings prominently
// Include one-line objection handler under CTA ("Cancel anytime", "No setup fees")
```

### Form Conversion Rules
```jsx
// 3 fields max for top-of-funnel (name, email, company)
// Inline validation, not submit-time errors
// CTA button should reflect the value: "Get my chef roster" not "Submit"
// Add micro-copy under submit: "We'll reach out within 1 business day. No spam."
```

---

## A/B Testing Infrastructure

**Google Optimize is dead (shut down Sept 2023).** Use instead:
- **VWO** or **Optimizely** — full-featured, statistical significance built in
- **Vercel Edge Config + PostHog feature flags** — lightweight, works in React with no extra tool
- **Minimum viable**: PostHog experiments (free tier) + a significance calculator

**Statistical significance requirement**: Never call a winner until you hit **95% confidence** and at least **100 conversions per variant**. Calling tests early is the #1 CRO mistake.

### Test Prioritization — ICE Score

When proposing tests, rank by **ICE**: Impact × Confidence × Ease (1–10 each). Always suggest the simplest test first — copy change before layout, layout before redesign.

**High-ICE quick wins to always check:**
1. Headline copy (5 words can 2x CTR)
2. CTA button copy + color
3. Number of form fields
4. Trust signal placement (above vs. below CTA)
5. Hero image vs. no image vs. video

### Iterative Deployment Process (no "vibes" allowed)
```
Hypothesis → Build variant → Run test (95% sig + 100 conv/variant min)
→ Declare winner → Roll out → Document the learning
```

"I just feel like this looks better" is not a hypothesis. Every test must have a documented reason: "We believe [change] will increase [metric] because [evidence/theory]."

---

## Output Standards

- Code edits: output full component or section, not snippets, unless diff is < 5 lines
- Copy rewrites: always show Before → After side by side
- Audits: lead with the single highest-leverage change, then list the rest
- A/B proposals: always include a hypothesis ("We believe X will increase Y because Z")
- Never recommend a redesign when a copy change will do
- Flag any change that requires backend work — keep scope honest
