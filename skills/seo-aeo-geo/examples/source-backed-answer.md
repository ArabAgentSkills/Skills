# Example: Source-Backed SEO/AEO/GEO Answer

## Prompt

Audit a public skills directory for SEO, AEO, and GEO.

## Files read

- `skills/seo-aeo-geo/SKILL.md`
- `skills/seo-aeo-geo/sources.yml`
- `skills/seo-aeo-geo/references/seo-foundation.md`
- `skills/seo-aeo-geo/references/geo-ai-crawler-policy.md`
- `skills/seo-aeo-geo/references/structured-data.md`

## Answer

Confidence: high for crawl/index/schema recommendations because they are source-backed by official search and crawler docs. Native review: needed for public Arabic copy. Expert review: needed for regulated claims. Unknown from public docs: actual AI citation coverage until production logs and prompt audits are checked.

Prioritized fixes:

1. Make every intended public page crawlable, canonical, listed in the sitemap, and reachable through internal links.
2. Add concise visible answer blocks to home, topic, skill, source, and vendor pages.
3. Keep JSON-LD aligned with visible content; do not add hidden claims or unsupported metrics.
4. Allow intended search/user-request crawlers while blocking training crawlers only if policy requires it.
5. Generate `llms.txt` and `ai-context.json` from the same source of truth as the website.

## Validation steps

- Build the site.
- Inspect `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and `/ai-context.json`.
- Check representative pages for title, description, canonical, H1, visible answer, internal links, and JSON-LD.
- Review Search Console and logs after deployment.
