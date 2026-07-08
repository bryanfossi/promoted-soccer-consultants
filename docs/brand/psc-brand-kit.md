# PSC Brand Kit
**Promoted Sports Consultants — Visual identity, voice, products, and usage guidelines**
Version 2.1 · Three-product suite · FUSE-ID green correction · ClubStack canonical · Archivo + Inter typography · July 2026

> This is the master brand system. The short, must-not-break operating rules live in the repo-root [`CLAUDE.md`](../../CLAUDE.md) and take precedence for speed. Per-product detail: [`fuse-id-brand-kit.md`](fuse-id-brand-kit.md) · [`clubstack-brand-kit.md`](clubstack-brand-kit.md) · [`ask-the-gaffer-brand-kit.md`](ask-the-gaffer-brand-kit.md).

---

## 00 — What changed (read first)

- **FUSE-ID accent is GREEN, not blue.** An earlier blue-accent spec is superseded — FUSE-ID is `#22C55E` (light) / `#4ADE80` (dark). All blue references are removed. The green already ships on the site and stands.
- **ClubStack is the canonical spelling** (camelCase). Wordmark: "Club" navy, "Stack" gold. The site-wide casing sweep completed in **Sprint E**; the codebase (including PSC's own legal disclaimer) carries zero mis-cased instances.
- **PSC.com typography is Archivo + Inter** sitewide — supersedes Crimson Pro + Work Sans. Font migration is a **Sprint A** task.
- Master palette moved from the v1.0 raster-logo navy/silver to v3 values (navy `#1A3A5C`, gold `#C9A227`). Live code still ships v1.0 values — see **Codebase Drift** (§02).

---

## 01 — Brand Overview

**Legal name:** Promoted Soccer Consultants, LLC — used only in disclaimers and copyright.
**Display name:** Promoted Sports Consultants / PSC — used everywhere else.
*(The soccer/sports mismatch is intentional. Keep both exactly as written.)*

PSC is a sports-tech company built by one coach who has lived every side of the process — recruited player, college coach evaluating prospects, high school head coach supporting families. What started in soccer is built to serve every sport; the expertise is soccer-deep, the platforms are sport-agnostic.

### Positioning frame (leads everything)

> **"One company. Three tools. Every sport. ClubStack runs the club. Ask The Gaffer preps the coach. FUSE-ID gets the family recruited."**

The youth-sports triangle: **Club (ClubStack) ⇄ Coach (Ask The Gaffer) ⇄ Athlete + Family (FUSE-ID)**, with the recruiting thread running through all three (ClubStack's recruiting module bridges natively into FUSE-ID). Each product stands alone; they work better together. **Products lead all marketing.** Human-led services are a subordinate tier — never lead suite-level content with them.

### Product & service family

| Brand | Type | Buyer | Accent | Status |
|---|---|---|---|---|
| **PSC** | Parent brand | — | Navy + Gold | Live |
| **FUSE-ID** | AI recruiting platform | Athlete + parent | **Green `#22C55E`** | **Live · free to start** |
| **ClubStack** | Club management platform | Club director / DOC / AD | Navy + Gold | **Coming soon · waitlist** |
| **Ask The Gaffer** | AI coach prep assistant | Head coach | Amber `#F5A623` | **Waitlist · launches Aug 2026** |
| Recruiting Services | Human consulting (families) | Family | Master brand | Live |
| Club Consulting | Human consulting (clubs) | Club leadership | Master brand | Live |

### Naming rules (non-negotiable)
- **FUSE-ID means the software platform ONLY.** The consulting packages are **Recruiting Services** (Basic / Premier / Elite). Never call the packages FUSE-ID; flag legacy content that does.
- Product names are exact: **FUSE-ID**, **ClubStack** (camelCase — "Club" navy, "Stack" gold), **Ask The Gaffer**.
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

Full token sets live in each per-product kit; summary here.

| Product | Accent | Field / surfaces | Scope |
|---|---|---|---|
| **FUSE-ID** | Green `#22C55E` (light) · `#16A34A` hover · `#4ADE80` (dark) · text-on-green **`#052E16`** | Dark bg `#0F1120`, cards `#1A1F35` | `/fuse-id`, fuse-id.online |
| **ClubStack** | Navy `#1A3A5C` + Gold `#C9A227` · neutrals Ink `#0F2437` / Slate `#5B6B7A` / Mist `#EEF2F6` · status Pitch Green `#2E7D53` / Whistle Red `#C0392B` | — | `/clubstack`, clubstack.online |
| **Ask The Gaffer** | Amber `#F5A623` · `#FFC55C` hover | Base `#0C0F14` / surface `#141920` / elevated `#1C2433` · text `#EDF0F4` / secondary `#8A97AE` | `/ask-the-gaffer`, askthegaffer.io |

> **Rules:** Product accents never appear on PSC parent-brand pages. Text on a solid FUSE-ID green button is **always `#052E16`** — never white/black. ClubStack Pitch Green / Whistle Red are status colors (success / alert), not decoration.

### Neutrals & text (master)

| Name | Hex | Role |
|---|---|---|
| Light Gray | `#F8F9FA` | Section backgrounds, email body |
| Medium Gray | `#E5E7EB` | Dividers, table borders |
| Text Dark | `#2C3E50` | Primary body copy |
| Text Light | `#6B7280` | Captions, eyebrow labels, metadata |
| White | `#FFFFFF` | Page backgrounds, reversed text |

### ⚠️ Codebase Drift — reconcile in Sprint A / E

| Token / usage | Live value | Target | Sprint |
|---|---|---|---|
| Master navy (`--primary-green`, `--dark-navy`) | `#1A2332` | `#1A3A5C` (bg → `#0F1A2E`) | A |
| Gold (`--accent-gold`) | `#D4A574` | `#C9A227` | A |
| Sitewide fonts | Crimson Pro + Work Sans | Archivo + Inter | A |
| ClubStack casing (app/sitemap/metadata/disclaimer) | swept ✅ | `ClubStack` | E (done) |
| FUSE-ID green | `#22C55E` / `#4ADE80` ✅ ships | *(matches — stands)* | — |

`--primary-green` / `--secondary-green` are legacy token *names* kept to avoid a sweeping rename; only the *values* change in Sprint A.

---

## 03 — Typography

**PSC.com uses Archivo + Inter sitewide.** (Supersedes Crimson Pro + Work Sans; migration is a Sprint A task — live code still loads the old pair.)

| Typeface | Role |
|---|---|
| **Archivo** (grotesque sans) | Display — headings, hero taglines, product names in callouts, eyebrows |
| **Inter** (sans) | UI + body — all body copy, labels, navigation, buttons, captions |

> **Scoping rule:** Product sections/pages on PSC.com borrow product **colors only**. Never load DM Sans, Barlow, or any product-specific font family on PSC.com. Product typography applies only on product domains (fuse-id.online, clubstack.online, askthegaffer.io) and product-specific assets.

### Type scale

| Style | Typeface | Size | Weight | Usage |
|---|---|---|---|---|
| Hero H1 | Archivo | 3rem | Light/Regular | Page hero headlines |
| Section H2 | Archivo | 2rem | Regular/Medium | Main section headings |
| Card H3 | Archivo | 1.5rem | Medium | Product cards, service headers |
| Body Large | Inter | 1.35rem | Regular | Hero intro, feature descriptions |
| Body | Inter | 1rem | Regular | Standard copy, line-height 1.7 |
| Eyebrow / Label | Inter | 0.85rem | SemiBold · ALL CAPS | Section eyebrows, status pills (+0.05em) |
| Caption / Meta | Inter | 0.9rem | Regular | Disclaimers, footnotes, captions |
| CTA Button | Inter | 1rem | SemiBold | All CTAs |

**Rules:** heading letter-spacing `-0.02em`; body line-height `1.7`; eyebrow letter-spacing `+0.05em`. The legacy `.serif` display class is repointed to Archivo in Sprint A (name kept to avoid a class-name sweep, mirroring the legacy token-name convention).

---

## 04 — Logo Guidelines

PSC uses a system of three marks. Full source detail (clear space, do/don't, files) preserved.

- **Mark 1 — Shield / Crest (Primary Wordmark).** Serif wordmark + silver shield with ascending line and gold accent. Use for hero, footer, email headers, proposals, decks, print. Tone: authority, trust — the consulting/services side.
- **Mark 2 — Chevron / Motion Mark (Digital & Product).** Geometric sans wordmark + stacked ascending chevron. Use for product surfaces, social, ads, decks. Tone: modern, forward-moving — the platform side.
- **Mark 3 — Ascending Bars / PSC Icon.** Three ascending bars + "PSC" monogram, icon only. Use for favicon, app icon, social avatars, watermarks, small formats.

**Clear space:** minimum equal to the height of the "P" in "PSC" on all sides.
**Do:** dark navy (preferred); on light/white use a navy-tinted mark; ≥4.5:1 contrast; Mark 1 formal, Mark 2 digital, Mark 3 small-format.
**Don't:** busy photos; recolor outside the palette; stretch/rotate/shadow; mix marks on one surface; Mark 3 for first introduction; smaller than 120px wide (digital) / 1in (print).
**Files:** PNG (transparent) for web/email/docs; SVG for scalable/print. Current primary asset: `/public/psc-logo-full.png`.

---

## 05 — Brand Voice & Messaging

PSC's voice is a coach who has been on both sides of the recruiting table. It educates, clarifies, and advises — it does not oversell.

### Voice pillars
- **Experience-grounded** — every claim traces to lived experience; reference credentials naturally, no bragging.
- **Honest, no shortcuts** — never guarantee scholarships, roster spots, or outcomes; set realistic expectations even when it's harder to say.
- **Direct, not corporate** — short sentences, active verbs, no jargon. "Schedule a call," not "initiate a consultation engagement."
- **Empowering, not fear-based** — lead with what's possible, not what's scary.
- **Sport-agnostic** — "athletes," "families," "clubs."

### Hard guardrails (flag violations immediately)
- **No hype.** No inflated scholarship promises. Avoid "unlock your potential," "dream school," "full-ride opportunity."
- **No fabrication.** Never invent testimonials, client names, case studies, awards, or outcome numbers. General, non-attributed recruiting-education stats are fine — never present them as verified PSC client results.
- **Division specificity always:** D1, D2, D3, NAIA, NJCAA/JUCO — never lumped.
- **One insight per post. One CTA per piece.** Never stack competing asks.

### Credibility anchor (use in this order of relevance to the piece)
Former D1 college player · college assistant coach who evaluated and recruited prospects · 9 years a varsity high school head coach with multiple District Championships and Coach of the Year recognition · current MLS Next Academy Division coach · deep NCAA, NAIA, NJCAA rules knowledge. **Throughline:** every product exists because Bryan hit the problem himself.

### Taglines

| Surface | Tagline |
|---|---|
| FUSE-ID | *"The AI college recruiting platform for student-athletes — and the parents in their corner."* |
| ClubStack | *"Run your club. Not your inbox."* |
| Ask The Gaffer | *"It already knows your team."* (motif: floodlit tactics room · "We go again.") |
| Consulting CTA | *"30 minutes · Free · No pitch"* |

### ✅ On brand
> *"AI match engine across 2,400+ programs — so you know where you fit before you reach out."*
> *"Built by a coach who has experienced the recruiting process from every angle — recruited player, college coach, high school coach."*

### ❌ Off brand
> *"We guarantee results! Get your scholarship today with our proven system!"*
> *"Don't miss out — the recruiting window closes faster than you think. Act now!"*

---

## 06 — Products (summary — full detail in per-product kits)

### FUSE-ID — "The AI college recruiting platform for student-athletes — and the parents in their corner."
LIVE. Free to start, no card, athletes 13+. https://fuse-id.online · register https://fuse-id.online/register. AI match engine across **2,400+ programs** (D1/D2/D3/NAIA/NJCAA). Full detail: [`fuse-id-brand-kit.md`](fuse-id-brand-kit.md).

| Plan | Price | Includes |
|---|---|---|
| Free | $0 / forever | 1 AI match run, full dashboard, offer tracker, comms log |
| Starter | $9.99 / mo | 20 AI tokens |
| Pro | $14.99 / mo | 30 tokens, email analyzer, parent access |

Token packs: Mini 5 / $2.99 · Standard 15 / $7.99 · Max 30 / $14.99.

### ClubStack — "Run your club. Not your inbox."
COMING SOON. Waitlist / founding-club pricing. https://clubstack.online. All-in-one club management — the only one with a built-in recruiting layer (native FUSE-ID bridge, unlocks at Club tier). Full detail: [`clubstack-brand-kit.md`](clubstack-brand-kit.md).

| Tier | Price | Size |
|---|---|---|
| Free | $0 | ≤25 players |
| Team | $49 / mo | ≤50, 2 teams |
| Starter | $129 / mo | ≤75 |
| Club | $249 / mo | 76–200 · recruiting unlocks · Most Popular |
| Academy | $449 / mo | 201–500 |
| Enterprise | Custom | 500+ |

### Ask The Gaffer — "It already knows your team."
WAITLIST OPEN. Launching **August 2026**. https://askthegaffer.io/waitlist. AI prep assistant that knows the coach's roster and style → session plans, match prep, scouting reports in minutes. No automated video analysis (different job from Hudl/Wyscout/Veo). From **$29/mo** or **$149 Season Pass**. Full detail: [`ask-the-gaffer-brand-kit.md`](ask-the-gaffer-brand-kit.md).

---

## 07 — Human-led Services (subordinate tier — never lead with these in suite-level content)

### Recruiting Services (for families)
Former college coach guiding evaluation, coach communication, and offer review with honest division-level targeting (D1/D2/D3/NAIA/NJCAA). **FUSE-ID Pro included with every tier.**

| Tier | Price | Includes |
|---|---|---|
| Basic | $350 one-time | Consultation & evaluation, division targeting, 40-school list, NCAA rules education, email templates, timeline roadmap |
| Premier | $2,500 one-time | Basic + 9 mo monthly strategy calls, comms review, highlight-video guidance, academic eligibility planning, visit prep, offer evaluation |
| Elite | $5,000 one-time | Premier + 12 mo support, unlimited email/text, bi-weekly check-ins, camp/showcase recs, financial aid strategy, transfer portal, family advocacy |

**Player Recruiting Website add-on:** $199 standalone; included with Premier/Elite. Custom subdomain `playername.promotedsoccerconsultants.com` — highlight video, stats, academics, schedule, coach contact form, 1 yr hosting.

### Club Consulting (for clubs, rec programs, HS athletic departments)
Six core areas: Strategic Planning & Club Audits · Coach Education & Support · Player Pathway Alignment · Parent Communication Frameworks · IT Solutions & Automation · Club Recruiting Services. Plus **Custom Club Solutions** for problems that can't be solved off the shelf. Priced per scope. **The CTA is always the conversation** (email or booking link) — never promise a specific solution or outcome before a discovery call. Where ClubStack overlaps with IT Solutions, position ClubStack as the product answer and consulting as what software can't do.

> **Legacy note:** the old subscriber-only "PSC AI Assistant" (ai.promotedsoccerconsultants.com) is superseded by FUSE-ID Pro included with Recruiting Services. Don't reference it in new content unless Bryan explicitly asks.

---

## 08 — CTAs, funnels & DM triggers

### CTA menu — one per piece, matched to the buyer
- **Families/players:** "Start free" → https://fuse-id.online/register · or a DM trigger · or booking link.
- **Club directors:** ClubStack waitlist → https://clubstack.online · or booking link.
- **Coaches:** Ask The Gaffer waitlist → https://askthegaffer.io/waitlist.
- **Consulting:** booking link → https://calendar.app.google/96Z4Kgp9mLh35sMj9 · or email.
- Universal human entry point across all three funnels: the free 30-minute consultation (no pitch).

### DM trigger words (each fires an N8N automation)
**Active:** EVALUATE · SCHOLARSHIP · VIDEO · OFFER · WALKON · D3 · RULES.
**PATHWAY** exists in content but is **NOT active** — must be activated in N8N before use. **Flag it whenever it appears in a draft.**

### Content package workflow (default)
1. LinkedIn post → 2. DALL-E image prompt (branded per §02) → 3. platform hashtags → 4. Instagram carousel Word doc.
Platforms: **LinkedIn** primary · **Instagram** secondary · **YouTube** long game.

---

## 09 — Visual patterns

**Section (light):** off-white/light-gray bg · navy headings (Archivo) · Text Dark body (Inter) · eyebrow Text Light, ALL CAPS, tracked.
**Section (dark):** deep navy bg · gold headings · white body · CTA white bg / navy text.
**Hero:** `linear-gradient(135deg, #0F1A2E 0%, #1A3A5C 100%)` with subtle radial overlays · H1 Archivo white · intro 1.35rem Inter white 95% · primary CTA white/navy · secondary transparent, white border 50%.
**CTA buttons:** primary white/navy/SemiBold/radius 6px · secondary transparent 2px white border · hover `translateY(-3px)` + shadow · focus 2px gold, offset 3px.
**Email:** header deep navy, white wordmark, gold rule (4–6px), light-gray body, deep-navy footer.

---

## 10 — Legal disclaimers (verbatim — use the one(s) relevant to the piece)

**FUSE-ID:**
> FUSE-ID is an AI-powered college recruiting platform operated by Promoted Soccer Consultants, LLC. FUSE-ID is an educational tool and does not act as an agent, guarantee scholarships, roster positions, or recruiting outcomes, and does not communicate with college coaches on behalf of athletes.

**ClubStack:**
> ClubStack is a club management software platform operated by Promoted Soccer Consultants, LLC. ClubStack is a business operations tool for clubs and is not a youth-protection, background-check, or sanctioning organization.

*("Verbatim" locks the substance of this disclaimer, not casing — it is PSC's own legal text, so the product renders as "ClubStack" here too. The codebase carries zero mis-cased instances.)*

**Recruiting Services & Club Consulting:**
> Recruiting Services and Club Consulting are education and consulting services. We do not act as agents, do not guarantee athletic scholarships, roster positions, or recruitment outcomes, and do not negotiate with college coaches on behalf of athletes. All guidance is provided for educational purposes and in accordance with NCAA, NAIA, and NJCAA rules.

---

## Quick reference

| | |
|---|---|
| **Master navy** | `#1A3A5C` |
| **Master gold** | `#C9A227` |
| **Deep navy** | `#0F1A2E` |
| **FUSE-ID accent** | Green `#22C55E` / `#4ADE80` (text-on-green `#052E16`) |
| **ClubStack accent** | Navy `#1A3A5C` + Gold `#C9A227` |
| **Ask The Gaffer accent** | Amber `#F5A623` on dark `#0C0F14` |
| **Display typeface** | Archivo |
| **Body typeface** | Inter |
| **Positioning line** | One company. Three tools. Every sport. |
| **Voice** | Honest · Direct · Experience-grounded · No hype · Sport-agnostic |
| **Legal entity** | Promoted Soccer Consultants, LLC (disclaimers/copyright only) |
| **Display brand** | Promoted Sports Consultants / PSC |

---

*Questions about brand usage? Contact bryan.fossi@promotedsoccerconsultants.com*
