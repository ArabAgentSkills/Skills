# ArabSkills Implementation Notes

Use this as a project-specific case study, not as universal SEO law.

## What Was Applied

- Data-first pages read from the same registry used by skills, evals, exports, and reports.
- Topic pages provide answer-shaped entry points for high-intent queries.
- Skill and vendor pages expose review status, confidence, files, sources, and eval scores.
- `robots.txt` intentionally distinguishes useful search/user-request crawlers from training crawlers.
- `sitemap.xml`, `llms.txt`, `ai-context.json`, and public JSON data all point to canonical public pages.
- JSON-LD uses Organization, WebSite, CollectionPage, ItemList, TechArticle, Dataset, Article, and BreadcrumbList.

## What Remains Review-Dependent

- Public Arabic copy still needs native review.
- Regulated API, tax, identity, payment, or finance claims still need official sources or expert review.
- GEO visibility should be checked in logs and AI prompt audits after deployment.
