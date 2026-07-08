# Sprint C — FUSE-ID platform flip (absorbs archived Sprint 3)

**Status:** Ready after B
**Prerequisites:** Sprints A–B. `/recruiting-services` is the live home for the consulting business (already shipped) and verified taking Stripe traffic.
**Risk:** **High** — flips the meaning of `/fuse-id` from consulting to platform and introduces a redirect.

> Absorbs the archived two-product Sprint 3 ([`archive/v2-two-product/03_phase3_fuse_id_platform_launch.md`](archive/v2-two-product/03_phase3_fuse_id_platform_launch.md)) — do not ship that version; this supersedes it.

---

## Goal

Convert `/fuse-id` from the legacy consulting sales page into the SaaS platform landing page for FUSE-ID, fold in the `/ai-assistant` content, delete `/ai-assistant`, and 301 it to `/fuse-id`.

---

## Scope

**In scope**
- **Rewrite** `app/fuse-id/page.tsx` as a SaaS platform page, FUSE-ID green identity ([`docs/brand/fuse-id-brand-kit.md`](../docs/brand/fuse-id-brand-kit.md)), Archivo/Inter type, green buttons with `#052E16` labels:
  - Hero → primary CTA **https://fuse-id.online/register**.
  - **2,400+ programs across D1 / D2 / D3 / NAIA / NJCAA.**
  - **Six feature cards** (AI match engine · AI coach email generator · pipeline Kanban · offer tracker w/ net cost · profile gap analysis · parent access + public profile).
  - **Kanban pipeline mock** (Board / List / Top 10).
  - **Pricing:** Free $0 / Starter $9.99 / Pro $14.99 + token packs Mini 5/$2.99, Standard 15/$7.99, Max 30/$14.99.
  - **Comparison** vs NCSA / SportsRecruits / FieldLevel ($99–$200+/mo).
  - AI-assistant section merged from `/ai-assistant` (reframed: included with Pro / add-on to free — not "exclusive to enrolled clients").
  - "Want a human in the loop?" callout → `/recruiting-services`.
  - **FAQ + FAQPage JSON-LD**; replace `Service` schema with `SoftwareApplication`.
  - Disclaimer verbatim (education tool; **does not send emails on behalf of athletes**). No Stripe links on this page.
- **Delete** `app/ai-assistant/`; **301** `/ai-assistant → /fuse-id` in `next.config.js`.
- **Sitemap**: remove `/ai-assistant`, bump `/fuse-id` priority.

**Out of scope**
- Homepage (D), services copy (E). Building fuse-id.online itself.

## Files touched
EDIT `app/fuse-id/page.tsx`, `app/fuse-id/fuse-id.module.css`, `next.config.js`, `app/sitemap.ts` · DELETE `app/ai-assistant/`.

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] `/fuse-id` renders as SaaS page; hero CTA opens fuse-id.online/register.
- [ ] **Every solid-green CTA uses `#052E16` text; no white or black text on green anywhere.**
- [ ] No electric-blue anywhere.
- [ ] `/ai-assistant` deleted; visiting it 301s to `/fuse-id`; no internal links remain.
- [ ] No Stripe checkout links on `/fuse-id` (they live only on `/recruiting-services`).
- [ ] SoftwareApplication + FAQPage schema valid; sitemap updated.
