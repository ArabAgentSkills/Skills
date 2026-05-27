# Structured Data

Use this when choosing JSON-LD or schema.org markup.

## Safe Types For This Project

- `Organization` for Arab Agent Skills.
- `WebSite` with `SearchAction`.
- `CollectionPage` for directories.
- `ItemList` for skill, vendor, topic, and country collections.
- `TechArticle` for skill pages.
- `Dataset` for public registry/source data.
- `Article` for vendor profiles.
- `BreadcrumbList` for deep pages.

## Rules

- Mark up the main purpose of the page.
- Structured data must match visible content.
- Do not mark up hidden testimonials, fake reviews, fake ratings, unsupported counts, or claims not shown to users.
- Use stable IDs with URL fragments.
- Keep schema generation deterministic from the data source.

## Validation

- Build the site.
- Inspect generated HTML for JSON-LD.
- Run a structured data validator or Rich Results Test for representative pages.
- Confirm schema does not expose private repo paths, tokens, unpublished review notes, or PII.
