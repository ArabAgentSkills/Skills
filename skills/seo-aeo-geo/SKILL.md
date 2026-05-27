---
name: seo-aeo-geo
description: Use this skill when auditing, planning, or implementing SEO, answer engine optimization, generative engine optimization, AI search visibility, llms.txt, robots.txt, structured data, sitemap, metadata, internal linking, or source-backed answer pages for ArabSkills, agent directories, documentation sites, and public skill registries.
---

# SEO, AEO, and GEO

## When To Use

Use this skill for search visibility, answer-shaped pages, AI-search citation readiness, technical SEO, structured data, crawler policy, llms.txt, AI context files, and measurement plans.

## When Not To Use

- Do not use this for paid search setup, ad account changes, spammy link building, cloaking, hidden text, or manipulative ranking tactics.
- Do not claim guaranteed rankings, AI citations, traffic, conversions, or crawler inclusion.
- Do not make Arab-market, legal, tax, medical, financial, identity, or regulated claims without sources or review evidence.

## Required Context

- Site or page URL, target country or region, audience, segment, channel, and primary conversion.
- Existing stack, sitemap, robots.txt, canonical policy, hosting/CDN/WAF, analytics, and Search Console access.
- Language choice: English, Arabic, MSA, dialect, or bilingual.
- Risk level: internal audit, public page, regulated content, legal/compliance, customer-facing, high-stakes.
- Desired output: audit, implementation plan, metadata, schema, answer block, llms.txt, prompt audit, or measurement plan.

Ask only for missing context that blocks the work. For Arab public copy, mark native review when no reviewer evidence exists.

## Default Workflow

1. Check crawlability, indexability, canonical URLs, sitemap coverage, robots policy, redirects, and CDN/WAF access.
2. Identify the page entity, search intent, audience, country/region, and source-backed claims.
3. Load the relevant reference file for SEO foundation, answer blocks, crawler policy, structured data, or measurement.
4. Produce visible answer-shaped content before adding structured data or AI context files.
5. Add or recommend JSON-LD only when it matches visible page content.
6. Keep llms.txt and AI context files as navigation/context aids, not ranking promises.
7. Mark uncertainty, source gaps, native review needs, expert review needs, and measurement steps.

## Source And Confidence Rules

- High-confidence recommendations require official search, crawler, schema, or platform docs.
- Medium-confidence recommendations can use public research, implementation evidence, and repeatable audits.
- Low-confidence notes must be labeled as hypotheses, not facts.
- If a claim cannot be verified, say `Unknown from public docs`, `Needs vendor access`, or `Needs expert review`.
- Do not treat a GEO tactic as proven unless the measurement method and evidence are stated.

## Anti-Stereotype Rules

- Do not turn country, Arabic-language, or MENA search behavior into universal claims.
- Never say or imply that all Arabs, Egyptians, Saudis, Gulf users, Arabic speakers, or MENA buyers search or convert the same way.
- Scope recommendations by country, audience, segment, channel, query intent, and evidence.
- Native review is needed for public Arabic or dialect copy. Expert review is needed for regulated or legal claims.

## Output Rules

- Be practical: give page-level changes, metadata, schema choices, internal links, crawler rules, and validation commands.
- Separate SEO, AEO, and GEO workstreams.
- Include source URLs or source names for high-confidence claims.
- Mark what is visible content, what is structured data, and what is AI-readable support.
- End with a short validation checklist and measurement plan.

## Files To Read

- Routing and process: `SKILL.md`.
- Source map: `sources.yml`.
- SEO basics: `references/seo-foundation.md`.
- Answer pages: `references/aeo-answer-blocks.md`.
- AI crawler policy: `references/geo-ai-crawler-policy.md`.
- Schema: `references/structured-data.md`.
- Measurement: `references/measurement.md`.
- ArabSkills implementation notes: `references/arabskills-case-study.md`.
- Examples: `examples/source-backed-answer.md` and `examples/page-audit.md`.

## Safety Rules

- Do not bypass robots.txt, paywalls, gated docs, CAPTCHAs, or private pages.
- Do not publish hidden, misleading, irrelevant, or unsupported structured data.
- Do not create doorway pages, thin programmatic pages, keyword stuffing, fake review markup, fake author claims, or fake local expertise.
- Do not collect or expose PII in public analytics, logs, screenshots, review notes, or prompt-audit data.
- Do not provide political persuasion targeting, manipulative marketing guidance, or legal/compliance certainty.
- Require explicit approval before publishing production changes, changing crawler-blocking policy, or launching public Arabic copy.

## Validation Checklist

- Canonical URLs, sitemap URLs, metadata, and internal links are aligned.
- robots.txt allows intended search/user-request crawlers and does not accidentally block important pages.
- Structured data matches visible page content.
- Answer blocks are concise, source-backed, and internally linked.
- llms.txt and AI context files point to canonical public pages and data sources.
- Native review and expert review gates are visible where needed.
- Search Console, build logs, crawl checks, and prompt audits are defined.

## Done Criteria

- The output names files read and sources used.
- SEO, AEO, and GEO actions are separated and prioritized.
- Unsupported claims are not stated as fact.
- The user receives implementation steps, validation steps, and measurement steps.
