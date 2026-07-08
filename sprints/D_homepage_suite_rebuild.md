# Sprint D — Homepage suite rebuild

**Status:** Ready after C
**Prerequisites:** Sprints A–C (tokens/type, all three product pages exist).
**Risk:** Medium — brand-level homepage rebuild.

---

## Goal

Rebuild the homepage as the three-tool suite hub. A first-time visitor immediately gets: **one company, three tools, every sport** — ClubStack runs the club, Ask The Gaffer preps the coach, FUSE-ID gets the family recruited — with the recruiting thread tying them together and human services as a subordinate tier.

---

## Scope

**In scope**
- **Hero** (`components/Hero.tsx`): built on the *"One company. Three tools. Every sport."* frame (copy landed in A; D owns the section structure/layout).
- **Three product sections** with illustrative UI mocks:
  - ClubStack — facility-grid master schedule with a conflict flag.
  - Ask The Gaffer — session-plan output.
  - FUSE-ID — recruiting Kanban.
  - Each section borrows its product's accent color (green / navy+gold / amber) but stays in Archivo + Inter; each links to its page and its product-domain CTA.
- **Ecosystem triangle** — Club ⇄ Coach ⇄ Athlete+Family, with the **recruiting-thread band** (ClubStack recruiting module → FUSE-ID).
- **Founder section** — Bryan's credibility anchor (throughline: every product exists because he hit the problem himself).
- **Subordinate services strip** — Recruiting Services + Club Consulting, visually secondary; never leads.
- **Newsletter** (preserve) + **final CTA band**.
- Update `app/page.tsx` composition. Replace the old `Products` / `PremiumServices` two-product components (keep files as dead code or supersede — note in PR).

**Out of scope**
- Product page internals (B/C). Services route copy (E). Schema/sitemap final pass (F).

## Files touched
EDIT `app/page.tsx`, `components/Hero.tsx` · NEW section components as needed (e.g. `components/SuiteProducts.tsx`, `components/EcosystemTriangle.tsx`, `components/Founder.tsx`) · CSS modules for each.

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] Homepage leads with the three-tool frame; all three products represented with mocks + correct CTAs.
- [ ] Ecosystem triangle + recruiting-thread band present.
- [ ] Services appear as a subordinate strip, not a lead.
- [ ] Product accents scoped correctly; no product fonts loaded; Archivo + Inter throughout.
- [ ] Newsletter preserved and functional; mobile responsive at 375px / 390px.
