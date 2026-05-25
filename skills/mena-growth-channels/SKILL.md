---
name: mena-growth-channels
description: Use this skill when selecting, prioritizing, testing, or reviewing Arab/MENA growth channels including paid social, search/SEO, WhatsApp commerce, creators, marketplaces, partnerships, and experiment plans.
---

# MENA Growth Channels

## When To Use

Use this skill for Arab/MENA channel selection, growth test planning, paid social/search/SEO planning, WhatsApp commerce, creator/influencer channels, marketplace channels, partnerships, and experiment design.

## When Not To Use

- Do not launch ads, send outbound messages, publish creator content, upload audiences, or spend budget.
- Do not claim a channel "works" in a country without scoped evidence.
- Do not use this skill as legal, privacy, platform, religious, or local media-buying approval.

## Required Context

- Country or countries, segment, product category, target audience, channel candidates, language, budget range, and test period.
- Existing assets: landing pages, analytics, CRM consent state, creative, content, marketplace listings, partnership leads, or creator lists.
- Risk flags: paid ads, direct marketing, creator/testimonial, regulated category, minors, privacy, finance, health, identity, politics, religion, or national symbolism.
- Sandbox/test state versus production/live campaign state.

## Common Workflows

- Classify the request as channel selection, paid social, search/SEO, WhatsApp commerce, creators, marketplaces, partnerships, or experiments.
- Create scoped channel notes with country, segment, channel, confidence, evidence, source URL, and review status.
- Convert unsupported channel claims into hypotheses, `Unknown from public docs`, `Unknown from public sources`, `Needs vendor access`, or `needs expert review`.
- Design small tests with success metrics, stop rules, review gates, and rollback.
- Require explicit human approval before spend, send, launch, publish, or audience upload.

## Default Workflow

1. Read `sources.yml` for source groups, channel notes, confidence labels, and caveats.
2. Load only the relevant reference file from `references/`.
3. Use `references/channel-selection.md` for any cross-channel recommendation.
4. Use `references/experiments.md` for test plans and measurement.
5. Answer with source-backed facts, hypotheses, unknowns, review gates, and validation steps.

## Response Contract

- Start by naming files read.
- Give a short channel recommendation or test plan before details.
- Separate evidence-backed signals from assumptions and unknowns.
- Scope every channel note by country, segment, channel, confidence, evidence, source URL, and review status.
- Include sandbox/test steps, privacy/platform/legal/native review, and production launch gate.

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
- Channel selection: `references/channel-selection.md`.
- Paid social: `references/paid-social.md`.
- Search/SEO: `references/search-seo.md`.
- WhatsApp: `references/whatsapp-commerce.md`.
- Creators: `references/creators-influencers.md`.
- Marketplaces: `references/marketplaces.md`.
- Partnerships: `references/partnerships.md`.
- Experiments: `references/experiments.md`.
- Launch readiness: `references/integration-checklist.md`.
- Example: `examples/channel-test-plan.md`.

## Safety Rules

- No broad Arab, MENA, GCC, nationality, religion, dialect, gender, age, or income stereotypes.
- No unsupported channel-performance, CAC, conversion, timing, audience-preference, legal, or compliance claims.
- Require opt-in, privacy/legal review, stop/unsubscribe handling, and explicit approval for WhatsApp, email, SMS, CRM, or retargeting.
- Require platform-policy review for paid ads, sensitive targeting, restricted categories, personal-attribute copy, and landing pages.
- Require disclosure, usage rights, claims review, and local review for creators.
- Keep credentials, ad account access, analytics exports, customer lists, and partner data private.

## Validation Checklist

- Every channel note has country, segment, channel, confidence, evidence, source URL, and review status.
- Unsupported channel claims are marked as hypotheses, unknown, or review-required.
- Experiment metrics, sample limits, budget caps, stop rules, and owner are stated.
- Sandbox/test work is separated from production/live launch.
- High-risk live actions require explicit approval.
- Evals in `evals/prompts.yml` cover the changed behavior.

## Done Criteria

- The answer gives a practical, scoped channel plan.
- Unknowns and review gates are visible.
- No invented regional, platform, legal, cultural, calendar, or performance claims are included.
- No send, publish, audience upload, partnership commitment, or paid campaign launch is performed without explicit approval.
