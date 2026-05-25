---
name: arab-market-context
description: Use this skill when producing source-backed Arab country context, regional operating assumptions, market-entry notes, or safe localization/payment/logistics/support handoffs for Egypt, GCC, Levant, North Africa, Iraq, or Palestine.
---

# Arab Market Context

## When To Use

Use this skill before choosing copy, checkout, logistics, support, outreach, tax, identity, or open-data behavior in Arab markets.

## When Not To Use

- Do not use it as a vendor API implementation guide.
- Do not make legal, tax, identity, payment, marketing, or cultural claims without source and review gates.
- Do not create final dialect copy, public campaign copy, or outbound messages without native review.
- Do not launch, send, publish, pay, refund, verify identity, or modify customer data.

## Required Context

- Country or countries; if missing, ask or return a selection checklist.
- Audience: B2B, B2C, SMB, enterprise, public sector, regulated, or other.
- Channel: website, app, support, WhatsApp, SMS, email, paid ads, sales, logistics, checkout, or research.
- Intended use: planning, draft copy, implementation handoff, review, public export, or launch.
- Risk state: sandbox/draft vs production/live, and whether sensitive data is involved.

## Common Workflows

- Create a source-backed country brief.
- Review a market assumption for scope, source quality, confidence, and anti-stereotype risk.
- Route payment, logistics, comms, tax, identity, open-data, and Arabic NLP work to the right skill.
- Convert broad regional requests into country-specific questions and review gates.

## Default Workflow

1. Read `sources.yml` for source coverage and last-checked dates.
2. Read `references/region-overview.md` for cross-country rules.
3. Read the specific `references/countries/<country>.md` file for each requested country.
4. For claim safety, read `references/evidence-model.md`, `references/confidence-model.md`, and `references/claim-ledger-guide.md`.
5. If implementation is requested, route to the relevant domain skill instead of inventing steps.
6. Answer with facts, hypotheses, unknowns, review gates, and validation steps.

## Files To Read

- Routing and process: `SKILL.md`.
- Source map: `sources.yml`.
- Cross-country rules: `references/region-overview.md`.
- Country packs: `references/countries/*.md`.
- Claim standards: `references/evidence-model.md`, `references/confidence-model.md`, `references/claim-ledger-guide.md`.
- Implementation checklist: `references/integration-checklist.md`.
- Example answer style: `examples/source-backed-country-brief.md`.

## Source And Confidence Rules

- High-confidence country facts require URL, source type/date, confidence, and `last_checked_at`.
- Use DataReportal and regional reports as planning signals, not proof of individual behavior.
- Use World Bank and official country sources for scoped statistics or source existence.
- Mark missing facts as `Unknown from public docs` or `Needs vendor access`.
- Mark dialect, cultural, legal, privacy, survey, religious, and platform claims as review-required unless scoped review exists.

## Anti-Stereotype Rules

- Do not collapse Arabs, MENA, GCC, Levant, Maghreb, Muslims, Arabic speakers, or any nationality into one behavior.
- Do not infer trust, wealth, religiosity, politics, price sensitivity, risk appetite, or channel preference from nationality or language.
- Phrase aggregate evidence as country-level or source-level signals.
- Treat WhatsApp, COD, social DMs, dialect, humor, and holiday tone as hypotheses until evidence or review exists.

## Response Contract

- Start by naming the country files and references used.
- Separate `Source-backed facts`, `Planning hypotheses`, `Unknowns`, `Review required`, and `Skill handoffs`.
- Include country, audience, channel, timeframe, confidence, and source URL for each factual claim.
- Gate money movement, identity/government, tax, customer data, outbound messaging, paid ads, public publishing, and production changes.
- Do not provide live-action instructions without explicit human approval.

## Output Rules

- Prefer short tables for claims and clear bullets for action.
- Use MSA for formal cross-market Arabic guidance; dialect copy is draft-only and needs native review.
- Use local rails, address systems, and support channels as hints unless implementation docs are loaded.
- Include `Unknown from public docs`, `Needs native review`, or `Needs expert review` instead of guessing.

## Safety Rules

- Keep sandbox/draft and production/live actions separate.
- Protect customer phones, addresses, order IDs, payment references, identity documents, survey responses, and reviewer data.
- Require explicit approval before live payments, refunds, identity checks, tax submissions, outbound messages, paid campaigns, audience uploads, public publishing, or customer-data changes.
- Do not store secrets, credentials, private vendor docs, raw survey responses, or reviewer PII in public skill files.

## Validation Checklist

- Country, audience, channel, timeframe, and intended use are captured or marked missing.
- Source-backed claims have URLs, confidence, and last-checked dates.
- Unsupported claims are hypotheses, unknowns, or review-required items.
- Dialect, cultural, legal, privacy, platform, religious, political, and survey claims have review flags.
- No universal or stereotype-prone claims are used.
- Handoffs to payment, logistics, comms, tax, identity, open-data, or Arabic NLP skills are explicit.
- Evals in `evals/prompts.yml` cover the changed behavior.

## Done Criteria

- The answer names the files read and separates facts from hypotheses.
- The output includes next steps and validation checks.
- No unsupported country, legal, cultural, payment, logistics, language, channel, or endpoint claims are included.
- High-risk live actions remain gated behind explicit approval.
