# Sprint work docs — PSC pivot to multi-sport platforms

This directory tracks the three sprints that convert promotedsoccerconsultants.com from a soccer-recruiting consultancy into a parent/portfolio site for the two platforms (FUSE-ID and Clubstack).

The audit and architectural plan that drove these sprints is in [`../PSC_WEBSITE_PIVOT_AUDIT_AND_PLAN.md`](../PSC_WEBSITE_PIVOT_AUDIT_AND_PLAN.md).

| # | Sprint | Status | Risk |
|---|---|---|---|
| 1 | [Clubstack page, Recruiting Services rebrand, navbar/footer/sitemap](./01_phase1_clubstack_and_recruiting_services.md) | ✅ Completed 2026-05-12 | Low (purely additive) |
| 2 | [Homepage repositioning](./02_phase2_homepage_repositioning.md) | ✅ Completed 2026-05-13 | Medium (brand-level changes) |
| 2.5 | [Logo wiring and brand asset refresh](./04_phase2_5_logo_wiring_and_brand_refresh.md) | ✅ Completed 2026-05-13 | Low (asset swap) |
| 3 | [FUSE-ID platform landing + /ai-assistant sunset](./03_phase3_fuse_id_platform_launch.md) | Ready (Phase 2 complete) | High (URL meaning flip, redirects) |

## How to use these docs

Each sprint doc is structured to be handed to an agent (Claude Code or another implementation assistant) as a single prompt. Open the doc, paste the contents (or `@-mention` the file in Claude Code), and the agent has enough context to execute the sprint without needing to re-read the audit plan.

Each doc contains: goal, scope, work breakdown with exact file paths, suggested copy, acceptance criteria, out-of-scope reminders, and hand-off notes.

## Sequencing rules

- Don't start Phase 2 until Phase 1 is merged and deployed.
- Phase 2.5 can run anytime after Phase 2 ships and the vector logo assets are produced. Recommended sequence: Phase 2 → Phase 2.5 → Phase 3, so the new brand identity is live before the FUSE-ID URL flip.
- Don't start Phase 3 until Phase 2 is merged, deployed, and `/recruiting-services` has taken at least one successful Stripe checkout (the new home for the consulting business).
- Phase 3 is the only sprint with redirect work — until it ships, `/ai-assistant` and the legacy `/fuse-id` consulting page remain live and untouched.

## Branch / deploy strategy (recommended)

- Each sprint = one feature branch + one PR.
- Run `npx tsc --noEmit` before opening the PR.
- Each PR should pass all "Acceptance criteria" checkboxes in its sprint doc.
- After deploy, manually smoke-test the URLs listed in the sprint's acceptance criteria.
