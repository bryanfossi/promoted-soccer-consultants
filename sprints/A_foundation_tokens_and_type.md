# Sprint A — Foundation: design tokens, typography, tagline/CTA copy

**Status:** Ready (first sprint of the v3 set)
**Prerequisites:** Brand docs committed (`docs/brand/`, `CLAUDE.md`).
**Blocks:** B–F all assume A's tokens and fonts.
**Risk:** Medium — sitewide token + font changes.

---

## Goal

Reconcile the live design system to the canonical brand kits: master palette, product accent tokens, PSC.com typography, and the top-level tagline/CTA copy. After this sprint the site *renders* in v3 colors and type even though the page structures are still being rebuilt in B–E.

---

## Scope

**In scope**
1. **Master tokens** (`app/globals.css`): navy `#1A2332 → #1A3A5C`; dark-navy background `→ #0F1A2E`; gold `#D4A574 → #C9A227`. Keep legacy token *names* (`--primary-green`, `--secondary-green`, `--dark-navy`, `--accent-gold`) — change values only, update the comment block.
2. **FUSE-ID accent tokens** (`app/fuse-id/fuse-id.module.css`): confirm `--fuse-green #22C55E` / `--fuse-green-bright #4ADE80` (already ship); add hover `#16A34A`, text-on-green `#052E16`, dark bg `#0F1120`, cards `#1A1F35`. Text on any solid-green button = `#052E16`, never white/black.
3. **Ask The Gaffer tokens** — codify for Sprint B readiness (amber `#F5A623`, hover `#FFC55C`, base `#0C0F14`, surface `#141920`, elevated `#1C2433`, text `#EDF0F4`, secondary `#8A97AE`). Record as a scoped token block (used on `/ask-the-gaffer` in B). **Do not use `#141210`.**
4. **Typography** (`app/layout.tsx` + `app/globals.css`): swap Crimson Pro + Work Sans → **Archivo (display) + Inter (body)** via `next/font/google`. Repoint the `.serif` display class to Archivo (keep the class name; add a comment). Body → Inter. Product sections borrow product colors only — **never** import DM Sans / Barlow / product families on PSC.com.
5. **Tagline copy**: homepage hero H1 → the positioning frame *"One company. Three tools. Every sport."* line; FUSE-ID tagline strings currently on the homepage/Products card → *"The AI college recruiting platform for student-athletes — and the parents in their corner."*
6. **ClubStack CTA copy** (`app/clubstack/page.tsx`): replace "Apply for alpha access" → **"Join the waitlist · founding-club pricing."**

**Out of scope** (later sprints)
- New `/ask-the-gaffer` page and nav/footer/sitemap entries → **B**.
- `/fuse-id` rewrite → **C**. Full homepage section/layout rebuild → **D**.
- Sitewide ClubStack casing sweep and packages/platform naming → **E**.

---

## Files touched
`app/globals.css` · `app/layout.tsx` · `app/fuse-id/fuse-id.module.css` · `components/Hero.tsx` · `components/Products.tsx` · `app/clubstack/page.tsx` (CTA strings only).

## Acceptance criteria
- [ ] `npm run build` clean.
- [ ] Site renders in Archivo/Inter; no Crimson Pro / Work Sans loaded; no product font families on PSC.com.
- [ ] Navy `#1A3A5C` / gold `#C9A227` / deep-navy `#0F1A2E` live across master surfaces.
- [ ] FUSE-ID green tokens complete; a solid-green button shows `#052E16` label.
- [ ] ATG token block present and unused-but-ready; `#141210` absent from repo.
- [ ] ClubStack CTA reads "Join the waitlist · founding-club pricing."
- [ ] Homepage hero + Products FUSE-ID copy show the v3 lines.
