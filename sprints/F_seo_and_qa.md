# Sprint F — SEO / QA

**Status:** Ready after E
**Prerequisites:** Sprints A–E.
**Risk:** Low — verification + consolidation.

---

## Goal

Final SEO and quality pass: complete structured data, regenerate the sitemap, document the redirect map, and confirm a clean build with zero legacy 404s.

---

## Scope

**In scope**
- **JSON-LD:** Organization sitewide; **SoftwareApplication ×3** (FUSE-ID, ClubStack, Ask The Gaffer); **FAQPage ×3** (the product pages that carry FAQs). Validate all.
- **Sitemap** (`app/sitemap.ts`): regenerate including all `/locations/*` pages and the three product pages; correct priorities.
- **Redirect map:** document every 301 (e.g. `/ai-assistant → /fuse-id`, any legacy consulting-URL moves) in one place (`sprints/redirect-map.md` or `next.config.js` comments).
- **GSC verification tag** in the root layout (`app/layout.tsx`) — confirm intact and unremoved.
- **Build/QA:** `npm run build` clean; smoke-test every route (`/`, `/fuse-id`, `/clubstack`, `/ask-the-gaffer`, `/recruiting-services`, `/club-consulting`, `/free-resources`, `/blog` + one post, `/locations/*` sample); **zero legacy 404s**.

**Out of scope**
- Any new content or design changes (belongs to A–E).

## Files touched
EDIT `app/layout.tsx`, `app/sitemap.ts`, product page schemas, `next.config.js` · NEW `sprints/redirect-map.md` (optional).

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] Organization + 3× SoftwareApplication + 3× FAQPage JSON-LD present and valid.
- [ ] Sitemap includes all product + `/locations/*` pages with sane priorities.
- [ ] Redirect map documented; every legacy URL 301s (no 404s).
- [ ] GSC verification meta tag present in root layout.
- [ ] Full route smoke test passes.
