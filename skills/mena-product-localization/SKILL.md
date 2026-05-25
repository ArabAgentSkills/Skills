---
name: mena-product-localization
description: Use this skill when reviewing or implementing Arab/MENA product localization, including Arabic UI, RTL layout, bidirectional text, Arabic plurals, locale-aware numerals, date/time/calendar display, currency and VAT display, phone and address forms, checkout localization, names, policy copy, and accessibility.
---

# MENA Product Localization

## When To Use

Use this skill for product, UX, checkout, form, and UI localization work for Arabic or mixed Arabic-English products in MENA markets.

## When Not To Use

- Do not process live payments, refunds, payouts, tax submissions, identity checks, or production customer-data changes.
- Do not invent payment availability, VAT rules, national ID rules, legal requirements, endpoint URLs, credentials, or compliance claims.
- Route payment implementation to `mena-payments`, tax/e-invoicing to `arab-einvoicing-tax`, logistics/address validation to `mena-logistics`, and identity/government ID work to `arab-identity-gov`.

## Required Context

- Target country or locale, such as `ar-SA`, `ar-AE`, `ar-EG`, or cross-MENA.
- Surface type: app UI, checkout, form, dashboard, notification, policy, invoice summary, or support flow.
- Audience, channel, and risk level.
- Whether payments, tax, identity, delivery, payroll, or regulated customer data is involved.
- Sandbox vs production state if reviewing an implementation.

## Common Workflows

- Review RTL, bidi isolation, logical layout, Arabic fonts, focus order, and mixed-direction values.
- Review Arabic copy, pluralization, numerals, dates, calendars, currency, VAT labels, and checkout messages.
- Review phone, address, name, title, gender, and national-ID fields for data minimization and country fit.
- Create a localization launch checklist with source-backed facts, assumptions, unknowns, and review gates.

## Default Workflow

1. Read `sources.yml` and the reference file matching the request.
2. Capture country, locale, audience, surface, channel, and high-risk domains before making regional claims.
3. Use CLDR/Intl, Unicode bidi, W3C i18n, libphonenumber, and libaddressinput where applicable.
4. Mark legal, tax, payment, identity, and market-preference claims as `Unknown from public docs` unless a cited source or expert review supports them.
5. Use the scripts for deterministic examples or linting when reviewing files.
6. Answer with source-backed facts, assumptions, unknowns, validation steps, and review gates.

## Decision Tree

- RTL or mixed text: read `references/rtl-ux.md` and `references/bidi-text.md`.
- Arabic wording: read `references/arabic-ui-copy.md` and require native review for public or high-impact copy.
- Forms: read phone, address, names, and calendar references as needed.
- Checkout or money display: read `references/checkout-localization.md` and `references/currency-and-vat.md`, then route regulated payment or tax implementation to the owning skill.
- Broad product launch: read `references/product-localization-checklist.md`.

## Response Contract

- Start by naming `skills/mena-product-localization/SKILL.md` and the reference files used.
- Separate source-backed facts, implementation recommendations, assumptions, and unknowns.
- Include confidence labels for regional claims.
- Include native/expert review gates for Arabic copy, legal/tax/payment/identity content, and public campaigns.
- Include validation checks for sandbox/test and production readiness.
- Never provide live-action instructions that move money, tax documents, identity data, payroll data, customer data, or outbound messages without explicit human approval.

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

- Routing and process: `SKILL.md`.
- Source map: `sources.yml`.
- Topic references: `references/*.md`.
- Review example: `examples/product-localization-review.md`.
- Compatibility example: `examples/source-backed-answer.md`.
- Deterministic helpers: `scripts/rtl_copy_lint.js`, `scripts/locale_format_examples.js`, `scripts/phone_format_examples.js`.

## Safety Rules

- Keep canonical stored data separate from localized display.
- Use sandbox/test environments before production changes.
- Protect secrets, credentials, customer addresses, phone numbers, national IDs, and payment references.
- Require explicit approval before publishing, sending, launching, changing checkout/payment copy, or changing production localization behavior.
- Use retries and idempotency for any integration-adjacent workflow that writes orders, addresses, payments, or tax artifacts.

## Validation Checklist

- Locale, country, channel, and audience are explicit.
- Unknowns are labeled as `Unknown from public docs` or `Needs vendor access`.
- RTL and bidi behavior are tested with mixed Arabic/LTR values.
- Arabic plural, date, number, phone, address, and currency examples are tested.
- High-risk domains are routed to the owning skill and reviewed before production.
- Evals in `evals/prompts.yml` still cover the changed behavior.

## Done Criteria

- The answer names files read and sources used.
- Recommendations distinguish source-backed facts from assumptions.
- The output includes practical checks, review gates, and no unsupported legal, tax, payment, identity, pricing, or endpoint claims.
