# FUSE-ID Brand Kit
**Product brand kit — the AI college recruiting platform**
Canonical tokens · aligned to system-prompt v3 (FUSE-ID accent is green — supersedes the earlier blue-accent spec)

> Scope: this kit governs FUSE-ID's own surfaces — `fuse-id.online` and the `/fuse-id` section of PSC.com. On PSC.com, FUSE-ID contributes **color only**; PSC.com typography (Archivo + Inter) always wins. See [`psc-brand-kit.md`](psc-brand-kit.md) for the master system and [`../../CLAUDE.md`](../../CLAUDE.md) for the session rules.

---

## Identity

- **Tagline:** *"The AI college recruiting platform for student-athletes — and the parents in their corner."*
- **Status:** LIVE. Free to start, no credit card. Athletes 13+.
- **URLs:** https://fuse-id.online · register https://fuse-id.online/register
- **Buyer:** student-athletes (grades 9–12 / club) and parents.
- **Primary CTA:** "Start free" → https://fuse-id.online/register

---

## Color tokens (exact — transcribe verbatim)

**FUSE-ID's accent is green.** (An earlier blue-accent spec is superseded — do not use blue anywhere.)

| Token | Hex | Use |
|---|---|---|
| Green — light surfaces | `#22C55E` | Accent on light/white surfaces: badges, tags, borders, links, buttons |
| Green — hover (light) | `#16A34A` | Hover/active state of light-surface green |
| Green — dark surfaces | `#4ADE80` | Accent/text green on dark surfaces (brighter for contrast) |
| Text on green buttons | `#052E16` | **Always** the label color on a solid-green button — never white, never black |
| Dark section background | `#0F1120` | Near-black field for dark FUSE-ID sections |
| Dark section cards | `#1A1F35` | Card/elevated surface on the dark field |

**Rules**
- Solid-green buttons: fill `#22C55E` (hover `#16A34A`), label **`#052E16`**. No exceptions.
- On the near-black dark theme (`#0F1120`), use `#4ADE80` for green foreground and `#1A1F35` for cards.
- FUSE-ID green never appears on PSC parent-brand surfaces — it is scoped to FUSE-ID content only.
- Shipped status: `app/fuse-id/fuse-id.module.css` already ships `#22c55e` and `#4ade80`. The hover/`#052E16`/dark-surface tokens are codified in Sprint A.

---

## Typography

Product typography renders **only on `fuse-id.online` and FUSE-ID-specific assets** — never loaded on PSC.com. On the `/fuse-id` section of PSC.com, headings and body use PSC master type (**Archivo + Inter**); FUSE-ID contributes color only. Do not import DM Sans, Barlow, or any product family onto PSC.com. (FUSE-ID's own product-domain family is defined in the product app, not here.)

---

## Platform (canonical facts)

AI match engine scoring an athlete's profile against **2,400+ college programs** across D1, D2, D3, NAIA, NJCAA. No consultants required, no pay-to-play exposure model.

**Core features:** AI school matching (8 fit dimensions → ranked list) · AI coach email generator (initial, follow-up, thank-you, visit request, offer response) · recruiting pipeline Kanban (Board / List / Top 10) · scholarship offer tracker with net-cost estimates · AI profile gap analysis · parent access (read-only guardian link) + shareable public profile.

**Positioning:** the affordable, AI-native alternative to NCSA, SportsRecruits, FieldLevel ($99–$200+/mo). Soccer + volleyball today; more sports on the roadmap.

### Pricing

| Plan | Price | Includes |
|---|---|---|
| Free | $0 / forever | 1 AI match run, full dashboard, offer tracker, comms log |
| Starter | $9.99 / mo | 20 AI tokens |
| Pro | $14.99 / mo | 30 tokens, email analyzer, parent access |

Token packs: Mini 5 / $2.99 · Standard 15 / $7.99 · Max 30 / $14.99. *Most athletes pay under $10/month.*

---

## Legal disclaimer (verbatim)

> FUSE-ID is an AI-powered college recruiting platform operated by Promoted Soccer Consultants, LLC. FUSE-ID is an educational tool and does not act as an agent, guarantee scholarships, roster positions, or recruiting outcomes, and does not communicate with college coaches on behalf of athletes.
