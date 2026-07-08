# Sprint E — Services copy + sitewide naming sweep

**Status:** Ready after D
**Prerequisites:** Sprints A–D.
**Risk:** Medium — touches many files (naming sweep) but no URL restructuring.

---

## Goal

Land v3 copy into the existing services routes **in place** (no URL changes), add the Custom Club Solutions block, and run the sitewide naming reconciliation.

> **Scope note (retroactive):** the `/locations/*` CTA-retargeting item was removed — those pages are **not yet built** in this repo. They live in the GSC/GBP SEO strategy as a future sprint, with FUSE-ID as the lead offering per the SEO plan.

---

## Scope

**In scope**
- **`/recruiting-services`** and **`/club-consulting`**: v3 copy into the existing routes — **do NOT restructure URLs** (preserve Stripe + Calendar links, SEO equity).
- **Custom Club Solutions** block on `/club-consulting`: "PSC scopes custom engagements for problems a club can't solve off the shelf — **the CTA is always the conversation, never a promised fix**." Where ClubStack overlaps IT Solutions, ClubStack is the product answer; consulting is what software can't do.
- **Sitewide naming sweep:**
  - Packages = **Recruiting Services** (never FUSE-ID); **FUSE-ID = platform only**.
  - **ClubStack** casing across `app/`, `components/`, `app/sitemap.ts`, and all metadata/OG/schema strings — **including PSC's own legal disclaimer** (casing corrected in Sprint F; "verbatim" locks substance, not casing). Zero mis-cased instances remain in the codebase.
  - Display brand "Promoted Sports Consultants"; legal entity "Promoted Soccer Consultants, LLC" only in disclaimers/copyright.

**Out of scope**
- New pages / homepage structure (B–D). Final JSON-LD + redirect map + build QA (F).

## Files touched
EDIT `app/club-consulting/page.tsx` (+ module CSS), plus every file surfaced by the ClubStack casing grep (nav, footer, layout metadata, `app/clubstack/page.tsx`). `/recruiting-services` needed no edits (already v3-compliant). No `app/locations/**` — not built.

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] Services routes keep their URLs; Stripe + Calendar links intact and working.
- [ ] Custom Club Solutions block present with conversation-only CTA.
- [ ] A grep for the mis-cased product spelling across `app/` and `components/` returns **zero** results (including the disclaimer).
- [ ] No content calls the consulting packages "FUSE-ID."
