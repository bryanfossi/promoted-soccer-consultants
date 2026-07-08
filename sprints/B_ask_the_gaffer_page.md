# Sprint B — Third product: /ask-the-gaffer

**Status:** Ready after A
**Prerequisites:** Sprint A (ATG tokens codified, Archivo/Inter live).
**Risk:** Low — net-new, additive.

---

## Goal

Give Ask The Gaffer a first-class presence on PSC.com: a net-new `/ask-the-gaffer` landing page in the amber-on-dark identity, wired into the Products nav dropdown, footer, and sitemap.

---

## Scope

**In scope**
- **New page** `app/ask-the-gaffer/page.tsx` + `ask-the-gaffer.module.css`:
  - Amber-on-dark identity per [`docs/brand/ask-the-gaffer-brand-kit.md`](../docs/brand/ask-the-gaffer-brand-kit.md) (amber `#F5A623` / hover `#FFC55C`; base `#0C0F14` / surface `#141920` / elevated `#1C2433`; text `#EDF0F4` / secondary `#8A97AE`). PSC.com master type (Archivo + Inter) — colors only from the product.
  - Tagline *"It already knows your team."*; motif floodlit tactics room / "We go again."
  - Sections: hero (waitlist CTA → https://askthegaffer.io/waitlist), how-it-works (tell it once → ask → get it in minutes), **session-plan mock** (illustrative "Tuesday session on pressing triggers" output), why-it's-different, founding-coach block ("founding coaches get early access, founder pricing, roadmap input"), launch note **August 2026**.
  - Framing: **no automated video analysis** — different job from Hudl / Wyscout / Veo, priced for a coach not an athletic department.
  - **FAQ** (5–6 questions) with **FAQPage JSON-LD**; add SoftwareApplication JSON-LD.
- **Nav** (`components/Navbar.tsx`): add Ask The Gaffer to the Products dropdown.
- **Footer** (`components/Footer.tsx`): add Ask The Gaffer under Products.
- **Sitemap** (`app/sitemap.ts`): add `/ask-the-gaffer`.

**Out of scope**
- Homepage ATG product section → **D**. Any FUSE-ID/ClubStack page changes.
- Building askthegaffer.io itself (product surface, not marketing).

## Files touched
NEW `app/ask-the-gaffer/page.tsx`, `app/ask-the-gaffer/ask-the-gaffer.module.css` · EDIT `components/Navbar.tsx`, `components/Footer.tsx`, `app/sitemap.ts`.

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] `/ask-the-gaffer` renders end-to-end in amber-on-dark; CTA opens askthegaffer.io/waitlist in a new tab.
- [ ] Launch date reads August 2026; founding-coach benefits present; no-video-analysis framing present.
- [ ] FAQPage + SoftwareApplication JSON-LD valid in page source.
- [ ] Ask The Gaffer appears in nav dropdown, footer, and sitemap.
- [ ] No DM Sans / Barlow / product fonts loaded; page uses Archivo + Inter.
- [ ] Mobile responsive at 375px / 390px.
