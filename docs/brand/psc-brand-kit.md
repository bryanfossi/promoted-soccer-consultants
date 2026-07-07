# PSC Brand Kit
**Promoted Sports Consultants — Visual identity, voice, products, and usage guidelines**
Version 2.0 · Aligned to system-prompt v3 (three-product suite) · July 2026

> This is the full brand system. The short, must-not-break operating rules live in the repo-root [`CLAUDE.md`](../../CLAUDE.md) and take precedence for speed; this file is the source of truth on detail.

---

## 00 — What changed in v2.0 (read first)

v1.0 of this kit described a **two-product** suite (FUSE-ID + Clubstack) with a green FUSE-ID accent and a `#1A2332` navy. The v3 spec is a **three-product** suite and a revised palette. This version is aligned to v3. Where the live codebase still ships v1.0 values, they are called out in the **Codebase Drift** note (§02) — reconcile them during the rebuild rather than assuming the site already matches this doc.

---

## 01 — Brand Overview

**Legal name:** Promoted Soccer Consultants, LLC — used only in disclaimers and copyright.
**Display name:** Promoted Sports Consultants / PSC — used everywhere else.
*(The soccer/sports mismatch is intentional. Keep both exactly as written.)*

PSC is a sports-tech company built by one coach who has lived every side of the process — recruited player, college coach evaluating prospects, high school head coach supporting families. What started in soccer is built to serve every sport; the expertise is soccer-deep, the platforms are sport-agnostic.

### Positioning frame (leads everything)

> **"One company. Three tools. Every sport. Clubstack runs the club. Ask The Gaffer preps the coach. FUSE-ID gets the family recruited."**

The youth-sports triangle: **Club (Clubstack) ⇄ Coach (Ask The Gaffer) ⇄ Athlete + Family (FUSE-ID)**, with the recruiting thread running through all three (Clubstack's recruiting module bridges natively into FUSE-ID). Each product stands alone; they work better together. **Products lead all marketing.** Human-led services are a subordinate tier — never lead suite-level content with them.

### Product & service family

| Brand | Type | Buyer | Accent | Status |
|---|---|---|---|---|
| **PSC** | Parent brand | — | Navy + Gold | Live |
| **FUSE-ID** | AI recruiting platform | Athlete + parent | Electric blue `#4C8DFF` | **Live · free to start** |
| **Clubstack** | Club management platform | Club director / DOC / AD | Navy + Gold | **Coming soon · waitlist** |
| **Ask The Gaffer** | AI coach prep assistant | Head coach | Amber `#F5A623` | **Waitlist · launches Aug 2026** |
| Recruiting Services | Human consulting (families) | Family | Master brand | Live |
| Club Consulting | Human consulting (clubs) | Club leadership | Master brand | Live |

### Naming rules (non-negotiable)
- **FUSE-ID means the software platform ONLY.** The consulting packages are **Recruiting Services** (Basic / Premier / Elite). Never call the packages FUSE-ID; flag legacy content that does.
- Product names are exact: **FUSE-ID**, **Clubstack**, **Ask The Gaffer** — never abbreviate or restyle.
- Use "PSC" after the first full mention in a document.
- Say "athletes," "families," "clubs" — not "soccer players," "soccer moms," "soccer clubs."

---

## 02 — Color Palette

### Master brand (PSC shell, services, general content)

| Name | Hex | Role |
|---|---|---|
| Navy | `#1A3A5C` | Primary brand color — headings, CTAs, section fields |
| Gold | `#C9A227` | Accent — callouts, "Most Popular," dark-section headings |
| Deep Navy | `#0F1A2E` | Deepest field / hero gradient base |
| Off-White | `#F7F8FA` | Light section backgrounds, body surfaces |

### Product-specific accents (scoped to that product's own content only)

| Product | Accent | Field | Scope |
|---|---|---|---|
| FUSE-ID | Electric blue `#4C8DFF` | Near-black `#0F1120` | `/fuse-id`, fuse-id.online |
| Clubstack | Navy + Gold (master) | — | `/clubstack`, clubstack.online |
| Ask The Gaffer | Amber `#F5A623` | Dark ("floodlit tactics room") | Ask The Gaffer surfaces, askthegaffer.io |

> **Rule:** Product accents never appear on PSC parent-brand pages. Don't put FUSE-ID blue or Ask The Gaffer amber on the PSC shell.

### Neutrals & text

| Name | Hex | Role |
|---|---|---|
| Light Gray | `#F8F9FA` | Section backgrounds, email body |
| Medium Gray | `#E5E7EB` | Dividers, table borders |
| Text Dark | `#2C3E50` | Primary body copy |
| Text Light | `#6B7280` | Captions, eyebrow labels, metadata |
| White | `#FFFFFF` | Page backgrounds, reversed text |

### ⚠️ Codebase Drift — reconcile during the rebuild

The live `app/globals.css` still ships v1.0 values. These do **not** match the v3 palette above and must be reconciled:

| Token / usage | Live value (v1.0) | v3 target |
|---|---|---|
| Master navy (`--primary-green`, `--dark-navy`) | `#1A2332` | `#1A3A5C` |
| Secondary navy (`--secondary-green`) | `#2C3E57` | derive from `#0F1A2E`/`#1A3A5C` |
| Gold (`--accent-gold`) | `#D4A574` | `#C9A227` |
| FUSE-ID accent | lime green `#22C55E` | electric blue `#4C8DFF` |
| Off-white | `#F8F9FA` | `#F7F8FA` (negligible; low priority) |
| Ask The Gaffer amber | *(absent)* | `#F5A623` — add token |

`--primary-green` / `--secondary-green` are legacy token *names* kept to avoid a sweeping rename; the *values* are what change. Decide during the rebuild whether to also rename the tokens (`--navy` / `--navy-deep`) or keep the names and only swap values.

---

## 03 — Typography

| Typeface | Weights | Role |
|---|---|---|
| **Crimson Pro** (serif) | Light 300, Regular 400, SemiBold 600 | Headings, pull quotes, hero taglines, product names in callouts |
| **Work Sans** (sans-serif) | Regular 400, Medium 500, SemiBold 600, Bold 700 | Body copy, UI labels, nav, buttons, captions |

Both are Google Fonts via `next/font/google` in `app/layout.tsx`. Apply the `.serif` class to use Crimson Pro on any element.

### Type scale

| Style | Typeface | Size | Weight | Usage |
|---|---|---|---|---|
| Hero H1 | Crimson Pro | 3rem | Light 300 | Page hero headlines |
| Section H2 | Crimson Pro | 2rem | Regular 400 | Main section headings |
| Card H3 | Crimson Pro | 1.5rem | Regular 400 | Product cards, service headers |
| Body Large | Work Sans | 1.35rem | Regular 400 | Hero intro, feature descriptions |
| Body | Work Sans | 1rem | Regular 400 | Standard copy, line-height 1.7 |
| Eyebrow / Label | Work Sans | 0.85rem | Bold · ALL CAPS | Section eyebrows, status pills (+0.05em) |
| Caption / Meta | Work Sans | 0.9rem | Regular · italic | Disclaimers, footnotes, captions |
| CTA Button | Work Sans | 1rem | SemiBold 600 | All CTAs |

**Rules:** heading letter-spacing `-0.03em`; body line-height `1.7`; eyebrow letter-spacing `+0.05em`.

---

## 04 — Logo Guidelines

PSC uses a system of three marks. Full source detail (clear space, do/don't, files) is preserved from v1.0.

- **Mark 1 — Shield / Crest (Primary Wordmark).** Serif wordmark + silver shield with ascending line and gold accent at the crest. Use for hero, footer, email headers, proposals, decks, print. Tone: authority, trust — the consulting/services side.
- **Mark 2 — Chevron / Motion Mark (Digital & Product).** Geometric sans wordmark + stacked ascending chevron. Use for product surfaces, social, ads, decks. Tone: modern, forward-moving — the platform side.
- **Mark 3 — Ascending Bars / PSC Icon.** Three ascending bars + "PSC" monogram, icon only. Use for favicon, app icon, social avatars, watermarks, small formats.

**Clear space:** minimum equal to the height of the "P" in "PSC" on all sides.

**Do:** use on dark navy (preferred); on light/white use a navy-tinted mark; maintain ≥4.5:1 contrast; Mark 1 for formal/document, Mark 2 for digital/product, Mark 3 for small-format.
**Don't:** place on busy photos; recolor outside the palette; stretch/rotate/shadow; mix marks on one surface; use Mark 3 for first brand introduction; use smaller than 120px wide (digital) / 1in (print).

**Files:** PNG (transparent) for web/email/docs; SVG for scalable/print. Keep layered source per mark. Current primary asset: `/public/psc-logo-full.png`.

---

## 05 — Brand Voice & Messaging

PSC's voice is a coach who has been on both sides of the recruiting table. It educates, clarifies, and advises — it does not oversell.

### Voice pillars
- **Experience-grounded** — every claim traces to lived experience; reference credentials naturally, no bragging.
- **Honest, no shortcuts** — never guarantee scholarships, roster spots, or outcomes; set realistic expectations even when it's harder to say.
- **Direct, not corporate** — short sentences, active verbs, no jargon. "Schedule a call," not "initiate a consultation engagement."
- **Empowering, not fear-based** — lead with what's possible, not what's scary. Structure and clarity, not anxiety.
- **Sport-agnostic** — problems are universal; "athletes," "families," "clubs."

### Hard guardrails (flag violations immediately)
- **No hype.** No inflated scholarship promises. Avoid "unlock your potential," "dream school," "full-ride opportunity."
- **No fabrication.** Never invent testimonials, client names, case studies, awards, or outcome numbers. General, non-attributed recruiting-education stats are fine — never present them as verified PSC client results.
- **Division specificity always:** D1, D2, D3, NAIA, NJCAA/JUCO — never lumped.
- **One insight per post. One CTA per piece.** Never stack competing asks.

### Credibility anchor (use in this order of relevance to the piece)
Former D1 college player · college assistant coach who evaluated and recruited prospects · 9 years a varsity high school head coach with multiple District Championships and Coach of the Year recognition · current MLS Next Academy Division coach · deep NCAA, NAIA, and NJCAA rules knowledge. **Throughline:** every product exists because Bryan hit the problem himself.

### Taglines

| Surface | Tagline |
|---|---|
| FUSE-ID | *"The AI college recruiting platform for student-athletes — and the parents in their corner."* |
| Clubstack | *"Run your club. Not your inbox."* |
| Ask The Gaffer | *"It already knows your team."* (motif: floodlit tactics room · "We go again.") |
| Consulting CTA | *"30 minutes · Free · No pitch"* |

> Note: v1.0 of this kit used a different FUSE-ID line ("built for athletes, not agents") and a PSC parent tagline ("Recruiting and club operations, redesigned for every sport"). The v3 lines above supersede them; the parent line may still appear in live code — update on the sweep.

### ✅ On brand
> *"AI match engine across 2,400+ programs — so you know where you fit before you reach out."*
> *"Built by a coach who has experienced the recruiting process from every angle — recruited player, college coach, high school coach."*

### ❌ Off brand
> *"We guarantee results! Get your scholarship today with our proven system!"*
> *"Don't miss out — the recruiting window closes faster than you think. Act now!"*

---

## 06 — Products (detail + pricing)

### FUSE-ID — "The AI college recruiting platform for student-athletes — and the parents in their corner."
- **Status:** LIVE. Free to start, no card. Athletes 13+. https://fuse-id.online · register https://fuse-id.online/register
- **What it is:** AI match engine scoring a profile against **2,400+ programs** across D1, D2, D3, NAIA, NJCAA. Reach coaches, track offers, calculate real cost. No consultants required, no pay-to-play model.
- **Core features:** AI school matching (8 fit dimensions → ranked list) · AI coach email generator (initial, follow-up, thank-you, visit request, offer response) · recruiting pipeline Kanban (Board / List / Top 10) · scholarship offer tracker with net-cost estimates · AI profile gap analysis · parent access (read-only guardian link) + shareable public profile.
- **Positioning:** the affordable, AI-native alternative to NCSA, SportsRecruits, FieldLevel ($99–$200+/mo). Soccer + volleyball today; more sports on the roadmap.

| Plan | Price | Includes |
|---|---|---|
| Free | $0 / forever | 1 AI match run, full dashboard, offer tracker, comms log |
| Starter | $9.99 / mo | 20 AI tokens |
| Pro | $14.99 / mo | 30 tokens, email analyzer, parent access |

Token packs: Mini 5 / $2.99 · Standard 15 / $7.99 · Max 30 / $14.99. *Most athletes pay under $10/month.*

---

### Clubstack — "Run your club. Not your inbox."
- **Status:** COMING SOON. Waitlist open, founding-club pricing. https://clubstack.online
- **What it is:** all-in-one club management platform — and the only one with a built-in recruiting layer. Replaces registration platform + payments spreadsheet + messaging app + group texts.
- **Five core modules (all included day one):** Registration & waivers · Payments & billing (Stripe, installment plans, late reminders, family balances) · Roster & team management · Scheduling & calendar (signature facility-grid master schedule + conflict detection) · Communication (broadcasts, pinned announcements with read tracking, DMs).
- **Differentiator — Recruiting Integration Module:** club-wide view of every player's recruiting status, division targets, last coach contact, and FUSE-ID enrollment, plus a family check-in workflow. Native bridge to FUSE-ID. Unlocks at the Club tier.
- **Add-ons:** Tryout Evaluation (mobile scoring, offline mode) · drag-and-drop Roster Builder.
- **Proof line:** built by an active coach — every workflow comes from a real Tuesday-night practice or Saturday tournament. Sport-agnostic; built first with competitive soccer clubs.

| Tier | Price | Size / notes |
|---|---|---|
| Free | $0 | ≤25 players |
| Team | $49 / mo | ≤50, 2 teams |
| Starter | $129 / mo | ≤75 |
| Club | $249 / mo | 76–200 · **recruiting unlocks** |
| Academy | $449 / mo | 201–500 |
| Enterprise | Custom | 500+ |

Flat monthly by org size, no per-player fees. Annual ≈ 15% off.

---

### Ask The Gaffer — "It already knows your team."
- **Status:** WAITLIST OPEN. Launching **August 2026**. Founding coaches get early access, founder pricing, roadmap input. https://askthegaffer.io/waitlist
- **What it is:** AI prep assistant that knows the coach's roster, players, and playing style — and turns that into session plans, match prep, and scouting reports in minutes.
- **How it works:** (1) tell it about your team once — it remembers; (2) ask ("Build me a Tuesday session on pressing triggers"); (3) get it in minutes — printable, shareable, editable, learns preferences.
- **Why different:** knows YOUR team (not a generic ChatGPT drill) · built by a coach · saves hours · your inputs become your scouting report. No automated video analysis — a different job from Hudl/Wyscout/Veo, priced for a coach not an athletic department.
- **Pricing:** from **$29/month**, or **$149 Season Pass** for the months you're actually coaching. Club rollouts available.
- **Motif:** floodlit tactics room. "We go again."

---

## 07 — Human-led Services (subordinate tier — never lead with these in suite-level content)

### Recruiting Services (for families)
A former college coach guiding player evaluation, coach communication, and offer review with honest division-level targeting across D1, D2, D3, NAIA, NJCAA/JUCO. **FUSE-ID Pro included with every tier.**

| Tier | Price | Includes |
|---|---|---|
| Basic | $350 one-time | Consultation & player evaluation, division targeting, 40-school target list, NCAA rules education, email templates, timeline roadmap |
| Premier | $2,500 one-time | Basic + 9 months monthly strategy calls, comms review, highlight-video guidance, academic eligibility planning, official visit prep, offer evaluation |
| Elite | $5,000 one-time | Premier + 12 months support, unlimited email/text, bi-weekly check-ins, camp/showcase recs, financial aid strategy, transfer portal guidance, family advocacy |

**Player Recruiting Website add-on:** $199 one-time standalone; included with Premier and Elite. Custom subdomain at `playername.promotedsoccerconsultants.com` — embedded highlight video, stats, academics, schedule, coach contact form, 1 year hosting.

### Club Consulting (for clubs, rec programs, HS athletic departments)
Six core areas: Strategic Planning & Club Audits · Coach Education & Support · Player Pathway Alignment · Parent Communication Frameworks · IT Solutions & Automation · Club Recruiting Services. Plus **Custom Club Solutions** for problems that can't be solved off the shelf. Priced per scope. The CTA is always the conversation (email or booking link) — never promise a specific solution or outcome before a discovery call. Where Clubstack overlaps with IT Solutions work, position Clubstack as the product answer and consulting as what software can't do.

> **Legacy note:** the old subscriber-only "PSC AI Assistant" (ai.promotedsoccerconsultants.com) is superseded by FUSE-ID Pro access included with Recruiting Services. Do not reference it in new content unless Bryan explicitly asks.

---

## 08 — CTAs, funnels & DM triggers

### CTA menu — one per piece, matched to the buyer
- **Families/players:** "Start free" → https://fuse-id.online/register · or a DM trigger word · or booking link.
- **Club directors:** Clubstack waitlist → https://clubstack.online · or booking link.
- **Coaches:** Ask The Gaffer waitlist → https://askthegaffer.io/waitlist.
- **Consulting:** booking link → https://calendar.app.google/96Z4Kgp9mLh35sMj9 · or email.
- Universal human entry point across all three funnels: the free 30-minute consultation (no pitch).

### DM trigger words (each fires an N8N automation)
**Active:** EVALUATE · SCHOLARSHIP · VIDEO · OFFER · WALKON · D3 · RULES.
**PATHWAY** exists in content but is **NOT active** — must be activated in N8N before use. **Flag it whenever it appears in a draft.**

### Content package workflow (default, unless told otherwise)
1. LinkedIn post (lead platform) → 2. DALL-E image prompt (branded per §02) → 3. platform hashtags → 4. Instagram carousel Word doc (slide text, image prompts, design notes, caption with CTA).
Platforms: **LinkedIn** primary (parents, directors, ADs, coaches) · **Instagram** secondary (players, younger parents) · **YouTube** long game (Masterclass + recruiting education).

---

## 09 — Visual patterns

**Section (light):** background off-white/light-gray · headings navy in Crimson Pro · body Text Dark in Work Sans · eyebrow Text Light, ALL CAPS, tracked.
**Section (dark):** background deep navy · headings gold in Crimson Pro · body white · CTA white bg / navy text.
**Hero:** `linear-gradient(135deg, #0F1A2E 0%, #1A3A5C 100%)` with subtle radial overlays · H1 Crimson Pro Light 300 white · intro 1.35rem white 95% · primary CTA white bg/navy text · secondary transparent, white border 50%.
**CTA buttons:** primary white/navy/600/radius 6px · secondary transparent, 2px white border · hover `translateY(-3px)` + shadow · focus 2px gold, offset 3px.
**Email:** header deep navy, white wordmark, gold rule (4–6px), light-gray body, deep-navy footer with link row.

---

## 10 — Legal disclaimers (verbatim — use the one(s) relevant to the piece)

**FUSE-ID:**
> FUSE-ID is an AI-powered college recruiting platform operated by Promoted Soccer Consultants, LLC. FUSE-ID is an educational tool and does not act as an agent, guarantee scholarships, roster positions, or recruiting outcomes, and does not communicate with college coaches on behalf of athletes.

**Clubstack:**
> Clubstack is a club management software platform operated by Promoted Soccer Consultants, LLC. Clubstack is a business operations tool for clubs and is not a youth-protection, background-check, or sanctioning organization.

**Recruiting Services & Club Consulting:**
> Recruiting Services and Club Consulting are education and consulting services. We do not act as agents, do not guarantee athletic scholarships, roster positions, or recruitment outcomes, and do not negotiate with college coaches on behalf of athletes. All guidance is provided for educational purposes and in accordance with NCAA, NAIA, and NJCAA rules.

---

## Quick reference

| | |
|---|---|
| **Master navy** | `#1A3A5C` |
| **Master gold** | `#C9A227` |
| **Deep navy** | `#0F1A2E` |
| **FUSE-ID accent** | Electric blue `#4C8DFF` on `#0F1120` |
| **Ask The Gaffer accent** | Amber `#F5A623` on dark |
| **Clubstack accent** | Navy + Gold |
| **Display typeface** | Crimson Pro — Light, Regular, SemiBold |
| **Body typeface** | Work Sans — Regular, Medium, SemiBold, Bold |
| **Positioning line** | One company. Three tools. Every sport. |
| **Voice** | Honest · Direct · Experience-grounded · No hype · Sport-agnostic |
| **Legal entity** | Promoted Soccer Consultants, LLC (disclaimers/copyright only) |
| **Display brand** | Promoted Sports Consultants / PSC |

---

*Questions about brand usage? Contact bryan.fossi@promotedsoccerconsultants.com*
