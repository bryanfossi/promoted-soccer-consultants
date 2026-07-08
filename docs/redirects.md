# Redirect map

All redirects live in [`next.config.js`](../next.config.js) `async redirects()`. Verified against a production build (`next build` + `next start`) with `curl -I`.

| # | Source | Destination | Status | Added in | Purpose |
|---|---|---|---|---|---|
| 1 | `/:path*` where `Host: promotedsoccerconsultants.com` (non-www) | `https://www.promotedsoccerconsultants.com/:path*` | **301** | `42659e7` (SEO Top-7) | Canonical-host consolidation — force www so link equity and indexing land on one hostname. |
| 2 | `/ai-assistant` | `/fuse-id` | **301** | `b7d15e3` (multi-sport pivot) | Retire the legacy "PSC AI Assistant" marketing page. Its content was absorbed into `/fuse-id` (Sprint C). |
| 3 | `/services` | `/recruiting-services` | **301** | `b7d15e3` (multi-sport pivot) | Consulting page moved to its v3 URL; preserves any external links to the old `/services` path. |

## Status-code note
Redirects 1–3 were originally declared with Next.js `permanent: true`, which emits **HTTP 308**. In **Sprint F** they were changed to explicit `statusCode: 301` so they return a literal **301** (these are GET-only marketing/canonical redirects; 301 is the conventional, verifiable choice). Google treats 308 and 301 equivalently for consolidation, but the spec called for 301.

## Verification (Sprint F)
Run against `next start` on a production build:

```
/ai-assistant        -> HTTP 301 -> /fuse-id
/services            -> HTTP 301 -> /recruiting-services
Host: non-www /*     -> HTTP 301 -> https://www.promotedsoccerconsultants.com/*
/fuse-id (control)   -> HTTP 200
```

## Not redirected
- **`/chat`** — a live utility route, intentionally `Disallow`ed in [`app/robots.ts`](../app/robots.ts) and excluded from the sitemap. Not linked from any page by design (noindex tool, not an orphan).
- **`/locations/*`** — not built in this repo (planned as a future SEO sprint). No redirects or sitemap entries exist for it, so nothing 404-adjacent is referenced.
