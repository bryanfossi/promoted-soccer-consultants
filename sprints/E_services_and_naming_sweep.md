# Sprint E — Services copy + sitewide naming sweep

**Status:** Ready after D
**Prerequisites:** Sprints A–D.
**Risk:** Medium — touches many files (naming sweep) but no URL restructuring.

---

## Goal

Land v3 copy into the existing services routes **in place** (no URL changes), add the Custom Club Solutions block, retarget `/locations/*` CTAs, and run the sitewide naming reconciliation.

---

## Scope

**In scope**
- **`/recruiting-services`** and **`/club-consulting`**: v3 copy into the existing routes — **do NOT restructure URLs** (preserve Stripe + Calendar links, SEO equity).
- **Custom Club Solutions** block on `/club-consulting`: "PSC scopes custom engagements for problems a club can't solve off the shelf — **the CTA is always the conversation, never a promised fix**." Where ClubStack overlaps IT Solutions, ClubStack is the product answer; consulting is what software can't do.
- **`/locations/*`**: retarget CTAs to FUSE-ID free signup (https://fuse-id.online/register) + the free consultation.
- **Sitewide naming sweep:**
  - Packages = **Recruiting Services** (never FUSE-ID); **FUSE-ID = platform only**.
  - **`Clubstack → ClubStack`** casing across `app/`, `components/`, `app/sitemap.ts`, and all metadata/OG/schema strings. **Exception:** the verbatim legal disclaimer text keeps "Clubstack" (approved legal string) — leave those untouched.
  - Display brand "Promoted Sports Consultants"; legal entity "Promoted Soccer Consultants, LLC" only in disclaimers/copyright.

**Out of scope**
- New pages / homepage structure (B–D). Final JSON-LD + redirect map + build QA (F).

## Files touched
EDIT `app/recruiting-services/page.tsx`, `app/club-consulting/page.tsx`, `app/locations/**`, plus every file surfaced by the `Clubstack` grep (nav, footer, components, sitemap, layout metadata) — excluding verbatim disclaimer strings.

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] Services routes keep their URLs; Stripe + Calendar links intact and working.
- [ ] Custom Club Solutions block present with conversation-only CTA.
- [ ] `/locations/*` CTAs point to FUSE-ID free signup + consultation.
- [ ] `grep -rn "Clubstack" app/ components/` returns only verbatim legal-disclaimer occurrences; everywhere else reads "ClubStack."
- [ ] No content calls the consulting packages "FUSE-ID."
