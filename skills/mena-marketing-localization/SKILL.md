---
name: mena-marketing-localization
description: Use this skill when localizing Arab/MENA marketing campaigns, landing pages, paid media, SEO, creator briefs, offers, trust signals, Ramadan/Eid/national-day plans, or campaign sensitivity reviews.
---

# MENA Marketing Localization

## When To Use

Use this skill for Arab/MENA campaign localization, landing-page localization, paid social/search copy review, SEO localization, creator briefs, offer design, trust signals, Ramadan/Eid/national-day campaign planning, and sensitivity review.

## When Not To Use

- Do not launch ads, send outbound messages, publish creator content, or upload audiences.
- Do not make legal, religious, cultural, or performance claims without scoped evidence and review status.
- Do not write final dialect, religious, national-symbol, regulated-category, or high-risk public copy without native/expert review gates.

## Required Context

- Country or countries, audience segment, channel, language, campaign period, and intended use.
- Product category and risk flags: paid ads, direct marketing, creator/testimonial, regulated category, minors, privacy, finance, health, identity, politics, religion, or national symbolism.
- Source material: brief, landing page, ad copy, offer, calendar, analytics, or research.
- Sandbox/test state versus production/live campaign state.

## Common Workflows

- Classify the request as campaign planning, Ramadan/Eid planning, landing-page localization, paid social, search/SEO, creator brief, offer design, trust-signal review, or sensitivity review.
- Record every market note with country, segment, channel, confidence, evidence, source URL, last checked date, and review status.
- Convert unsupported claims into hypotheses, `Unknown from public docs`, `Unknown from public sources`, `Needs vendor access`, or `needs expert review`.
- Route dialect, humor, religious, national-symbol, privacy, legal, regulated, and platform-policy issues to native or expert review.
- Prepare launch materials and approval checklists, but require explicit human approval before any live send, publish, or paid campaign launch.

## Default Workflow

1. Read `sources.yml` for source groups, scoped market notes, confidence labels, and caveats.
2. Load only the needed reference file from `references/`.
3. If the task involves seasonality, read `references/ramadan-eid-campaigns.md` and `references/campaign-sensitivity.md`.
4. If the task involves live ads, outbound messaging, or creator content, read `references/integration-checklist.md`.
5. Produce a practical brief with facts, assumptions, unknowns, review gates, test plan, and production launch gate.

## Response Contract

- Start with the files read.
- State the country, segment, channel, language, timeframe, confidence, evidence, and review status for each market note.
- Separate source-backed facts from hypotheses and unknowns.
- Include native, legal, privacy, platform, creator, or operations review gates where relevant.
- Include validation steps for sandbox/test accounts, landing pages, tracking, consent, and rollback before production.

## Source And Confidence Rules

- High-confidence claims require public sources or completed review evidence.
- Medium-confidence notes need source-backed signals or multiple weak sources.
- Low-confidence notes must be labeled as hypotheses, unknowns, or review-required.
- Do not turn country-level statistics into individual-level behavior claims.

## Anti-Stereotype Rules

- Never assign traits to nationality, religion, ethnicity, dialect group, gender, age, or income group.
- Scope recommendations by country, audience, segment, channel, and evidence.
- Prefer "for this audience and channel, consider" over broad cultural claims.

## Output Rules

- Give practical drafts, plans, templates, checklists, or QA steps.
- Mark dialect, public brand copy, regulated content, and strategic recommendations as review-required when not reviewed.
- End with a short validation checklist and any required human approval gate.

## Files To Read

- Source map: `sources.yml`.
- Planning: `references/campaign-planning.md`.
- Seasonality: `references/ramadan-eid-campaigns.md`.
- Landing pages: `references/landing-page-localization.md`.
- Paid social: `references/paid-social.md`.
- Search and SEO: `references/search-and-seo.md`.
- Creators: `references/influencer-briefs.md`.
- Offers: `references/offer-design.md`.
- Trust: `references/trust-signals.md`.
- Safety: `references/campaign-sensitivity.md`.
- Launch readiness: `references/integration-checklist.md`.
- Example: `examples/campaign-localization-brief.md`.

## Safety Rules

- No broad Arab, MENA, GCC, nationality, religion, gender, age, or income stereotypes.
- No unsupported channel-performance, conversion, timing, salary, cultural, legal, or religious claims.
- Require opt-in, privacy/legal review, stop/unsubscribe handling, and explicit approval for outbound or CRM campaigns.
- Require platform-policy review for paid ads, retargeting, restricted categories, personal-attribute copy, and landing pages.
- Require disclosure, claims substantiation, rights, whitelisting terms, and review for creators.
- Keep credentials, pixels, ad account access, customer lists, and analytics exports private.

## Validation Checklist

- Each market note has country, segment, channel, confidence, evidence, source URL, and review status.
- Unsupported notes are marked as hypotheses, unknown, or review-required.
- Landing page language, currency, trust fields, privacy, and support paths match the target market.
- Sandbox/test campaign QA is separated from production launch.
- High-risk live actions require explicit approval.
- Evals in `evals/prompts.yml` cover the changed behavior.

## Done Criteria

- The output is scoped, source-backed, and practical.
- Unknowns and review gates are visible.
- No invented regional, platform, legal, cultural, religious, calendar, or performance facts are included.
- No send, publish, audience upload, or paid campaign launch is performed without explicit approval.
