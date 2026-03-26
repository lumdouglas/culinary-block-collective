---
name: analytics-tracking
description: >
  Implements, audits, and interprets product analytics across web apps and catering platforms.
  Covers: event schema design, Supabase query analytics, GA4 / PostHog / Mixpanel setup,
  funnel analysis, retention metrics, and actionable insight extraction from data.
  Trigger this skill whenever the user mentions: analytics, tracking, events, funnels, conversion rates,
  retention, DAU/MAU, user behavior, drop-off, heatmaps, PostHog, GA4, Mixpanel, Amplitude,
  Supabase queries for user data, "how many users", "why are people dropping off", "track when a user",
  "add analytics to", "measure X", "what's the conversion rate", "set up tracking", "data layer",
  or any question about understanding how users behave in one of Doug's apps.
  Also trigger when Doug adds a new feature and hasn't yet thought about what to measure.
---

# Analytics Tracking

Doug's apps: CBC (catering platform), Unique (sushi logistics), Signal Apparel (BTC display wearable).
Primary stack: React + Supabase + Vercel. Analytics candidates: PostHog (recommended), GA4, or raw
Supabase event tables. All implementations should assume React frontend + Supabase backend unless stated.

---

## Recommended Stack by Product

| Product | Recommended Tool | Rationale |
|---|---|---|
| CBC / Unique web app | **PostHog** | Product analytics + session recording + funnels, open-source option, Supabase-friendly |
| culinaryblock.com marketing | **GA4** | SEO + acquisition tracking |
| API / backend events | **Supabase custom events table** | Full control, no third-party for sensitive ops data |
| Signal Apparel landing page | **GA4 + PostHog** | Acquisition (GA4) + product behavior (PostHog) |

### Cookieless / Ad-Blocker Resilience
GA4 client-side alone is dying — ad blockers and iOS 14+ suppress 20–40% of events. Mitigation:

1. **PostHog self-hosted or EU cloud** — survives most blockers since it's your own domain
2. **Supabase server-side events** — capture all business-critical events (orders, payments) server-side, not in the browser. These are ground truth.
3. **GA4 + Google Tag Manager via server-side container** — proxy via your Vercel domain to bypass ad blockers for marketing attribution

Rule: Client-side analytics = behavioral signals. Server-side (Supabase) = source of truth for revenue events.

---

## UTM Structure + Attribution Model

### UTM Naming Convention (lock this in and never deviate)
```
utm_source    = traffic origin (linkedin, email, google, referral)
utm_medium    = channel type (social, outbound, cpc, organic)
utm_campaign  = campaign name (cbc-q2-chef-launch, signal-apparel-btc)
utm_content   = variant (hero-cta, footer-link, video-dm)
utm_term      = keyword (for paid only)
```

Example for a CBC cold email campaign:
```
https://culinaryblock.com/chefs?utm_source=email&utm_medium=outbound&utm_campaign=cbc-corp-spring&utm_content=touch1-subject-a
```

### Attribution Model — choose one and stick to it
For CBC at current stage: **Last-Touch Attribution**. Simple, actionable, accurate enough for a direct outbound motion where the final click before conversion is the most relevant signal.

Switch to **Linear Attribution** when you have 3+ channels running simultaneously and need to credit assist touches.

Never mix models in the same report — one lie is worse than no data.

### UTM Capture in Supabase
```javascript
// On landing, capture UTMs to localStorage
const params = new URLSearchParams(window.location.search)
const utmFields = ['utm_source','utm_medium','utm_campaign','utm_content']
utmFields.forEach(key => {
  if (params.get(key)) localStorage.setItem(key, params.get(key))
})

// On conversion event, attach UTMs to the record
const utmData = Object.fromEntries(
  utmFields.map(k => [k, localStorage.getItem(k) || null])
)
await supabase.from('orders').insert({ ...orderData, ...utmData })
```

---

## User Identity + Deduplication

**One person = one user ID** across web, CRM, email tool, and ad platforms. Duplicate data = lies.

### Identity Resolution Rules
```
Anonymous visitor  →  [posthog anonymous ID]
                         ↓ (on signup/login)
Authenticated user →  supabase auth.users.id  (this is the canonical ID)
                         ↓ (alias in PostHog)
posthog.identify(supabase_user_id)  // links anonymous → known
```

### Deduplication Checklist
- [ ] PostHog `identify()` called immediately after Supabase login
- [ ] All CRM contacts use email as the dedupe key
- [ ] Orders/quotes reference `user_id` (UUID), not email
- [ ] UTMs stored on the order record, not just the session
- [ ] One analytics_events table is the server-side source of truth — no duplicating events in both PostHog and Supabase for the same action

---

## Privacy & Consent (GDPR/CCPA)

Required from Day 1 — one fine or lost enterprise client trust kills the system.

### Minimum viable compliance
1. **Cookie consent banner** — use `react-cookie-consent` or PostHog's built-in consent mode. Don't load tracking until consent is granted.
2. **Privacy Policy** — must cover: what you collect, why, how long you keep it, and how to delete it. Use a generator (Termly, Iubenda) for now.
3. **Data retention policy** — analytics events: 12 months rolling. Order/user data: retain per your legal obligations.
4. **Right to deletion** — Supabase RLS + a manual deletion script. Enterprise clients will ask.

```javascript
// PostHog consent mode — don't track until user accepts
posthog.init('KEY', {
  opt_out_capturing_by_default: true,   // off until consent
  persistence: 'localStorage'
})

// On cookie banner accept:
posthog.opt_in_capturing()
```

---

## Event Schema Design

### Naming Convention
```
[noun]_[past_tense_verb]

Examples:
  chef_profile_viewed
  order_submitted
  quote_requested
  delivery_confirmed
  btc_price_refreshed
  task_checked_off
```

### Standard Event Properties (always include)
```json
{
  "user_id": "uuid",
  "session_id": "uuid",
  "timestamp": "ISO8601",
  "platform": "web | mobile | pwa",
  "role": "chef | client | admin"   // for multi-role apps
}
```

---

## PostHog Setup (React + Supabase)

### Install
```bash
npm install posthog-js
```

### Initialize (in main.jsx or App.jsx)
```javascript
import posthog from 'posthog-js'

posthog.init('YOUR_PROJECT_API_KEY', {
  api_host: 'https://app.posthog.com',
  autocapture: false,          // manual control is better
  capture_pageview: true,
  persistence: 'localStorage'
})
```

### Identify after Supabase auth
```javascript
const { data: { user } } = await supabase.auth.getUser()
if (user) {
  posthog.identify(user.id, {
    email: user.email,
    role: user.user_metadata?.role,
    created_at: user.created_at
  })
}
```

### Capture events
```javascript
posthog.capture('order_submitted', {
  chef_id: chef.id,
  cuisine_type: chef.cuisine,
  headcount: order.headcount,
  total_value: order.total
})
```

---

## Supabase: Raw Event Logging

For backend events (order lifecycle, chef actions, delivery status):

```sql
create table analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  user_id uuid references auth.users(id),
  properties jsonb,
  created_at timestamptz default now()
);

create index on analytics_events(event_name);
create index on analytics_events(user_id);
create index on analytics_events(created_at);
```

Insert from edge function or server action:
```javascript
await supabase.from('analytics_events').insert({
  event_name: 'order_submitted',
  user_id: user.id,
  properties: { chef_id, headcount, total_value }
})
```

Query for funnel analysis:
```sql
-- Conversion: quote_requested → order_submitted (last 30 days)
with requests as (
  select user_id, min(created_at) as requested_at
  from analytics_events
  where event_name = 'quote_requested'
    and created_at > now() - interval '30 days'
  group by user_id
),
orders as (
  select user_id, min(created_at) as ordered_at
  from analytics_events
  where event_name = 'order_submitted'
  group by user_id
)
select
  count(r.user_id) as total_requests,
  count(o.user_id) as converted,
  round(count(o.user_id)::numeric / count(r.user_id) * 100, 1) as conversion_pct
from requests r
left join orders o on r.user_id = o.user_id and o.ordered_at > r.requested_at;
```

---

## Key Metrics by Product

### CBC (Catering Platform)
| Metric | Definition |
|---|---|
| Quote-to-Order CVR | `orders / quote_requests` |
| Chef Activation Rate | Chefs with ≥1 completed order / total onboarded chefs |
| Client Retention | Clients with ≥2 orders in 90 days |
| Avg Order Value | Sum(order totals) / count(orders) |
| Time-to-Quote | Median minutes from `quote_requested` → chef response |

### Unique (Sushi Logistics)
| Metric | Definition |
|---|---|
| Task Completion Rate | Tasks checked off / total tasks per order |
| Prep Accuracy | Orders with zero post-delivery edits / total orders |
| Discord Sync Success Rate | Successful webhook deliveries / attempts |

---

## Funnel Analysis Template

When asked to analyze a funnel, output this structure:

```
FUNNEL: [Name]
Period: [date range]

Step 1: [Event Name]       N users    100%
Step 2: [Event Name]       N users    X% (drop: Y%)
Step 3: [Event Name]       N users    X% (drop: Y%)
...

Biggest drop: Step X → Step Y (Z% lost)
Hypothesis: [1-sentence reason]
Recommended test: [1 specific intervention]
```

---

## Analytics Audit Checklist

When asked to audit analytics on an existing app:

- [ ] Are page views being tracked?
- [ ] Is user identity captured post-login?
- [ ] Are key conversion events instrumented (signup, order, payment)?
- [ ] Do events have consistent naming convention?
- [ ] Are role/plan properties attached to identify calls?
- [ ] Is there a way to query funnel data from Supabase?
- [ ] Are error events tracked (failed payments, failed submissions)?
- [ ] Is there a retention dashboard or query?

---

## Output Standards

- When writing tracking code: always show full event name + properties object
- When writing SQL: include comments explaining the logic
- When interpreting data: lead with the metric, then the hypothesis, then the recommended action
- Never present data without a "so what" — always tie back to a product decision
