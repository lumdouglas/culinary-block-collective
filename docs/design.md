# Culinary Block Collective — Design System

Reference for maintaining visual consistency across all CBC pages and materials.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--green` | `#2D6A4F` | Primary brand green — links, accents, section labels, icons |
| `--dgreen` | `#1B4332` | Dark green — headings, nav background accents, dark sections |
| `--lgreen` | `#EDF5EE` | Light green tint — section label backgrounds, callout boxes |
| `--lgreen2` | `#F2F9F3` | Lighter green — hover states (nav links) |
| `--gold` | `#B8960C` | Primary accent — CTA buttons, featured card borders, highlights |
| `--gold-light` | `#ECD97A` | Light gold — hero highlights, step numbers, badge text |
| `--lgold` | `#FAF4E1` | Gold tint — featured pricing card background |
| `--cream` | `#FAFAF8` | Page background |
| `--cream2` | `#F4F1EB` | Alternate section background |
| `--border` | `#E5E0D8` | Card borders, dividers, form inputs |
| `--text` | `#1A1814` | Body text |
| `--muted` | `#6B6560` | Secondary text, descriptions, metadata |
| `--white` | `#FFFFFF` | Card backgrounds, nav background |

### Color Hierarchy

- **Green** family = trust, professionalism, brand identity
- **Gold** family = premium, action, emphasis
- **Cream** family = warmth, approachability, backgrounds
- Dark-on-light for body content; light-on-dark for hero and CTA sections

---

## Typography

### Font Stack

| Role | Family | Fallbacks |
|---|---|---|
| Display / Headings | `Cormorant Garamond` | Georgia, serif |
| Body / UI | `Inter` | system-ui, sans-serif |

Loaded from Google Fonts: weights 400–700 for both families, plus italic for Cormorant Garamond.

### Type Scale

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero h1 | Cormorant Garamond | `clamp(3rem, 7vw, 4.8rem)` | 600, italic | Gold `<em>` highlights |
| Section title | Cormorant Garamond | `clamp(2rem, 4.5vw, 3.2rem)` | 600 | Dark green, tight leading (1.12) |
| Card h3 | Cormorant Garamond | 1.1–1.3rem | 600 | Dark green |
| Section label | Inter | 0.72rem | 700 | Uppercase, letter-spacing .16em, green on light green |
| Body text | Inter | 0.875–1.05rem | 400–500 | Line-height 1.6–1.7 |
| Small / meta | Inter | 0.72–0.82rem | 500–600 | Muted color, used for tags, dates, roles |

### Style Rules

- Headings are **always** Cormorant Garamond — never use Inter for headings
- Hero headline uses `font-style: italic`; section titles do not
- Uppercase text gets wide letter-spacing (`.08em–.16em`)
- Body line-height: 1.6 default, 1.7 for longer-form text

---

## Spacing & Layout

| Token / Pattern | Value |
|---|---|
| Container max-width | 1120px |
| Container padding | 0 32px |
| Section padding | 96px 32px (vertical, horizontal) |
| Card gap (grids) | 20–24px |
| Grid minimum column | 220–280px (`minmax()` with `auto-fill`) |
| Border radius (`--radius`) | 8px |
| Button border-radius | 6px |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow` | `0 2px 20px rgba(0,0,0,0.07)` | Card hover, form containers |
| `--shadow-lg` | `0 8px 48px rgba(0,0,0,0.11)` | Card lift on hover |
| Nav shadow | `0 1px 12px rgba(0,0,0,0.06)` | Sticky nav bar |
| Hero CTA shadow | `0 4px 20px rgba(0,0,0,0.2)` | Primary hero button |

---

## Buttons

### Primary (`.btn-primary`)
- Background: gold (`--gold`), text: dark green (`--dgreen`)
- Font-weight: 700, padding: 13px 26px
- Hover: slight lift (`translateY(-1px)`), darker gold (`#a67e09`)

### Outline Green (`.btn-outline`)
- Border: 1.5px solid green, text: green
- Hover: filled green background, white text

### Outline Gold (`.btn-outline-gold`)
- Border: 1.5px solid gold, text: gold
- Hover: filled gold background, dark green text

### Hero Phone (`.btn-hero-phone`)
- White background, dark green text, bold
- Large padding (16px 32px), shadow
- Hover: stronger lift and shadow

### Hero Text (`.btn-hero-text`)
- Transparent, white border (45% opacity), white text
- Hover: border solidifies, subtle background tint

### Nav Phone (`.nav-phone`)
- Dark green background, white text
- Compact (10px 20px), rounded

### General Button Rules
- All buttons use `inline-flex` with `align-items: center` and `gap: 8px` for icon support
- All buttons have `transition` on transforms and backgrounds (~0.15s)
- No button uses `text-decoration: underline`

---

## Cards

All cards follow a consistent pattern:

- Background: white
- Border: 1px solid `--border`
- Border-radius: `--radius` (8px)
- Hover: lift (`translateY(-3px to -4px)`) + shadow transition
- Internal padding: 22–36px

### Variants

| Card Type | Key Differences |
|---|---|
| Chef card | Has image (200px height, `object-fit: cover`), cuisine tag, footer with price |
| Pricing card | No image, large price display, feature list with check marks |
| Pricing (featured) | Gold border, gold-tint background, "Most Popular" tag |
| Value card | Icon top, no image, compact |
| Testimonial card | Italic quote text, star rating, author/role footer |

---

## Navigation

- Sticky, white background, 68px height
- Logo: Cormorant Garamond, dark green with gold accent on "Collective"
- Links: Inter, muted color, hover shows light green background
- Phone CTA: dark green pill, always visible on desktop
- Mobile (<=860px): hamburger menu, phone CTA collapses to icon-only, full-width drawer

---

## Section Patterns

| Pattern | Background | Text Color |
|---|---|---|
| Default section | `--cream` | Dark text |
| Alternate section (`.section-alt`) | `--cream2` | Dark text |
| Dark section (`.section-dark`) | `--dgreen` | White / light text |
| Hero / Final CTA | Dark photo overlay | White text, gold highlights |
| Proof strip | `--dgreen` | White text, gold highlights |
| Promo banner | Dark gradient (`#1B4332` → `#0D2118`) | White text |

Each section starts with: section label (uppercase tag) → section title (display font) → section subtitle (muted body text).

---

## Sticky Mobile CTA Bar

A fixed bottom bar that appears on smaller viewports (<=860px) with two side-by-side action buttons.

- **Container (`.sticky-cta`):** `position: fixed`, bottom: 0, full-width, dark green background, z-index 99
- **Shadow:** `0 -2px 16px rgba(0,0,0,0.2)` (upward shadow)
- **Inner (`.sticky-cta-inner`):** flex row, 10px gap, max-width 500px, centered
- **"Call to Book" button:** white background, dark green text, bold
- **"Get a Quote" button:** gold background, dark green text, bold
- Both buttons: flex: 1 (equal width), 12px 8px padding, 6px radius, 0.85rem font
- **Visibility:** hidden by default, shown via `@media (max-width: 860px)`
- Footer gets `padding-bottom: 72px` when sticky CTA is visible to prevent overlap

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 860px | Full desktop nav with links, multi-column grids, no sticky CTA |
| <= 860px | Hamburger nav, drawer menu, phone CTA icon-only, sticky bottom CTA bar appears |
| <= 600px | Form rows stack vertically, single-column pricing |
| <= 480px | Hero trust items wrap, reduced padding |

Font sizes use `clamp()` for fluid scaling (hero h1, section titles).

---

## Photography

### Current Assets (`images/`)
- **Hero:** `sushi-hero.jpg` — full-bleed with dark overlay
- **Chef portraits:** `chef-john-portrait.jpg`, `chef-unique-cuisine.jpg` — used in cards and profile pages
- **Food photography:** sushi platter, rolls close-up, packaged boxes — product shots for menu items
- **Chef action:** `chef-john-action.jpg` — in-kitchen shot

### Photo Guidelines
- Food photos: bright, natural lighting, overhead or 45-degree angle
- Chef portraits: head-and-shoulders, natural expression, kitchen environment preferred
- Card images: 200px height, `object-fit: cover` — face positioning may need `object-position` adjustment
- Hero images: high-res (1400px+ wide), work well under dark green overlay (60–75% opacity)

---

## Brand Voice in Design

- **Professional but warm** — dark greens and serif headings convey reliability; golds and creams add warmth
- **Chef-forward** — chef cards are photo-first, cuisine types are prominently tagged
- **Community-oriented** — testimonials section, "collective" language, emphasis on local/independent
- **Premium but accessible** — gold accents signal quality without being exclusionary; pricing is transparent

---

## Forms

- Inputs: cream background (`--cream`), 1px border, 6px radius
- Focus state: border turns green
- Labels: small (0.78rem), bold, dark green
- Layout: two-column rows on desktop, single-column on mobile
- Form container: white background, border, shadow, 32px padding

---

## Animation & Transitions

- **Duration:** 0.15–0.2s for all interactive transitions
- **Card hover:** `translateY(-3px to -4px)` + shadow change
- **Button hover:** `translateY(-1px to -2px)` + color/shadow change
- **Nav burger:** CSS transforms for open/close (rotate spans into X)
- **Scroll:** `scroll-behavior: smooth` on `html`
- No JavaScript animation libraries — all transitions are CSS-only
