---
name: cbc-site-editor
description: >
  Edits and maintains CBC's static HTML website while preserving design system consistency.
  Covers: design tokens, typography, component patterns, inline CSS/JS constraints, Vercel routing,
  sitemap, JSON-LD schemas, and responsive behavior.
  Trigger when: editing any .html file, creating a new page, changing site navigation, updating
  meta/SEO tags, adding a chef profile page, fixing mobile layout, "update the site", "add a page",
  "fix the nav", "edit the hero", "update the footer", or any question about site structure or design.
---

# CBC Site Editor

CBC's website is a static HTML site deployed on Vercel. No frameworks, no build step, no shared
stylesheet. Every page has its own inline `<style>` and `<script>` blocks. Consistency depends entirely
on matching the design system documented below.

Reference file: `docs/design.md` (full design system). This skill contains the operational subset
needed for editing.

---

## Architecture Constraints

- **No external CSS or JS files.** All styles go in a `<style>` tag in `<head>`. All scripts go in
  `<script>` tags before `</body>`. This is intentional — do not "improve" it by extracting files.
- **No frameworks.** Vanilla HTML, CSS, JS. No React, no Tailwind, no jQuery.
- **No build step.** Files are served as-is by Vercel. What you write is what ships.
- **Google Fonts loaded via `<link>` in `<head>`:** Cormorant Garamond (400,500,600,700,italic) + Inter (400,500,600,700).

---

## Color Tokens

Every page must declare these CSS custom properties in `:root`:

```css
:root {
  --green: #2D6A4F;
  --dgreen: #1B4332;
  --lgreen: #EDF5EE;
  --lgreen2: #F2F9F3;
  --gold: #B8960C;
  --gold-light: #ECD97A;
  --lgold: #FAF4E1;
  --cream: #FAFAF8;
  --cream2: #F4F1EB;
  --border: #E5E0D8;
  --text: #1A1814;
  --muted: #6B6560;
  --white: #FFFFFF;
  --shadow: 0 2px 20px rgba(0,0,0,0.07);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.11);
  --radius: 8px;
}
```

Never use raw hex values in properties — always reference the token. Chef profile pages may add
accent vars (e.g. `--mexican`, `--sushi`) but must still include the full base set.

---

## Typography Rules

- **Headings:** Always Cormorant Garamond. Never Inter for headings.
- **Body / UI:** Always Inter.
- **Hero h1:** Cormorant Garamond, `clamp(3rem, 7vw, 4.8rem)`, weight 600, italic. Gold `<em>` highlights.
- **Section title:** Cormorant Garamond, `clamp(2rem, 4.5vw, 3.2rem)`, weight 600, not italic, `line-height: 1.12`.
- **Section label:** Inter, 0.72rem, weight 700, uppercase, `letter-spacing: .16em`, green on light-green bg.
- **Body:** Inter, 0.875–1.05rem, weight 400–500, `line-height: 1.6`.

---

## Component Patterns

### Navigation (sticky)
- White background, 68px height, `position: sticky; top: 0; z-index: 100`
- Logo: Cormorant Garamond, `--dgreen` with `--gold` accent on "Collective"
- Links: Inter, `--muted`, hover shows `--lgreen` background
- Phone CTA: dark green pill, always visible on desktop
- Mobile (<=860px): hamburger → drawer, phone collapses to icon-only

### Section Structure
Every section follows: section-label (uppercase tag) → section-title (display font) → section-subtitle (muted body).

Background alternates: `--cream` (default), `--cream2` (alt), `--dgreen` (dark), photo overlay (hero/final CTA).

### Buttons
- `.btn-primary`: bg `--gold`, text `--dgreen`, weight 700, 13px 26px padding, hover lifts 1px
- `.btn-outline`: 1.5px solid `--green`, hover fills green with white text
- `.btn-outline-gold`: 1.5px solid `--gold`, hover fills gold with dark text

### Cards
- White bg, 1px solid `--border`, `--radius`, 22–36px padding
- Hover: `translateY(-3px)` + shadow transition
- Chef cards: 200px image height, `object-fit: cover`, cuisine tag, price footer

### Sticky Mobile CTA
- Fixed bottom bar, `--dgreen` bg, z-index 99, hidden above 860px
- Two equal buttons: "Call to Book" (white/dgreen) + "Get a Quote" (gold/dgreen)
- Footer needs `padding-bottom: 72px` when this is visible

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 860px | Full desktop nav, multi-column grids, no sticky CTA |
| <= 860px | Hamburger nav, drawer, sticky bottom CTA |
| <= 600px | Form rows stack, single-column pricing |
| <= 480px | Hero trust items wrap, reduced padding |

---

## Vercel Routing

`vercel.json` has `cleanUrls: true` + explicit rewrites. When adding a new page:

1. Create `[page-name].html` in the repo root
2. Add a rewrite in `vercel.json`: `{ "source": "/[page-name]", "destination": "/[page-name].html" }`
3. Add the URL to `sitemap.xml`
4. Add a link in the nav if it's a public page

Current routes: `/` (index), `/calendar`, `/admin`, `/chef-john`, `/chef-unique-cuisine`, `/chef-partner`, `/programs`.

Known gap: `sitemap.xml` is missing `/programs` and `/chef-partner`. `vercel.json` is missing a rewrite for `/programs` (works via `cleanUrls` but should be explicit).

---

## SEO / Schema Checklist

Every public page must have:
- `<title>` — unique, under 60 chars, includes "Culinary Block Collective"
- `<meta name="description">` — unique, 140–160 chars, includes key terms
- `<meta property="og:title/description/image">` — OG hero image is `images/og-hero.jpg`
- `<link rel="canonical">` — full URL

`index.html` carries JSON-LD schemas: `FoodEstablishment` + `FAQPage`. Chef profile pages should
have `Person` or `LocalBusiness` schema. New pages should include at least `WebPage` schema.

---

## Adding a New Chef Profile Page

1. Copy an existing profile page (`chef-john.html` or `chef-unique-cuisine.html`) as template
2. Update the accent color var (e.g. `--newcuisine`) in `:root`
3. Replace all chef-specific content: name, cuisine, bio, menu, photos, pricing
4. Add rewrite to `vercel.json`
5. Add URL to `sitemap.xml`
6. Add chef card to `index.html` chef grid
7. Update `docs/chef-profiles.md` with new chef entry

---

## Files That Must Stay in Sync

Any change to pricing, chef roster, or page structure must be reflected across:
- `index.html` (chef cards, pricing section, FAQ)
- `docs/menu-pricing.md` (customer-facing pricing reference)
- `docs/chef-profiles.md` (chef roster)
- `sitemap.xml` (all public routes)
- `vercel.json` (all routes that need rewrites)
- `CLAUDE.md` (pricing tables, file map)
