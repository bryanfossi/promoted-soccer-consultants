# PSC Homepage — Brand & Content Compliance Audit

**Page audited:** Homepage (`app/page.tsx` → live preview `/#why-us`)
**Date:** 2026-07-08
**Rulebook:** `CLAUDE.md` + `docs/brand/psc-brand-kit.md`
**Verdict:** Strong compliance. Naming, legal entity, typography, palette scoping, and disclaimers are clean. Six items to address — none critical, mostly voice/claims risk and one subordinate-tier positioning call.

---

## What's compliant (verified)

- **Naming traps** — Product names exact (FUSE-ID, ClubStack, Ask The Gaffer). Human packages correctly labeled **Recruiting Services** with tiers **Basic $350 / Premier $2,500 / Elite $5,000** — never called FUSE-ID.
- **Legal entity vs. display brand** — Display "Promoted Sports Consultants" in title/nav; legal "Promoted Soccer Consultants, LLC" used only in disclaimers + copyright. Intentional mismatch preserved correctly.
- **Typography** — `layout.tsx` loads Archivo + Inter sitewide; `.serif` class renders Archivo (not a serif), per the PSC.com rule. No product fonts (DM Sans/Barlow) loaded.
- **Accent-palette scoping** — Parent surfaces (suite intro, ecosystem, founder, services) use master `--accent-gold #C9A227` + `--primary-green #1A3A5C`. Product sections use their own accents on their own surfaces: ClubStack navy/gold on white, Ask The Gaffer amber (`--atg-*` tokens match the kit) on dark, FUSE-ID green with text-on-green gated to `#052E16`. All correct.
- **Division specificity** — "D1, D2, D3, NAIA, NJCAA" spelled out, never lumped.
- **DM trigger words** — No **PATHWAY** on the page (good — it's not active in N8N). No misused triggers.
- **Disclaimers** — Full FUSE-ID / ClubStack / Recruiting Services + Club Consulting disclaimers present in footer with "no guarantee of scholarships/roster/outcomes" language.
- **Per-section CTAs** — Each product section carries exactly one buyer-appropriate CTA (ClubStack→waitlist, Gaffer→waitlist, FUSE-ID→Start free).

---

## Issues to address

### 1. MEDIUM — Consulting is elevated into the hero (subordinate-tier rule)
The hero's secondary button is **"Schedule Consultation"** (→ Google calendar), sitting alongside "Explore the products" as one of two primary CTAs.
CLAUDE.md: *"Products lead all marketing; human services are a subordinate tier — never lead suite-level content with them."* The hero is the most prominent suite-level surface. The "30 min · Free · No pitch" framing softens it, but a consulting/booking ask still shares top billing with the product ask.
**Fix:** Make the hero single-CTA (product-led), or swap the secondary for a product route (e.g., "See how it works"). Keep the consultation CTA in the subordinate services strip lower on the page.

### 2. MEDIUM — Unsubstantiated absolute/superlative claims (voice + legal risk)
Three absolute competitive claims in the ClubStack section:
- "the **only** one with a built-in recruiting layer"
- "**No other** club platform is in the recruiting business."
- (echoed) "ClubStack's recruiting module bridges natively into FUSE-ID."

CLAUDE.md voice guardrails ban hype and fabrication and require verifiable claims; the legal disclaimers deliberately avoid guarantees. Absolute "only / no other" statements are hard to substantiate and invite dispute.
**Fix:** Soften to defensible phrasing ("the only club platform we know of with a native recruiting layer" / "built for recruiting from day one") or hold documented evidence for the superlative.

### 3. LOW–MEDIUM — Competitor pricing claim needs verification / date-proofing
FUSE-ID section: "**NCSA, SportsRecruits, and FieldLevel run $99–$200+/month.**" Naming competitors with specific prices is an accuracy risk (their pricing changes) and a legal-sensitivity point.
**Fix:** Verify current pricing, soften to "typically run," and avoid a hard range unless sourced.

### 4. LOW–MEDIUM — "most athletes pay under $10/month" stated as fact
Presented as a behavioral outcome. If not backed by real usage data, it edges toward the guardrail against unverified outcome numbers.
**Fix:** Reframe as a pricing fact ("most plans are under $10/month") rather than a claim about what athletes actually pay — unless you have the data.

### 5. LOW — ClubStack has no explicit "coming soon" status marker
FUSE-ID says "Free to start"; Ask The Gaffer says "Launching August 2026." ClubStack shows a full feature set and six pricing tiers (Free ≤25 … Enterprise) with only the CTA ("Join the waitlist · founding-club pricing") signaling pre-launch. A visitor could read it as already live.
**Fix:** Add a small "Coming soon" badge/line to the ClubStack section header to match the status clarity of the other two products.

### 6. LOW / by-design — Product accents on the hero preview panels
The three hero panels use FUSE green, Gaffer amber, and ClubStack gold tags on the hero (a parent surface). A strict reading of "product accents never on PSC parent-brand surfaces" flags this; in practice they're product-preview cards representing the set, and every other parent surface uses the master palette correctly. **Note only — accept or restyle to neutral tags if you want strict adherence.**

---

## Housekeeping (not a page issue)

**CLAUDE.md is now stale re: `globals.css`.** The rule says: *"Reconcile in Sprint A: live globals.css still ships navy #1A2332, gold #D4A574, and Crimson Pro + Work Sans."* That's no longer true — `globals.css` now ships Archivo + Inter, navy `#1A3A5C`, gold `#C9A227`, and `.serif` renders Archivo. Update or remove that line so it stops flagging a resolved issue.

---

## Priority order
1. Reword the three absolute "only/no other" claims (#2) — highest legal/voice exposure.
2. Verify or soften competitor pricing (#3) and the "under $10" claim (#4).
3. Decide on the hero consultation CTA (#1).
4. Add ClubStack "Coming soon" marker (#5).
5. Optional: hero panel accents (#6); update stale CLAUDE.md line.

---

## Resolution — 2026-07-08

- **#1 Hero consultation CTA — FIXED.** Hero is now product-led: secondary CTA changed from "Schedule Consultation" to **"See how they fit together"** (→ `#ecosystem`); trust line → **"Free to start · No credit card · Every sport."** The free-consult CTA moved to the subordinate **services strip** ("Book a free 30-minute consult"). Nav "Get Started" still offers booking.
- **#2 Absolute "only / no other" claims — FIXED site-wide.** Softened on the homepage **and** `/clubstack` (metadata, FAQ, differentiator h2 + body, and the two "only recruiting integration on the market" lines). Now "a built-in recruiting layer most club software doesn't have" / "built in from day one, not bolted on." Homepage "Only in ClubStack" badge → **"The ClubStack difference."**
- **#3 Competitor pricing — SOFTENED site-wide.** "$99–$200+/month" → **"typically run $100+/month"** on the homepage and `/fuse-id` (compare band, FAQ, comparison-table cell).
- **#4 "most athletes pay under $10/month" — REFRAMED site-wide.** Now **"most plans are under $10/month"** (a pricing fact, not a behavioral claim) on the homepage and every `/fuse-id` instance.
- **#5 ClubStack "Coming soon" — ADDED.** "Coming soon · waitlist open" pill in the homepage ClubStack section header.
- **#6 Hero panel accents — ACCEPTED as by-design.** The three panels are product-preview cards representing the set; left as-is.
- **Housekeeping — DONE.** Stale `CLAUDE.md` globals.css line updated to reflect the Sprint A reconciliation (Archivo + Inter, navy `#1A3A5C`, gold `#C9A227`).

*Left intentionally:* `/clubstack` comparison-table "ClubStack only" cells (defensible — relative to the named competitors in that table, standard comparison framing) and the `/recruiting-services` "Schedule Consultation" heading (a services page appropriately carries a consult CTA; #1 was specific to the homepage hero).
