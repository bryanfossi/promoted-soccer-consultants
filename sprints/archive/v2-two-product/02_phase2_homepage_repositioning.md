# Phase 2 — Homepage repositioning

**Status:** ✅ COMPLETED 2026-05-13
**Estimated effort:** 1 session (~3–4 hours)
**Prerequisites:** Phase 1 merged and deployed. Phase 1 brand decisions (see `sprints/01_*.md`) are authoritative.
**Blocks:** Phase 3

---

## Goal

Convert the homepage from a soccer-recruiting-consultancy landing page into a parent/portfolio hub for the two platforms (FUSE-ID and Clubstack), with a secondary path to the human consulting services. Update site-wide metadata and schemas to match.

After this sprint, a first-time visitor on the home page should immediately understand: **PSC builds two multi-sport platforms — FUSE-ID for college recruiting and Clubstack for running a club — and offers human consulting alongside them.**

---

## Scope

**In scope**
- Rewrite `components/Hero.tsx`
- Create `components/Products.tsx` + `Products.module.css` (replaces homepage Services section)
- Create `components/PremiumServices.tsx` + `PremiumServices.module.css` (new band below Products)
- Edit `app/page.tsx` to swap Services for Products + PremiumServices
- Light copy edits to `components/WhyUs.tsx` and `components/About.tsx` for multi-sport tone
- Update `app/layout.tsx` site-wide metadata and JSON-LD schemas

**Out of scope** — defer to Phase 3
- Rewriting `app/fuse-id/page.tsx` (still the legacy consulting page)
- Deleting `app/ai-assistant/`
- Setting up 301 redirects

**Out of scope — preserve as-is**
- The current `components/Services.tsx` file (do NOT delete; just stop importing it from `page.tsx`. Leaves it available if rollback is needed.)
- `components/Resources.tsx`, `components/CTA.tsx` — kept on homepage unchanged
- All blog and free-resources pages

---

## Work breakdown

### Task 2.1 — Rewrite `components/Hero.tsx`

Replace the entire file. Keep the same module CSS file (`Hero.module.css`) and the same `.hero` / `.heroContainer` / `.heroContent` / `.heroCtas` / `.btn` / `.btnPrimary` / `.btnSecondary` / `.ctaSubtext` / `.heroImageContainer` / `.heroLogo` class names so styling carries over.

**New copy:**

- H1: **"Recruiting and club operations, redesigned for every sport."**
- Subhead: **"PSC builds the tools families and clubs actually need — FUSE-ID for college recruiting, Clubstack for running a club — backed by a coach who's done both."**
- Primary CTA: `Explore the platforms` (anchor link to `#products` — the Products section ID below)
- Secondary CTA: `Schedule Consultation` (keep existing Google Calendar link: `https://calendar.app.google/96Z4Kgp9mLh35sMj9`)
- CTA subtext: keep `"30 minutes · Free · No pitch"`

The hero image stays as the PSC logo for now.

The primary CTA needs to scroll to `#products` smoothly — the existing `scrollToSection` helper in the current Hero.tsx can be reused. Make sure to convert the secondary CTA from an internal scroll to an external `target="_blank"` calendar link if it isn't already.

### Task 2.2 — Create `components/Products.tsx` + `Products.module.css`

Two equally weighted product cards. Use the existing design system (Crimson Pro serif for headings, `var(--primary-green)` for accents, white background, similar to existing `Services.module.css` card style).

Section id: `id="products"` so Hero's primary CTA scroll anchor works.

**Card 1 — FUSE-ID**
- Image: `/fuse-id-logo.png` (already in `public/`)
- Title: `FUSE-ID`
- Subtitle: `AI College Recruiting Platform`
- Description: `Match scoring across 2,400+ programs, AI-drafted coach emails, full recruiting pipeline, offer comparisons. Built for every sport, every division, every income level.`
- Features (4 bullets):
  - `AI match engine — 8 scoring dimensions`
  - `Personalized coach email drafting`
  - `Recruiting pipeline & offers tracker`
  - `Shareable athlete profile + parent access`
- CTA: `Explore FUSE-ID →` linking to `https://fuse-id.online` (external, `target="_blank"`)

**Card 2 — Clubstack**
- Image: use `/promoted-soccer-consultants.png` for now (placeholder until Clubstack has its own logo; flag this in the PR description)
- Title: `Clubstack`
- Subtitle: `Club Management Platform`
- Description: `Run your club. Not your inbox. Registration, payments, rosters, scheduling, communication — and the only recruiting integration on the market. Built for multi-sport clubs.`
- Features (4 bullets):
  - `Registration & Stripe-powered payments`
  - `Master schedule with facility-grid view`
  - `Broadcast comms + DMs in one place`
  - `Recruiting integration (PSC differentiator)`
- CTA: `See Clubstack →` linking to `/clubstack` (internal)

### Task 2.3 — Create `components/PremiumServices.tsx` + `PremiumServices.module.css`

A single-row band below Products, smaller visual weight. Use a light gray background (`var(--light-gray)`) to differentiate from the white Products section.

**Copy:**

- Eyebrow / label: `Want hands-on guidance?`
- Heading (h2, smaller than Products h2): `Two human-led services for families and clubs that want a coach in their corner.`
- Two compact cards side-by-side:
  - **Recruiting Services** — `For families who want a former college coach guiding the recruiting process. Basic $350 / Premier $2,500 / Elite $5,000.` CTA: `See Recruiting Services →` → `/recruiting-services`
  - **Club Consulting** — `For clubs needing strategic planning, coach education, player pathway design, or parent communication frameworks.` CTA: `See Club Consulting →` → `/club-consulting`

### Task 2.4 — Update `app/page.tsx`

Replace the import and usage of `Services` with the two new components. Final structure:

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import PremiumServices from '@/components/PremiumServices'
import WhyUs from '@/components/WhyUs'
import Resources from '@/components/Resources'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = { /* keep existing */ }

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <PremiumServices />
      <WhyUs />
      <Resources />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
```

Do NOT delete `components/Services.tsx` or `components/Services.module.css` — leave them in the repo as dead code for now in case rollback is needed.

### Task 2.5 — Edit `components/WhyUs.tsx`

Light copy edit. Change "the soccer landscape is strongest when clubs are supported..." to "the youth sports landscape is strongest when clubs are supported..." Don't restructure the component. Bryan's soccer credentials stay anchored in About.

### Task 2.6 — Edit `components/About.tsx`

Add one bridge paragraph between the existing intro and the credentials list. Suggested copy:

> What started in soccer is built to serve every sport. The recruiting and club-operations problems we solve are universal — divisions, scholarships, rosters, payments, parent communication. PSC's expertise is soccer-deep; the platforms are sport-agnostic.

Keep the existing credentials list unchanged.

### Task 2.7 — Update `app/layout.tsx`

Update site-wide defaults:

- `DEFAULT_DESCRIPTION` from the current soccer-recruiting language to:
  `"PSC builds two multi-sport platforms — FUSE-ID for AI-powered college recruiting and Clubstack for club management — alongside human-led consulting from a former college coach."`
- Update OG title to: `Promoted Soccer Consultants | Recruiting & Club Operations for Every Sport`
- Twitter title same as OG title
- Add two new JSON-LD `SoftwareApplication` schemas to the schema array (one for FUSE-ID, one for Clubstack). Link both to the org via `publisher: { '@id': ${SITE_URL}#organization }`. Use the offer arrays already on each product's page schema as a model.
- Add `sameAs` entries on the organization schema for `https://fuse-id.online` and `https://clubstack.online`.

Keep the existing `Person`, `Organization`, `WebSite`, and `ProfessionalService` schemas. Don't break what works.

---

## Acceptance criteria

- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] Homepage renders with new Hero, Products section (with `id="products"`), PremiumServices section, then existing WhyUs, Resources, About, CTA
- [ ] Hero primary CTA scrolls smoothly to Products section
- [ ] Hero secondary CTA opens the calendar booking in a new tab
- [ ] Both Product cards render with images, copy, and working links (FUSE-ID externally, Clubstack to `/clubstack`)
- [ ] PremiumServices band renders with both service cards linking correctly
- [ ] WhyUs and About show updated multi-sport copy
- [ ] View page source confirms two new `SoftwareApplication` schemas in `<head>`
- [ ] Default OG and Twitter cards show updated title
- [ ] Mobile responsive at 375px and 390px viewport widths

---

## Out of scope reminders

- Do **not** touch `app/fuse-id/page.tsx` — Phase 3 owns it
- Do **not** delete `app/ai-assistant/` — Phase 3 owns it
- Do **not** add redirects yet — Phase 3 handles all redirect work
- Do **not** modify `app/blog/` content
- Do **not** modify the Navbar or Footer from Phase 1

---

## Hand-off notes for the implementing agent

- The repo uses CSS Modules (`.module.css`), not Tailwind. Match the existing class-naming style and use `var(--primary-green)` etc. from `app/globals.css`.
- `app/globals.css` has explicit rules for gold-on-dark only — do not use `--accent-gold` on white sections in this sprint.
- The font system is set up in `app/layout.tsx` (Crimson Pro for `.serif`, Work Sans default). Apply `className="serif"` to headings for the brand voice.
- Hero margin-top is `80px` to clear the fixed navbar — preserve this in any new sections that follow the same pattern.
- When this sprint is done, the next deliverable (Phase 3) rewrites `/fuse-id` into a platform landing page and deletes `/ai-assistant`. Don't pre-stage that work here.
