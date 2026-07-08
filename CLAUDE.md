# CLAUDE.md — PSC operating rules (check every session)

Full brand system: [docs/brand/psc-brand-kit.md](docs/brand/psc-brand-kit.md). Per-product kits: [fuse-id](docs/brand/fuse-id-brand-kit.md) · [clubstack](docs/brand/clubstack-brand-kit.md) · [ask-the-gaffer](docs/brand/ask-the-gaffer-brand-kit.md). This file is the short list of rules you must not break. When in doubt, the brand kit wins on detail; this file wins on speed.

**Positioning frame (leads everything):** "One company. Three tools. Every sport. ClubStack runs the club. Ask The Gaffer preps the coach. FUSE-ID gets the family recruited." Products lead all marketing; human services are a subordinate tier — never lead suite-level content with them.

## Naming traps (non-negotiable)
- **FUSE-ID = the software platform ONLY.** The human packages are **Recruiting Services** (tiers: Basic / Premier / Elite). Never call the packages FUSE-ID. Flag any legacy content that does.
- Product names are exact: **FUSE-ID**, **ClubStack**, **Ask The Gaffer**.
- **Display brand:** Promoted Sports Consultants (PSC). **Legal entity** (disclaimers + copyright only): **Promoted Soccer Consultants, LLC**. Keep both exactly — the mismatch is intentional.

## Product status + launch (verify before writing "live"/"coming soon")
- **FUSE-ID** — LIVE. Free to start, no card, athletes 13+. https://fuse-id.online · register https://fuse-id.online/register
- **ClubStack** — COMING SOON. Waitlist / founding-club pricing. https://clubstack.online
- **Ask The Gaffer** — WAITLIST OPEN, launches **August 2026**. https://askthegaffer.io/waitlist

## One buyer, one CTA (per piece — never stack asks)
Every piece targets ONE buyer and uses that buyer's CTA. Flag anything that serves all three at once.
- Families/players → "Start free" → https://fuse-id.online/register (or a DM trigger, or booking link)
- Club directors → ClubStack waitlist → https://clubstack.online (or booking link)
- Coaches → Ask The Gaffer waitlist → https://askthegaffer.io/waitlist
- Consulting → booking link → https://calendar.app.google/96Z4Kgp9mLh35sMj9 (or email)
- One insight per post. One CTA per piece.

## Accent-palette scoping
- Master brand (PSC shell, services, general content): Navy `#1A3A5C` · Gold `#C9A227` · deep navy `#0F1A2E` · off-white `#F7F8FA`.
- Product accents ONLY inside that product's own content — never on PSC parent-brand surfaces:
  - **FUSE-ID = green** (NOT blue): light `#22C55E`, hover `#16A34A`; dark-surface `#4ADE80`; text on green buttons **always `#052E16`** (never white/black); dark bg `#0F1120`, cards `#1A1F35`.
  - **ClubStack** = navy `#1A3A5C` + gold `#C9A227` (wordmark: "Club" navy, "Stack" gold); neutrals Ink `#0F2437` / Slate `#5B6B7A` / Mist `#EEF2F6`; status Pitch Green `#2E7D53` / Whistle Red `#C0392B`.
  - **Ask The Gaffer** = amber `#F5A623`, hover `#FFC55C`, on dark base `#0C0F14` / surface `#141920` / elevated `#1C2433`; text `#EDF0F4` / secondary `#8A97AE`.
- Reconcile in Sprint A: live `app/globals.css` still ships navy `#1A2332`, gold `#D4A574`, and Crimson Pro + Work Sans fonts. FUSE-ID green (`#22C55E`/`#4ADE80`) already ships and stands.

## Typography (PSC.com)
- PSC.com uses **Archivo + Inter sitewide** (Archivo = display/headings, Inter = UI/body). This supersedes Crimson Pro + Work Sans.
- Product sections/pages on PSC.com borrow product **colors only** — **never** load DM Sans, Barlow, or any product-specific font family on PSC.com.
- Product typography applies only on product domains (fuse-id.online, clubstack.online, askthegaffer.io) and product-specific assets.

## DM trigger words (each fires an N8N automation)
Active: **EVALUATE · SCHOLARSHIP · VIDEO · OFFER · WALKON · D3 · RULES**.
**PATHWAY is NOT active** — it exists in content but must be activated in N8N first. Flag it every time it appears in a draft.

## Voice guardrails (flag violations immediately)
- **No hype.** No inflated scholarship promises, no "unlock your potential," "dream school," "full-ride opportunity."
- **No fabrication.** Never invent testimonials, client names, case studies, awards, or outcome numbers. General non-attributed recruiting stats are fine; never present them as verified PSC client results.
- **Division specificity always:** D1, D2, D3, NAIA, NJCAA/JUCO — never lumped.
- Write like a coach who has done the job, not a vendor selling one. Use the verbatim legal disclaimers (see brand kit) on any piece that sells a product or service.
