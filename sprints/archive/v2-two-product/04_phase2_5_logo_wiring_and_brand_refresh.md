# Phase 2.5 — Logo wiring and brand asset refresh

**Status:** ✅ COMPLETED 2026-05-13 (logo wiring done; legacy raster file needs manual deletion from File Explorer — sandbox can't unlock it)
**Estimated effort:** 1 session (~2–3 hours once assets are in hand)
**Prerequisites:**
  - Phase 1 complete (✅ done 2026-05-12)
  - Brand-name code sweep complete (✅ done 2026-05-13 — see "Already done" section below)
  - Vector logo files produced by user (see "Asset checklist" below)
**Blocks:** Phase 3
**Recommended timing:** Run this sprint after Phase 2 (homepage repositioning), so the new logo lands on a homepage that's already designed to showcase the parent-brand identity.

---

## Goal

Replace the legacy raster PSC logo (`public/promoted-soccer-consultants.png`) everywhere it appears with the new PSC parent-brand logo system (silver/platinum ascending bars + upright bold "PSC" wordmark). Two versions are used in different contexts:

- **Compact mark** — mark + "PSC" only, no tagline. Used in: navbar, favicon, OG image at small crops, anywhere ≤80px tall.
- **Full lockup** — mark + "PSC" + "PROMOTED SPORTS CONSULTANTS" tagline. Used in: footer, hero (optional), press kit, large-display contexts.

After this sprint, the new logo is live everywhere on the site and the legacy raster file can be removed from `public/`.

---

## Asset checklist — must be in place BEFORE starting

Place the following files in `public/`. If any are missing, halt and request them from the user before proceeding.

| Path | Format | Use |
|---|---|---|
| `public/psc-logo-compact.svg` | SVG vector | Navbar, anywhere ≤80px |
| `public/psc-logo-full.svg` | SVG vector | Footer, hero, large displays |
| `public/psc-logo-compact.png` | PNG, 512×512, transparent | Fallback / OG / favicon source |
| `public/psc-logo-full.png` | PNG, 1600×600, transparent | Press kit |
| `public/favicon.ico` | ICO, multi-resolution (16/32/48px) | Browser tab favicon |
| `public/apple-icon.png` | PNG, 180×180 | iOS home screen icon |
| `public/icon.png` | PNG, 512×512 | Android / PWA |
| `public/og-image.png` | PNG, 1200×630 | Social share preview — full lockup on dark navy with PSC tagline visible |

The current `public/promoted-soccer-consultants.png`, `public/apple-icon.png`, `public/icon.png` (and `app/apple-icon.png`, `app/icon.png`) all need to be replaced.

---

## Already done — do NOT redo

The brand-name sweep was completed on 2026-05-13. The following changes are already in place and don't need re-doing in this sprint:

- `app/layout.tsx` — `SITE_NAME = 'Promoted Sports Consultants'`, schema markup updated, alternateName array includes legacy name, sameAs adds fuse-id.online and clubstack.online
- `app/globals.css` — `--accent-silver: #c8d1da` and `--accent-silver-bright: #e5ecf2` tokens added with brand-rule comments
- All page metadata OG titles use "Promoted Sports Consultants"
- `components/Footer.tsx`, `components/Navbar.tsx`, `components/About.tsx`, `components/WhyUs.tsx` — brand-facing strings updated; legal entity name preserved in disclaimer/copyright
- Blog post bylines + blog index schema updated
- Image alt text on Navbar and Footer logos updated to "Promoted Sports Consultants"

What's left in this sprint is the **actual image swaps and CSS adjustments** to use the new logo system.

---

## Scope

**In scope**
- Replace all logo image references in `Navbar.tsx`, `Footer.tsx`, `Hero.tsx` (if Phase 2 hasn't already touched it), and any product page hero image references that use the PSC logo
- Update the OG image referenced in `app/layout.tsx` metadata
- Replace `app/apple-icon.png`, `app/icon.png`, `public/favicon.ico` with new icons
- Tune any CSS that's currently sized for the rectangular legacy logo (which was 1024×1536) — the new logo is wide, so width/height props and sizing will change
- Apply `--accent-silver` token where it makes sense on PSC-parent-brand surfaces (homepage hero accents, navbar/footer brand strip if any decorative elements use the accent color)
- Update `package.json` `name` field if it currently says `promoted-soccer-consultants` (cosmetic only — doesn't affect anything customer-facing)

**Out of scope**
- Phase 2 (homepage repositioning) and Phase 3 (FUSE-ID URL flip) — those have their own sprint docs
- Producing the vector logo files themselves — that's the user's prerequisite work
- Rebranding fuse-id.online or clubstack.online (those are separate product properties)
- Domain change to promotedsportsconsultants.com (not happening; SEO equity stays on the current domain)
- Legal entity rename — staying as "Promoted Soccer Consultants, LLC" per user decision

---

## Work breakdown

### Task 4.1 — Swap Navbar logo to compact mark

File: `components/Navbar.tsx`

Current code uses `src="/promoted-soccer-consultants.png"` with `width={1024} height={1536}`. Replace with:

```tsx
<Image
  src="/psc-logo-compact.svg"
  alt="Promoted Sports Consultants"
  width={240}
  height={64}
  priority
  sizes="(max-width: 900px) 140px, 180px"
  className={styles.logoImage}
/>
```

The new logo is wide-format (roughly 4:1 aspect ratio). The current `.logoImage` class in `Navbar.module.css` is likely sized for a square-ish logo — adjust the height constraint so the logo lockup reads cleanly at navbar height. Target: ~40–48px tall in the scrolled state, ~56px in the at-rest state. Adjust `.logo` and `.logoImage` styles in `Navbar.module.css` as needed.

If the SVG renders too large/small for the navbar slot, the `sizes` prop and CSS `max-height` on `.logoImage` are the main levers.

### Task 4.2 — Swap Footer logo to full lockup

File: `components/Footer.tsx`

Replace the existing footer logo with the full lockup:

```tsx
<Image
  src="/psc-logo-full.svg"
  alt="Promoted Sports Consultants"
  width={400}
  height={120}
  sizes="(max-width: 768px) 200px, 280px"
  className={styles.footerLogo}
/>
```

Adjust `.footerLogo` in `Footer.module.css` to size the wide lockup correctly. Likely changes: remove the `height: 80px` constraint and use `max-width` instead (e.g., `max-width: 280px; height: auto;`).

### Task 4.3 — Update Hero logo (if it still uses the PSC raster)

If Phase 2 has already shipped, the homepage Hero now uses a fresh layout — check `components/Hero.tsx` to see whether it still references `/promoted-soccer-consultants.png`. If yes, replace with the compact or full lockup depending on the design (full lockup typically reads better in a hero with breathing room). If Phase 2 already swapped the hero image to something else, leave it.

Also check `app/club-consulting/page.tsx` and `app/recruiting-services/page.tsx` — both currently use `/promoted-soccer-consultants.png` or `/fuse-id-logo.png` in their hero blocks. For `/club-consulting`, swap to the new full PSC lockup. For `/recruiting-services`, keep the FUSE-ID logo (that page is a co-branded surface — PSC + FUSE-ID).

### Task 4.4 — Swap favicon and app icons

Three files to replace at the root of `app/` and `public/`:

- `app/icon.png` → new 512×512 PSC compact mark on dark navy
- `app/apple-icon.png` → new 180×180 PSC compact mark on dark navy
- `public/favicon.ico` → multi-res ICO from PSC compact mark

Next.js auto-detects `app/icon.png` and `app/apple-icon.png` and wires them up — no metadata changes needed. The `favicon.ico` file in `public/` is the legacy fallback for older browsers; replace it but verify nothing in `app/layout.tsx` is overriding it with `manifest.json` references.

### Task 4.5 — Update OG image in metadata

File: `app/layout.tsx`

The metadata block currently references `/promoted-soccer-consultants.png` for OG and Twitter image. Replace with `/og-image.png` (the dedicated 1200×630 social share asset listed in the asset checklist):

```ts
images: [
  {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  },
],
```

Apply the same swap to the `twitter.images` array.

### Task 4.6 — Verify Schema `logo.url` still resolves

`app/layout.tsx` organizationSchema currently has:

```ts
logo: {
  '@type': 'ImageObject',
  url: `${SITE_URL}/promoted-soccer-consultants.png`,
},
```

Decide: keep the legacy URL pointing at a redirect, or update to `${SITE_URL}/psc-logo-full.png`. Recommended: **update to the new PNG path** (`/psc-logo-full.png`) so the organization schema cleanly points to the new brand identity. Search engines that fetch this URL will get the new logo.

### Task 4.7 — Apply `--accent-silver` to PSC parent surfaces

After Phase 2 ships, the homepage Hero and Products section are PSC-parent-brand surfaces. If those components currently use `--primary-green` for accent treatments (buttons, dividers, badges), evaluate whether one or two of those moments should switch to `--accent-silver` to assert the new parent-brand identity. Examples:

- A small "PARENT BRAND" or "PSC ECOSYSTEM" eyebrow tag above the hero H1
- The hairline divider between the hero and the Products section
- The badge color on the "PSC" mention in the Premium Services band

Keep this light — silver should feel like a refined accent, not a third dominant color competing with the existing green and gold. If in doubt, ship without and add silver moments later based on visual review.

### Task 4.8 — Delete the legacy PSC logo file

Once all references have been swapped:

```bash
rm public/promoted-soccer-consultants.png
```

Grep to confirm no remaining references:

```bash
grep -rn "promoted-soccer-consultants.png" app/ components/ public/
```

Should return zero matches outside of git history. If anything still references it, fix that before the delete.

### Task 4.9 — Cosmetic: package.json name

File: `package.json`

The `name` field currently reads `"promoted-soccer-consultants"`. This is internal to npm and doesn't affect anything customer-facing, but for consistency you can update it to `"promoted-sports-consultants"`. If you do, run `npm install` afterward to refresh `package-lock.json`. Skip this if you'd rather not generate churn in the lockfile.

---

## Acceptance criteria

- [ ] All eight asset files from the asset checklist are present in `public/` and `app/`
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run dev` smoke test: navbar shows new compact logo at correct size in both scrolled and at-rest states; footer shows new full lockup; hero on `/` and `/club-consulting` shows the new logo
- [ ] Browser tab favicon displays the new PSC mark (hard-refresh required to bust cache)
- [ ] Sharing the homepage on Slack/Twitter/iMessage shows the new OG image in the link preview
- [ ] View page source: organization schema's `logo.url` points to a valid PNG that renders the new logo when opened directly
- [ ] No remaining references to `/promoted-soccer-consultants.png` anywhere in `app/` or `components/`
- [ ] Legacy `public/promoted-soccer-consultants.png` file deleted
- [ ] Manual visual check on mobile (375px and 390px viewports) — new wide-format logo isn't squashed or overflowing

---

## Hand-off notes for the implementing agent

- The brand-name code sweep is already done (2026-05-13). Don't re-sweep customer-facing text. Confirm by running `grep -rn "Promoted Soccer Consultants" app/ components/ --include="*.tsx" --include="*.ts" | grep -v "promotedsoccerconsultants.com" | grep -v "LLC"` — it should return nothing.
- Logo aspect ratio is changing dramatically (legacy was 1024×1536 portrait, new is roughly 4:1 landscape). Most CSS sizing rules for the logo are based on height — review each component's logo CSS for hardcoded width/height that will break with the new ratio.
- Mind the bash-mount sync issue with the Write tool that surfaced in Phases 1 and 2 — if a long file gets truncated on disk after a Write, rewrite it via `cat > path <<'EOF'` in a bash command. Check `wc -l` after each Write on a long file.
- `next.config.js` has no redirect rules currently. If the legacy `/promoted-soccer-consultants.png` URL has external sites linking to it (e.g., social media posts), consider adding a 301 redirect to `/psc-logo-full.png` for graceful migration. Probably not necessary, but worth checking with Search Console or a backlink tool.
- The user's logo direction: silver/platinum ascending bars (three bars rising at increasing height) + upright bold sans-serif "PSC" wordmark. NOT italic (differentiates from FUSE-ID). The tagline "PROMOTED SPORTS CONSULTANTS" sits below "PSC" in the full lockup. Dark navy background in the source asset, but the PNG/SVG should have a transparent background so the logo lays cleanly on any surface.
