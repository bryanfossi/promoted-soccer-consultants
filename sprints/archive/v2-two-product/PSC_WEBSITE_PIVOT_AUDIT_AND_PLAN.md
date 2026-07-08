# promotedsoccerconsultants.com — Pivot Audit & Update Plan

**Author:** Drafted with Claude for Bryan Fossi
**Date:** 2026-05-12
**Source documents:** FUSE-ID PDD v1.0, Clubstack PDD v2.0
**Decisions captured upfront:**

- PSC.com becomes a **parent/portfolio hub** routing visitors to the two platforms
- **Clubstack is positioned multi-sport from day one** (marketing-aspirational; V1 build is soccer-first)
- **Legacy 1:1 services are kept**, repositioned as a premium tier alongside FUSE-ID

---

## 1. Executive summary

The current PSC site is structured around a **soccer recruiting consultancy** with two service lines: Club Consulting and FUSE-ID Recruiting Services ($350 / $2,500 / $5,000 packages). The word "FUSE-ID" is currently doing double duty — it's both the name of the consulting packages on PSC.com **and** the AI platform at fuse-id.online (linked from the nav as "AI Assistant"). The Clubstack product has no presence on the site at all.

The pivot requires three coordinated shifts:

1. **Re-position the home page** from "soccer recruiting consulting" to "two multi-sport platforms backed by PSC's recruiting expertise."
2. **Disambiguate the FUSE-ID brand.** FUSE-ID is now the AI platform. The consulting packages currently labeled "FUSE-ID Basic/Premier/Elite" need to be renamed (proposed: **PSC Recruiting Services** — Basic / Premier / Elite) so FUSE-ID is unambiguously the product.
3. **Add Clubstack** as a first-class product with its own landing page on PSC.com, pointing to clubstack.online for sign-up.

Most of the existing code is reusable — the design system, Navbar, Footer, blog, and free-resources infrastructure are solid. The work is primarily **content, IA, and two new product landing pages**, not a rebuild.

---

## 2. Current site audit

### 2.1 Information architecture (today)

```
/                           Home (soccer recruiting consultancy)
  ├── Hero                  "College Soccer Recruiting Guidance for Clubs, Players, and Families"
  ├── Services              Club Consulting + FUSE-ID Recruiting Services (two cards)
  ├── WhyUs
  ├── Resources             Topics list + newsletter
  ├── About                 Bryan Fossi credentials
  └── CTA                   Schedule consultation

/club-consulting            Club Consulting service page (6 service cards, "Who we work with")
/fuse-id                    FUSE-ID Recruiting Services — Basic $350 / Premier $2,500 / Elite $5,000
/ai-assistant               PSC AI Assistant — locked behind FUSE-ID packages, links to fuse-id.online
/free-resources             Lead-magnet page
/blog                       8 soccer-recruiting articles
/chat                       (exists, not reviewed)

Nav: Services dropdown (Club Consulting, FUSE-ID Recruiting Services), AI Assistant
     (→ fuse-id.online), Free Resources, Blog, Why Us, About, Get Started CTA
```

### 2.2 What works well and should be preserved

- **Design system** — Crimson Pro + Work Sans, the muted/sober palette, the "30 minutes · Free · No pitch" CTA voice. This tone is on-brand and should carry through.
- **SEO scaffolding** — `app/layout.tsx` has solid JSON-LD (`Person`, `Organization`, `WebSite`, `ProfessionalService`), canonicals, OG, robots, sitemap, Google verification token. Don't lose any of this.
- **Component reuse pattern** — `Navbar`, `Footer`, `Hero`, `CTA`, `WhyUs`, `About` are clean, modular, and reusable as-is or with small content edits.
- **Honesty positioning** — "No false hope," "We don't guarantee scholarships," disclaimer in footer. This is a moat — keep it everywhere FUSE-ID Services and Clubstack are sold.
- **Blog content** — 8 well-written soccer recruiting articles. Strong organic SEO surface; the slugs and content stay valid.
- **Newsletter / Mailchimp integration** — working and converting; keep it.

### 2.3 What's misaligned with the new direction

| Surface | Current state | Issue |
|---|---|---|
| Homepage Hero | "College Soccer Recruiting Guidance for Clubs, Players, and Families" | Soccer-only. No mention of FUSE-ID or Clubstack as products. No multi-sport signal. |
| Services section | Two cards: Club Consulting + FUSE-ID Recruiting Services | Missing Clubstack entirely. "FUSE-ID Recruiting Services" branding conflicts with the AI platform also called FUSE-ID. |
| Navbar | Services dropdown lists "Club Consulting" + "FUSE-ID Recruiting Services". External "AI Assistant" link to fuse-id.online. | Doesn't surface Clubstack at all. AI Assistant placement implies it's a feature of consulting, not the flagship product. |
| `/fuse-id` page | Sells $350 / $2,500 / $5,000 consulting packages, then has a small "Already enrolled? Access FUSE-ID dashboard" callout at fuse-id.online | The page sells the consulting product but uses the platform's name. In the new model, `/fuse-id` should be the **platform landing page** (free / token / Pro), and the consulting packages should live at a separate URL (e.g. `/services`). |
| `/ai-assistant` page | Positioned as a feature unlocked by buying a "FUSE-ID package" | In the new model, the AI Assistant is **a feature of FUSE-ID the platform**, not a perk of consulting. Page either rolls into `/fuse-id` or repositions as "included with FUSE-ID Pro." |
| `/club-consulting` page | Six service cards including "IT Solutions & Automation" and "Club Recruiting Services" | The "IT Solutions" card and "Club Recruiting Services" card are exactly what **Clubstack** now solves. These should be replaced with a "Looking for club management software? See Clubstack →" callout, with the remaining strategic-consulting services preserved. |
| Footer | "FUSE-ID is a college recruiting education and consulting program operated by Promoted Soccer Consultants, LLC" | Disclaimer language assumes FUSE-ID is the consulting product. Needs to be updated to disclaim **the consulting services** (under their new name) and add appropriate language for FUSE-ID-the-platform and Clubstack. |
| Schema markup | `Service` schema on `/fuse-id` describes "PSC's college soccer recruiting program" | Becomes outdated. New `/fuse-id` page describes a SaaS product, not a consulting service. |
| Copyright year | 2024 | Should be 2026. |
| All page copy | "Soccer," "soccer clubs," "soccer recruiting" throughout | Inconsistent with the multi-sport positioning. Needs a deliberate sweep where the platforms are pitched as multi-sport while preserving Bryan's personal soccer credentials in About. |

### 2.4 The FUSE-ID naming problem (must resolve before any copy is written)

Today, "FUSE-ID" is used three different ways:

1. **`/fuse-id` page** — refers to the consulting packages ($350 / $2,500 / $5,000)
2. **`fuse-id.online` external** — refers to the actual AI platform (the product described in the new PDD)
3. **Stripe checkout links and Google Calendar booking** — currently routes families into the consulting service

The new PDD makes FUSE-ID unambiguously the AI platform. The consulting tier is referenced inside the Clubstack PDD as "**FUSE-ID Services** — $350–$5,000 per family — the monetization event." So the PDDs collectively are saying:

- **FUSE-ID** = the AI platform (free / token / Pro)
- **FUSE-ID Services** = the human-delivered consulting upsell sold inside the FUSE-ID experience

I think calling the consulting packages "FUSE-ID Services" continues to risk confusion. Two options to consider:

- **Option A — Use "FUSE-ID Services" as written in the PDD.** Pro: matches the PDD verbatim. Con: families browsing the site may not understand whether they're buying software, a consultant, or both. Risk of conflating with the free-tier FUSE-ID platform.
- **Option B — Rename to "PSC Recruiting Services"** (or similar — "PSC Premium Recruiting," "PSC 1:1 Recruiting"). Pro: clear separation between FUSE-ID the platform and PSC the human service. Maintains the PSC brand as the premium / human layer above the products. Con: deviates from PDD naming.

**My recommendation: Option B**, with FUSE-ID exclusively meaning the platform. Final call is yours.

---

## 3. Recommended new information architecture

```
/                                  Home (PSC parent/portfolio hub)
  ├── Hero                         New: "Multi-sport recruiting and club operations, from a coach who's done both."
  ├── Two-product showcase         FUSE-ID card + Clubstack card (replaces Services section)
  ├── Premium services band        Smaller third row: "Want hands-on guidance? See PSC Recruiting Services"
  ├── WhyUs                        Lightly updated for multi-sport tone
  ├── Resources                    Newsletter (keep)
  ├── About                        Bryan's credentials (preserve)
  └── CTA                          Schedule consultation (preserve)

/fuse-id                           NEW: FUSE-ID PLATFORM landing page (replaces current consulting page)
                                   Sells the AI platform. Free / Tokens / Pro tiers. CTAs go to fuse-id.online.
                                   Multi-sport: soccer at launch, volleyball next, sports roadmap visible.

/clubstack                         NEW: Clubstack landing page
                                   Sells the club platform. Six pricing tiers. CTA goes to clubstack.online.
                                   Multi-sport positioning. Recruiting-integration differentiator highlighted.

/services                          NEW (or /recruiting-services): the renamed consulting packages
                                   Repositions Basic / Premier / Elite as the premium human tier.
                                   Targets families who want a consultant alongside (or instead of) FUSE-ID.

/club-consulting                   Preserved but trimmed
                                   Strategic-consulting card stays; "IT Solutions" and "Club Recruiting" cards
                                   replaced with a Clubstack callout.

/ai-assistant                      Decision needed:
                                   Option 1: Merge into /fuse-id as a feature section
                                   Option 2: Keep, reposition as "What FUSE-ID's AI Assistant does"
                                   Option 3: Sunset (301 → /fuse-id)
                                   Recommended: Option 1 (merge) — reduces nav clutter.

/free-resources                    Preserved.
/blog                              Preserved. Future posts can be multi-sport when relevant.
/chat                              Preserved (not yet reviewed in detail).
```

### Navbar (proposed)

```
Logo | Products ▾ (FUSE-ID, Clubstack) | Services ▾ (PSC Recruiting Services, Club Consulting)
     | Free Resources | Blog | About | [Get Started]
```

### Footer (proposed structure)

```
Products: FUSE-ID, Clubstack
Services: PSC Recruiting Services, Club Consulting
Education: Free Resources, Blog
Contact: Email, Schedule Consultation
Disclaimer: Updated to cover FUSE-ID (software), Clubstack (software), and PSC Recruiting Services
            (human consulting) separately.
```

---

## 4. Page-by-page change plan

### 4.1 Homepage (`app/page.tsx` + child components)

**Hero (`components/Hero.tsx`)**
- New H1 (proposed): *"Recruiting and club operations, redesigned for every sport."*
- Subhead: *"PSC builds the tools families and clubs actually need — FUSE-ID for college recruiting, Clubstack for running a club. Backed by a coach who's done both."*
- Primary CTA: "Explore the platforms" (anchor → product showcase)
- Secondary CTA: "Schedule a free consult" (existing Calendar link)
- Subtext: keep "30 minutes · Free · No pitch"
- Logo image: keep PSC logo for now; in a later phase consider a hero composition that visually represents both products.

**Replace `Services` with `Products` section (`components/Products.tsx`, new)**
Two equally weighted product cards:

- **FUSE-ID** — "AI-powered college recruiting for athletes and families. Every sport, every division, every income level. Free to start." → `/fuse-id`
- **Clubstack** — "Run your club. Not your inbox. Registration, payments, rosters, schedules, communication, and the only recruiting integration on the market — built for multi-sport clubs." → `/clubstack`

**New `PremiumServices` band (`components/PremiumServices.tsx`)**
- Smaller, single-row strip below Products:
  - "**Want hands-on guidance?**" + a one-liner about PSC Recruiting Services (Basic / Premier / Elite) and Club Consulting → `/services` and `/club-consulting`

**`WhyUs`** — Light copy edit. Move from "soccer landscape" to "youth sports landscape." Bryan's coaching context stays soccer-specific in About (it should — that's his credibility) but the brand-level "why us" can read multi-sport.

**`About`** — Keep credentials verbatim (they're true and they're the trust anchor). Add one line that bridges from soccer-specific experience to the multi-sport mission: *"What started in soccer is built to serve every sport — because the recruiting and club-operations problems we solve are universal."*

**`CTA`** — Keep, retitle to *"Not sure where to start?"* with the free consult CTA.

**Resources / Newsletter** — Preserve untouched.

### 4.2 `/fuse-id` — replace existing page

This page is being **rewritten from a consulting sales page to a SaaS product page**. Significant change.

Suggested sections, in order:

1. **Hero** — "AI college recruiting for every student athlete. From day one to decision day." CTA: "Start free at fuse-id.online" (primary, external) + "See how it works" (secondary, scroll).
2. **The problem** — Recruiting today: $5K consultants or fragmented spreadsheets. FUSE-ID gives every family the same intelligence the elite programs have.
3. **The platform** — Six feature blocks for the headline modules from the PDD:
   - AI Match Engine — 8-dimension scoring across 2,400+ programs
   - AI Email Drafting — personalized, program-specific outreach
   - My Schools pipeline — Kanban, list, top 10 views
   - Communications log — full recruiting history with follow-up reminders
   - Offers Tracker — net-cost comparisons and merit-aid estimates
   - Public profile + parent access — shareable URL, read-only family view
4. **Sports coverage** — "Launching in men's & women's soccer. Volleyball next. Basketball, lacrosse, field hockey, baseball, softball, and track & field on the roadmap." (Aligns with the PDD's Sport Expansion Framework.)
5. **Pricing** — Free tier (1 match run, full read access) / Token packs (burst capacity) / Pro (unlimited). All clarified per the PDD's Monetization Model.
6. **AI Assistant** — Inline feature section (merging the current `/ai-assistant` page content).
7. **"Want a human in the loop?"** — Callout linking to `/services` (PSC Recruiting Services — Basic / Premier / Elite). This is the upsell bridge.
8. **CTA** — "Start free at fuse-id.online"
9. **Disclaimer block** — Education tool; doesn't guarantee outcomes; FUSE-ID does not send emails on behalf of athletes (per PDD section 5.5).

Update `serviceSchema` JSON-LD from `Service` to `SoftwareApplication` or `Product` with appropriate fields. Update canonical/OG title and description.

### 4.3 `/clubstack` — net new page

New file: `app/clubstack/page.tsx` + `app/clubstack/clubstack.module.css`. Suggested sections:

1. **Hero** — "Run your club. Not your inbox." (lifted from the PDD verbatim — strong line.) CTA: "Sign up free at clubstack.online" + "See the demo" (secondary; we can stub this to a 15-min calendar link until real demo exists).
2. **The problem** — Four pain blocks from the PDD: GotSport is bloated, payments are manual, communication is fragmented, no recruiting visibility.
3. **The platform** — Five core modules (Registration, Payments, Roster, Scheduling, Communication) + two add-ons (Tryout Evaluation, Roster Builder) + the **Recruiting Integration Module** as a highlighted differentiator.
4. **The signature feature** — The Master Schedule facility-grid view with a screenshot / illustration. This is the visual hook the PDD identifies.
5. **Built for every sport, every level** — Competitive, high school, and recreational. **This is where the multi-sport positioning is asserted.** Mention the soccer-first build context lightly ("Built initially with competitive soccer clubs — extending to every youth sport") if you want to maintain integrity with the V1 reality.
6. **The PSC differentiator** — "The only club platform with a recruiting integration layer. Because no competitor is in the recruiting business."
7. **Pricing** — Six-tier table from the PDD: Free / Team $49 / Starter $129 / Club $249 (Most Popular, recruiting unlocks) / Academy $449 / Enterprise. Annual discount ~15%.
8. **Competitive comparison** — Optional but valuable; the PDD has a clean Clubstack-vs-GotSport-vs-TeamSnap-vs-Band-vs-SportsEngine table.
9. **CTA** — "Start free at clubstack.online" (primary) + "Talk to Bryan about a pilot" (secondary, calendar link).

Add `SoftwareApplication` JSON-LD schema, canonicals, OG.

### 4.4 `/services` (or `/recruiting-services`) — repositioned consulting page

Essentially the content of the current `/fuse-id` page, **rebranded**:
- Rename throughout: "FUSE-ID Basic/Premier/Elite" → "PSC Recruiting Services — Basic / Premier / Elite" (or whatever final name you choose)
- Reframe the value prop: "FUSE-ID does most of the recruiting work for you. PSC Recruiting Services adds a coach in your corner for everything FUSE-ID can't do."
- The $199 Player Recruiting Website remains, but the page should mention FUSE-ID already has a public profile feature — so PSC Recruiting Services' recruiting website is the **white-glove, branded, custom-domain** version for families paying for the high-touch tier.
- Stripe checkout links and Google Calendar booking links **all stay intact** — they continue to work the same way.
- "Already enrolled? Access your FUSE-ID dashboard" callout stays — but reframed: "All PSC Recruiting Services clients get FUSE-ID Pro included."
- The current `/fuse-id` URL should 301 redirect to `/services` (or keep `/fuse-id` for the platform and put services at a new URL — depends on which URL has more SEO equity, worth a quick check in Google Search Console).

### 4.5 `/club-consulting` — trim and cross-link

Keep five of the current six service cards. **Remove or replace these two:**

- "IT Solutions & Automation" — Clubstack now solves this. Replace with a Clubstack callout: "Looking for club management software? Check out Clubstack →"
- "Club Recruiting Services" — Replace with: "Want club-wide recruiting visibility? Clubstack's Recruiting Integration Module surfaces every player's status. See Clubstack →"

The remaining four cards (Strategic Planning & Club Audits, Coach Education & Support, Player Pathway Alignment, Parent Communication Frameworks) stay as Bryan's **human, strategic consulting** offering — the equivalent of "PSC Recruiting Services" for clubs.

Also: change soccer-specific language to sport-agnostic in headers and the "Who We Work With" section. Bryan's coaching context (soccer) stays in About; the consulting capability itself is sport-agnostic.

### 4.6 `/ai-assistant`

**Recommendation: merge into `/fuse-id`** and 301 redirect `/ai-assistant` → `/fuse-id#ai-assistant`. The chat-preview UI on the current page is a nice visual and should be carried over into the FUSE-ID page section.

If you prefer keeping it standalone, reframe it as "An inside look at FUSE-ID's AI Assistant" with clear product context (it's included with Pro, free tier gets X queries, etc.).

### 4.7 `/free-resources`, `/blog`

No structural changes required. Two small updates worth doing:

- `/free-resources` — update the body copy to mention that PSC now powers two platforms; the resources remain free regardless.
- `/blog` — no changes needed now. Future posts can cover Clubstack topics (running tryouts, recruiting integration, etc.) and multi-sport recruiting when those are relevant.

### 4.8 Layout / schema (`app/layout.tsx`)

- Update `DEFAULT_DESCRIPTION` to reflect the platform pivot.
- Add `Product` / `SoftwareApplication` schema for FUSE-ID and Clubstack at the page level (already covered above).
- The site-wide `ProfessionalService` schema currently describes the consulting business — consider expanding to `Organization` with multiple sub-services or adding individual `SoftwareApplication` records per product.
- Verify `sameAs` array; add `https://fuse-id.online` and `https://clubstack.online` so the entities are linked.

### 4.9 Footer

- Reorganize sections per the IA in section 3.
- Update copyright to 2026.
- Replace the existing disclaimer with three short paragraphs — one for FUSE-ID (software, educational tool, no guarantees), one for Clubstack (software, club operations tool), one for PSC Recruiting Services (human consulting, no agent relationship, NCAA-compliant education). The current language is good — just split it across the three products.

### 4.10 Sitemap and robots

- `app/sitemap.ts` — Add `/clubstack` and `/services` (or whatever the new consulting URL becomes). Remove or 301 anything that's being collapsed.
- Verify `app/robots.ts` still allows crawling of everything you want indexed.

---

## 5. Phased rollout (recommended)

I'd ship this in three phases rather than one big-bang launch, so you don't go dark on SEO during the transition and so you can pilot Clubstack messaging without committing the whole brand.

**Phase 1 — Foundation (1–2 days of code work)**
1. Add `/clubstack` page (new — has no SEO history to disrupt).
2. Add `/services` page (the renamed consulting packages — clone of current `/fuse-id` with rebrand).
3. Keep current `/fuse-id` live as-is for now — don't break Stripe links or Google Calendar bookings.
4. Add Clubstack callouts on `/club-consulting`.
5. Update navbar to surface Clubstack.

**Phase 2 — Homepage repositioning (1 day)**
6. Rewrite homepage Hero, replace Services component with Products + PremiumServices.
7. Update WhyUs / About / Footer for multi-sport tone.
8. Update layout metadata and schemas.

**Phase 3 — FUSE-ID page transition (1 day, after Phase 1 confidence)**
9. Rewrite `/fuse-id` from consulting sales page to platform landing page.
10. Merge `/ai-assistant` content into the new `/fuse-id`.
11. Set up 301 redirects: old `/fuse-id` URL hash anchors → new `/services` if needed, `/ai-assistant` → `/fuse-id`.
12. Update sitemap.

Reason for staging: Phase 1 is purely additive — nothing breaks. Phase 2 is brand-level but the legacy product pages still work. Phase 3 is where you actually flip the FUSE-ID URL meaning, which is the highest-risk SEO/Stripe-link change.

---

## 6. Decisions needed before implementation

These are the choices I need from you before I start writing code:

1. **Consulting brand rename.** Stay with "FUSE-ID Services" per the PDD, or rename to "PSC Recruiting Services" (or another name) to fully separate the human consulting tier from FUSE-ID the platform? **My recommendation: rename.**

2. **URL for the consulting page.** If we rename, the new URL is most naturally `/services` or `/recruiting-services`. Which do you prefer? And do you want the old `/fuse-id` URL repurposed for the platform (best for SEO if the platform is the long-term flagship) or kept for the consulting (best for preserving existing Stripe/Calendar links)?

3. **AI Assistant page fate.** Merge into `/fuse-id` (recommended), keep as standalone, or sunset?

4. **Clubstack multi-sport language calibration.** Three options for tone:
   - (a) Pure multi-sport voice everywhere — never mention soccer
   - (b) Lead multi-sport; mention "built initially with competitive soccer clubs" in one place as a credibility marker
   - (c) Sport-agnostic on the surface, soccer-specific in the pricing tier descriptions
   I'd recommend **(b)** — it's the most honest given the V1 build is soccer-specific, and Bryan's coaching credentials are soccer-anchored.

5. **Demo / pilot intake for Clubstack.** The Clubstack landing page needs a secondary CTA next to "Sign up free at clubstack.online." Options: 15-min calendar booking with Bryan, a separate "Pilot club inquiry" form, or just a contact email. What's the right intake channel for the founding-clubs phase of GTM?

6. **What's the launch state of fuse-id.online?** The PDD describes the platform in detail but does it actually have a working free-tier sign-up today? If not, the FUSE-ID landing page on PSC.com should have a "Join the waitlist" capture instead of an "Start free" CTA — and we shouldn't ship Phase 3 until the platform is live.

7. **What's the launch state of clubstack.online?** Same question. The PDD lists a 6-sprint build plan — is the product live for sign-up, in pilot, or pre-launch? This determines whether the CTA is "Start free" or "Join the waitlist / Request pilot access."

---

## 7. What I'd build first if you tell me to start now

If we proceed straight to code after you answer the questions above, the first PR I'd open is **Phase 1, Step 1: the `/clubstack` page**, because:

- It's purely additive — zero risk to the existing site.
- It's the most differentiated change (Clubstack has no current presence on the site at all).
- It exercises the design system in a new context, which surfaces any styling issues early.
- It can be reviewed and iterated on independently of the homepage rewrite.

After that, the order is: `/services` (rename) → navbar/footer → homepage → `/fuse-id` rewrite.

---

## Appendix — Files touched in this plan

```
NEW
  app/clubstack/page.tsx
  app/clubstack/clubstack.module.css
  app/services/page.tsx                 (or chosen URL)
  app/services/services.module.css
  components/Products.tsx               (replaces Services.tsx for the homepage)
  components/Products.module.css
  components/PremiumServices.tsx
  components/PremiumServices.module.css

EDITED
  app/page.tsx                          (swap Services for Products + PremiumServices)
  app/fuse-id/page.tsx                  (rewrite as platform landing page in Phase 3)
  app/fuse-id/fuse-id.module.css        (likely additions for new sections)
  app/club-consulting/page.tsx          (trim 2 service cards, add Clubstack callouts)
  app/ai-assistant/page.tsx             (sunset or repurpose)
  app/layout.tsx                        (metadata + schema updates)
  app/sitemap.ts                        (add new routes)
  components/Navbar.tsx                 (Products dropdown, Services dropdown)
  components/Footer.tsx                 (reorganized + 2026 + tri-product disclaimer)
  components/Hero.tsx                   (new headline + CTAs)
  components/WhyUs.tsx                  (multi-sport tone)
  components/About.tsx                  (one bridge sentence to multi-sport)

PRESERVED AS-IS
  app/blog/**
  app/free-resources/**
  app/chat/**
  components/Resources.tsx
  components/CTA.tsx
  app/robots.ts
  All public/ assets
```
