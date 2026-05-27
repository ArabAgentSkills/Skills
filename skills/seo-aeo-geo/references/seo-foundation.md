# SEO Foundation

Use this when the task is classic SEO, technical SEO, metadata, crawlability, sitemap, canonical, or internal-linking work.

## Minimum Audit

1. Confirm the intended public URL returns 200 and is not blocked by auth, robots.txt, CDN, WAF, or noindex.
2. Confirm a single canonical URL exists and is listed in the sitemap.
3. Confirm title, description, H1, visible intro, and internal links describe the same entity and intent.
4. Confirm important content is text, not only an image or client-only widget.
5. Confirm pages that should rank are reachable by normal links.
6. Confirm page speed and mobile layout are usable enough for real visitors.

## Page Shape

- One clear H1.
- Direct answer near the top for the primary query.
- Source-backed body sections.
- Related internal links.
- Visible update/review status when facts can drift.
- No fake freshness. Update dates only when content changed materially.

## ArabSkills Pattern

For this project, the source of truth is data-first:

- `data/processed/skills.json`
- `data/processed/vendors.json`
- `data/processed/sources.json`
- `data/regional/*.public.json`
- `skills/*/SKILL.md`
- `skills/*/sources.yml`

Website pages should summarize that data, not invent parallel claims.
