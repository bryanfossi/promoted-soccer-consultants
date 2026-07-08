# Phase 1 — Clubstack page, Recruiting Services rebrand, navbar/footer/sitemap

**Status:** ✅ COMPLETED on 2026-05-12
**Effort:** ~1 session
**Prerequisites:** None
**Blocks:** Phase 2

---

## Goal

Add the two new product/service surfaces to the site (Clubstack landing page, renamed Recruiting Services) without disturbing any existing pages, Stripe links, or Calendar bookings. Surface Clubstack in the navbar and footer so visitors can find it.

Everything in this sprint is **additive** — no SEO equity destroyed, no broken redirects, no Stripe webhook risk.

---

## What was delivered

### New pages

| Path | Purpose |
|---|---|
| `app/clubstack/page.tsx` + `clubstack.module.css` | Clubstack product landing page. Hero, four pain blocks, five core modules, master-schedule facility-grid showcase with stylized mock, two add-ons, multi-sport positioning with soccer-built credibility line, PSC differentiator (recruiting integration), six-tier pricing table (Club tier "Most popular"), competitive comparison table, built-by-a-coach trust block, dual alpha-state CTAs. SoftwareApplication JSON-LD schema. |
| `app/recruiting-services/page.tsx` + `recruiting-services.module.css` | Rebranded consulting page. Cloned from `app/fuse-id/page.tsx`, repositioned as "Recruiting Services" with "How this fits with FUSE-ID" framing section. Stripe and Calendar links carried over unchanged. "FUSE-ID Pro included" added to every package tier. |

### Edited files

| Path | Change |
|---|---|
| `app/club-consulting/page.tsx` | Removed "IT Solutions & Automation" and "Club Recruiting Services" cards. Added banded Clubstack callout section between services grid and "Our Approach". Sport-agnostic copy tweaks to hero and metadata. Schema `OfferCatalog` updated. |
| `app/club-consulting/club-consulting.module.css` | Added `.clubstackCallout`, `.calloutBox`, `.calloutBadge`, `.calloutButton` styles. |
| `components/Navbar.tsx` | Replaced single "Services" dropdown with two dropdowns: **Products** (FUSE-ID → fuse-id.online, Clubstack → /clubstack) and **Services** (Recruiting Services, Club Consulting). Removed standalone "AI Assistant" nav item. |
| `components/Footer.tsx` | Reorganized columns into Products / Services / Education / Contact. New tri-product disclaimer covering FUSE-ID (software), Clubstack (software), and Recruiting Services + Club Consulting (consulting). Copyright updated to 2026. |
| `components/Footer.module.css` | Added `.disclaimer p` and `.disclaimer strong` styles. |
| `app/sitemap.ts` | Added `/clubstack` (priority 0.95, weekly) and `/recruiting-services` (priority 0.9, monthly). Demoted `/ai-assistant` to 0.7 in preparation for Phase 3 sunset. |

### Files preserved unchanged

- `app/fuse-id/*` — still the legacy consulting page. Phase 3 rewrites this.
- `app/ai-assistant/*` — still live. Phase 3 deletes this with a 301 redirect.
- `app/blog/**` — all eight posts intact.
- `app/free-resources/*`, `app/chat/*`
- `components/Hero.tsx`, `components/Services.tsx`, `components/About.tsx`, `components/WhyUs.tsx`, `components/Resources.tsx`, `components/CTA.tsx` — all homepage components untouched. Phase 2 rewrites these.
- `app/layout.tsx` — schemas and metadata untouched. Phase 2 updates these.

---

## Acceptance criteria — all verified ✅

- [x] `npx tsc --noEmit` passes with zero errors
- [x] `/clubstack` renders end-to-end with all sections, valid JSON-LD
- [x] `/recruiting-services` renders with Stripe + Calendar links carrying over from the legacy `/fuse-id` page
- [x] Old `/fuse-id` consulting page still works and accepts Stripe checkout traffic
- [x] Old `/ai-assistant` page still works
- [x] Navbar surfaces Products and Services dropdowns; mobile menu functions
- [x] Footer disclaimer block covers all three offerings; copyright reads 2026
- [x] Sitemap includes both new routes

---

## Brand decisions captured in this sprint

- **FUSE-ID** = the AI platform (live for signups at fuse-id.online)
- **Clubstack** = the club SaaS platform (in alpha at clubstack.online; CTAs use "Apply for alpha access")
- **Recruiting Services** = the renamed human consulting tier (Basic $350 / Premier $2,500 / Elite $5,000)
- **Club Consulting** = the existing strategic/coach-education consulting for clubs (trimmed of IT Solutions and Club Recruiting cards)

Clubstack positioning on the marketing site is **multi-sport from day one**, with one credibility line acknowledging it was first built with competitive soccer clubs.

---

## Known follow-ups (handled in later phases)

1. Homepage Hero still says "College Soccer Recruiting Guidance for Clubs, Players, and Families" — Phase 2 rewrites this.
2. Homepage `Services` section still shows two old cards — Phase 2 replaces with `Products` + `PremiumServices`.
3. `/fuse-id` still sells the consulting packages, which now overlaps with `/recruiting-services` — Phase 3 rewrites `/fuse-id` into the platform landing page.
4. `/ai-assistant` page is still live but no longer linked from nav — Phase 3 deletes it with a 301 redirect to `/fuse-id`.
5. `app/layout.tsx` site-wide metadata still describes "soccer recruiting consulting" — Phase 2 updates this.
