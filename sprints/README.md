# PSC v3 rebuild — sprint set (three-product)

Converts promotedsoccerconsultants.com into the parent/portfolio hub for the **three-product** suite — **FUSE-ID**, **ClubStack**, **Ask The Gaffer** — plus the subordinate human-services tier. Supersedes the two-product sprints now archived in [`archive/v2-two-product/`](archive/v2-two-product/) (kept browsable, not deleted; old Sprint 3 is absorbed into Sprint C).

**Authoritative brand:** [`../CLAUDE.md`](../CLAUDE.md) (session rules) and [`../docs/brand/`](../docs/brand/) — master kit + per-product kits. Every sprint reconciles to those, never to legacy code.

| # | Sprint | Focus | Risk |
|---|---|---|---|
| A | [Foundation](./A_foundation_tokens_and_type.md) | Tokens, typography (Archivo + Inter), tagline/CTA copy | Medium (sitewide tokens/fonts) |
| B | [Third product](./B_ask_the_gaffer_page.md) | Net-new `/ask-the-gaffer` page + nav/footer/sitemap | Low (additive) |
| C | [FUSE-ID flip](./C_fuse_id_platform_flip.md) | `/fuse-id` → SaaS platform page; `/ai-assistant` 301 | High (URL meaning flip) |
| D | [Homepage suite](./D_homepage_suite_rebuild.md) | Three-tool hero, product sections, ecosystem triangle | Medium |
| E | [Services + sweep](./E_services_and_naming_sweep.md) | v3 copy into services routes; sitewide naming sweep | Medium |
| F | [SEO / QA](./F_seo_and_qa.md) | JSON-LD, sitemap, redirect map, build/QA | Low |

## Sequencing
- Run in order **A → F**. A establishes tokens/type the later sprints depend on.
- B is additive and could run any time after A, but nav/sitemap it touches are re-touched in D/E — keep the order to avoid churn.
- C absorbs the old two-product Sprint 3 (FUSE-ID flip + `/ai-assistant` sunset) — do not ship the archived version.
- E owns the sitewide `Clubstack → ClubStack` casing sweep and the packages/platform naming reconciliation.
- **Commit each sprint separately. Summarize after each sprint before starting the next.**

## Conventions
- One feature branch + one commit (or PR) per sprint.
- `npm run build` clean before hand-off; run acceptance criteria checkboxes.
- CSS Modules, not Tailwind. Use tokens from `app/globals.css`.
