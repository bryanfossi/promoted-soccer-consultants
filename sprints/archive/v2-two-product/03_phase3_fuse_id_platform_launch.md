# Phase 3 — FUSE-ID platform landing page + /ai-assistant sunset

**Status:** BLOCKED on Phase 2
**Estimated effort:** 1 session (~4–5 hours)
**Prerequisites:** Phase 2 complete and merged. fuse-id.online is live for signups (confirmed 2026-05-12).
**Risk:** Highest of the three phases — flips the meaning of `/fuse-id` from consulting to platform, deletes a live page, and introduces redirects that touch SEO. Should only ship after Phase 2 is stable and `/recruiting-services` is verified taking Stripe traffic.

---

## Goal

Convert `/fuse-id` from its current state (selling the Basic / Premier / Elite consulting packages, $350–$5,000) into a SaaS product landing page for the FUSE-ID AI platform at fuse-id.online. Fold the `/ai-assistant` page's content into the new `/fuse-id` page as a section, then delete `/ai-assistant` and 301-redirect it to `/fuse-id`.

After this sprint, `/fuse-id` unambiguously sells the **platform**, `/recruiting-services` sells the **consulting**, and `/ai-assistant` no longer exists.

---

## Pre-flight checks before starting this sprint

1. Confirm `/recruiting-services` is live and has taken at least one successful Stripe checkout — that's the new home for the consulting business and it needs to be proven working before `/fuse-id` stops selling consulting.
2. Confirm fuse-id.online sign-up flow works end-to-end (account creation, free-tier match run, dashboard access).
3. Pull current Google Search Console data for `/fuse-id` and `/ai-assistant` — capture traffic, top keywords, and ranking positions so we can monitor post-launch.
4. Audit any external sites or Stripe links pointing at `/fuse-id` — those need to be updated to `/recruiting-services` before the meaning flips.

---

## Scope

**In scope**
- Rewrite `app/fuse-id/page.tsx` from consulting to SaaS platform
- Replace or augment `app/fuse-id/fuse-id.module.css` for the new page sections
- Merge the meaningful content from `app/ai-assistant/page.tsx` (chat preview UI, comparison grid, example FAQ questions) into the new `/fuse-id` as an "AI Assistant" section
- Delete `app/ai-assistant/` directory entirely
- Add a 301 redirect from `/ai-assistant` to `/fuse-id` (via `next.config.js`)
- Update `app/sitemap.ts` — remove the `/ai-assistant` entry, bump `/fuse-id` priority back to 0.9
- Verify all internal links pointing to `/ai-assistant` are removed (they were removed from Navbar in Phase 1; double-check there are no others)

**Out of scope**
- Any further homepage changes (Phase 2 owns that)
- Any further Navbar / Footer changes (Phase 1 owns that)
- Building new content for fuse-id.online itself — that's a product surface, not a marketing surface

---

## Work breakdown

### Task 3.1 — Rewrite `app/fuse-id/page.tsx`

Full replacement. The existing file is a consulting sales page; the new file is a SaaS product landing page.

**Suggested section order:**

1. **Hero**
   - H1: `AI college recruiting for every student athlete.`
   - Subhead: `From day one to decision day. Match scoring across 2,400+ programs, AI-drafted coach emails, full recruiting pipeline.`
   - Primary CTA: `Get started at fuse-id.online` → `https://fuse-id.online` (external)
   - Secondary CTA: `See how it works` (scroll anchor to features section)

2. **The problem**
   - H2: `Recruiting today: $5K consultants or fragmented spreadsheets. We changed that.`
   - Body copy: Universal access framing — same intelligence elite programs have, available to every family regardless of income.

3. **The platform — six feature blocks**

   | Tag | Feature | One-line |
   |---|---|---|
   | Match Engine | AI Match Engine | 8-dimension scoring across 2,400+ programs, classified as Lock / Realistic / Reach |
   | Outreach | AI Email Drafting | Personalized, program-specific coach emails generated from your profile in seconds |
   | Pipeline | My Schools | Kanban board, list view, and Top 10 — drag-and-drop pipeline management |
   | Comms | Communications Log | Every contact with every coach, with follow-up reminders that surface overdue items |
   | Offers | Offers Tracker | Side-by-side comparison with net-cost calculations and merit-aid estimates |
   | Profile | Public Profile + Parent Access | Shareable athlete URL + read-only board access for up to 2 parents |

4. **Sports coverage**
   - H2: `Built for every sport. Multi-sport from day one.`
   - Copy: `Launching in men's & women's soccer. Volleyball v1.1. Basketball, lacrosse, field hockey, baseball, softball, and track & field on the roadmap.`
   - Divisions: `NCAA D1, D2, D3 — NAIA — NJCAA — select Junior College.`

5. **Pricing**
   - Three tiers in a horizontal row:
     - **Free** — `$0`. `1 match engine run included. Full read access to the platform. No credit card.`
     - **Token Pack** — `$X per pack` (use placeholder if exact pricing isn't finalized). `Burst capacity for active recruiting. 1 token = 1 match run or 1 email draft batch.`
     - **Pro** — `$X / month`. `Unlimited match runs. Unlimited email drafts. AI Assistant included. Priority support.`
   - Pricing rationale line: `Free is fully functional. Token packs serve mid-process athletes. Pro serves active recruiters with multiple schools in motion.`

6. **AI Assistant** — **merged from `/ai-assistant`**
   - H2: `Your recruiting assistant. On-demand, 24/7.`
   - Reuse the existing chat-preview UI from `app/ai-assistant/page.tsx` (the `.chatPreview`, `.chatHeader`, `.chatMessages` etc. blocks) — port the JSX and the CSS into the FUSE-ID page module
   - Reuse the existing 4-feature grid (Full NCAA Rule Knowledge / PSC Methodology Built In / Available 24/7 / Conversational & Personalized)
   - Reuse the 6 example FAQ items
   - Reuse the "Why not just Google it?" three-card comparison
   - Reframe context: `The AI Assistant is included with FUSE-ID Pro and available as an add-on to the free tier.` (NOT "exclusive to enrolled FUSE-ID clients" — that was consulting-era language)
   - Update the `faqSchema` JSON-LD to point at the new URL

7. **Want a human in the loop?**
   - Single banded callout pointing to `/recruiting-services` — the upsell bridge
   - H3: `Want a former college coach guiding the process?`
   - Body: `Recruiting Services adds high-touch consulting to FUSE-ID. Basic, Premier, and Elite packages.`
   - CTA: `See Recruiting Services →` → `/recruiting-services`

8. **Final CTA**
   - H2: `Ready to start?`
   - Primary CTA: `Get started at fuse-id.online` (external)
   - Subtext: `No credit card. 1 match run included with every account.`

9. **Disclaimer block** (preserve the "Important: What We Don't Do" notice from current page, reframed for the platform)
   - FUSE-ID is an education tool, doesn't guarantee outcomes, **doesn't send emails on behalf of athletes** (per PDD section 5.5 — the platform generates drafts; sending is always the athlete's action).

**Schema updates:**

- Replace the current `Service` JSON-LD with a `SoftwareApplication` schema (same structure as `/clubstack` — see `app/clubstack/page.tsx` for the pattern).
- Update breadcrumb name from "FUSE-ID Recruiting" to "FUSE-ID".
- Update canonical, OG title, OG description, Twitter card.

**Metadata copy:**

- Title: `FUSE-ID — AI College Recruiting Platform`
- Description: `Match scoring across 2,400+ programs, AI-drafted coach emails, full recruiting pipeline. Multi-sport.`

### Task 3.2 — Replace/augment `app/fuse-id/fuse-id.module.css`

The existing module has styling for the consulting page (packages grid, package cards, $price formatting, "Already Enrolled" box, recruiting website section). Most of this is no longer needed.

Recommended approach:
- Save the existing file as `fuse-id.module.css.old` in the same directory (do NOT commit; this is for your own reference during rewrite)
- Replace the module file with new styles for the platform page sections
- Reuse class naming patterns from `app/clubstack/clubstack.module.css` — same design system, same color tokens, same responsive breakpoints
- Port the AI Assistant section's CSS from `app/ai-assistant/ai-assistant.module.css` (the chat preview, comparison grid, example FAQ styles)

### Task 3.3 — Delete `app/ai-assistant/`

Once the AI Assistant content is fully merged into `/fuse-id`:

```
rm -rf app/ai-assistant/
```

(`page.tsx` and `ai-assistant.module.css` — that's the whole directory.)

### Task 3.4 — Add the 301 redirect

In `next.config.js`, add:

```js
async redirects() {
  return [
    {
      source: '/ai-assistant',
      destination: '/fuse-id',
      permanent: true,
    },
  ]
}
```

If `next.config.js` already exports a config object, merge `redirects` into the existing config rather than overwriting.

### Task 3.5 — Update `app/sitemap.ts`

- Remove the `/ai-assistant` entry
- Bump `/fuse-id` priority from 0.85 (set in Phase 1) back to 0.9

### Task 3.6 — Verify no stale internal links to `/ai-assistant`

Run a grep across the repo:

```bash
grep -r "/ai-assistant" app/ components/ --include="*.tsx" --include="*.ts"
```

Expected result after Phase 3: no matches outside the `next.config.js` redirect entry. The Navbar's "AI Assistant" link was already removed in Phase 1; this is a sanity check.

---

## Acceptance criteria

- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `/fuse-id` renders end-to-end as a SaaS landing page — Hero, Problem, 6 features, Sports coverage, Pricing, AI Assistant section, Recruiting Services callout, Final CTA, Disclaimer
- [ ] Hero "Get started at fuse-id.online" CTA opens fuse-id.online in a new tab
- [ ] `/ai-assistant` no longer exists in `app/`
- [ ] Visiting `/ai-assistant` in the browser issues a 301 redirect to `/fuse-id` (verify via curl `-I` or browser network tab)
- [ ] Sitemap no longer contains `/ai-assistant`
- [ ] FAQ schema, breadcrumb schema, and SoftwareApplication schema all present and valid in the new `/fuse-id` page source
- [ ] No internal links to `/ai-assistant` remain anywhere in `app/` or `components/`
- [ ] Stripe checkout flow on `/recruiting-services` still works (regression check — Phase 3 should not have touched this)
- [ ] Manual smoke test of all pages: `/`, `/fuse-id`, `/clubstack`, `/recruiting-services`, `/club-consulting`, `/free-resources`, `/blog`, one blog post

---

## Post-launch tasks (not required to ship, but do them within a week)

1. Submit updated sitemap to Google Search Console.
2. Watch `/ai-assistant` traffic in GSC — once Google has fully crawled the redirect (~2–4 weeks), the URL should drop out of the index and pageRank should consolidate onto `/fuse-id`.
3. Watch `/fuse-id` for ranking shifts. Brief dip in ranking on a page rewrite is normal; should recover within 4–8 weeks if content is comparable.
4. Update any external links — old blog post syndications, social profiles, business directory listings — that point to `/ai-assistant` or to `/fuse-id` expecting consulting content.

---

## Hand-off notes for the implementing agent

- **Read Phase 1's sprint doc first** (`sprints/01_*.md`) for brand naming context and what's already in place.
- The site has working examples to model after. `/clubstack` (built in Phase 1) is the closest reference for a SaaS-style landing page — section structure, schema markup, CTA patterns, responsive design. Read `app/clubstack/page.tsx` and `app/clubstack/clubstack.module.css` before writing the new `/fuse-id`.
- The `/recruiting-services` page (also built in Phase 1) is the closest reference for an upsell callout from `/fuse-id` — the "How this fits with FUSE-ID" fit-block can be adapted in reverse.
- Stripe payment links currently on the old `/fuse-id` page **must not** appear anywhere on the new `/fuse-id` — they belong only on `/recruiting-services`. Double-check before merge.
- Don't truncate via `sed` or partial-line replacement — the file is being entirely rewritten. Use a full write.
- Bryan's working domain links: `fuse-id.online` (platform — live), `clubstack.online` (alpha), and the calendar link `https://calendar.app.google/96Z4Kgp9mLh35sMj9` (consultations).
