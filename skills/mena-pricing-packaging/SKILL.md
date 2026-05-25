---
name: mena-pricing-packaging
description: Use this skill when designing, reviewing, localizing, or safety-checking Arab/MENA pricing pages, SaaS packaging, self-serve vs demo pricing, VAT and currency display, BNPL/installment positioning, discounts, enterprise quotes, procurement-friendly offers, and pricing-page claims.
---

# MENA Pricing Packaging

## When To Use

Use this skill for MENA pricing and packaging strategy, pricing-page localization, offer QA, quote structure, VAT/currency display review, discount copy, and procurement-friendly package design.

## When Not To Use

- Do not change live prices, publish pricing pages, send quotes, submit tenders, enable payment/BNPL methods, or launch offers without explicit approval.
- Do not invent exact prices, competitor prices, merchant fees, tax rates, Sharia claims, conversion uplift, endpoint URLs, credentials, or compliance claims.
- Route tax/e-invoicing to `arab-einvoicing-tax`, payments to `mena-payments`, BNPL implementation to `mena-bnpl`, open banking to `mena-open-banking`, and payroll/HR compliance to `mena-hr-payroll`.

## Required Context

- Country or market.
- Buyer type: consumer, self-serve SME, assisted SMB, mid-market, enterprise, government, regulated, or marketplace.
- Pricing surface: public pricing page, checkout, quote, tender, reseller offer, annual renewal, or discount campaign.
- Currency, tax status, billing period, and sales motion if known.
- Whether live customer, payment, tax, payroll, identity, or bank data is involved.

## Common Workflows

- Review pricing pages for VAT/currency clarity, plan logic, hidden fees, add-ons, and unsupported claims.
- Design package hypotheses by segment without inventing exact prices.
- Draft enterprise quote structures with tax treatment, scope, SLA, implementation, support, validity, and procurement fields.
- Review BNPL/installment, annual discount, free trial, and promotion wording for safety.

## Default Workflow

1. Read `sources.yml` and the reference file matching the request.
2. Classify country, buyer type, pricing surface, tax context, currency, and sales motion.
3. Use source-backed pricing facts only when the source is current and explicitly states them.
4. Label recommendations as high, medium, low, unknown, or needs review.
5. Use `Unknown from public docs` for exact prices, tax treatment, merchant fees, or provider terms not supported by current public sources.
6. Prepare drafts and review notes only; require explicit approval before live pricing, publishing, sending, or procurement actions.

## Decision Tree

- Pricing page localization: read `references/pricing-page-localization.md`.
- VAT or currency: read `references/vat-and-currency.md`.
- B2B or enterprise package: read `references/b2b-packaging.md`, `references/saas-pricing.md`, and `references/quote-and-procurement.md`.
- Ecommerce offer, BNPL, installment, or discount: read `references/ecommerce-offers.md` and `references/discounting.md`.

## Response Contract

- Start by naming `skills/mena-pricing-packaging/SKILL.md` and the reference files used.
- Separate source-backed facts, pricing hypotheses, assumptions, unknowns, and review-required items.
- Confidence-label all pricing and packaging recommendations.
- Avoid exact pricing claims unless source-backed with source URL and checked date.
- Include tax/legal/procurement/native review gates where relevant.
- Never provide live-action instructions that change prices, move money, submit tenders, send quotes, or publish offers without explicit human approval.

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
- Review example: `examples/pricing-localization-review.md`.
- Compatibility example: `examples/source-backed-answer.md`.

## Safety Rules

- Treat VAT, discounts, BNPL/installments, procurement, payroll, payments, tax, identity, and regulated pricing as high-risk.
- Use sandbox/test workflows before production pricing or checkout changes.
- Protect secrets, credentials, customer data, quote details, procurement documents, and pricing models.
- Require explicit approval before publish, send, launch, price changes, quote submission, discount activation, or tender submission.
- Use retries and idempotency for any automation that writes pricing records, checkout plans, quotes, or discounts.

## Validation Checklist

- Country, buyer type, sales motion, currency, billing period, and tax context are explicit or marked unknown.
- Exact prices, discounts, fees, and tax treatment are source-backed or marked `Unknown from public docs`.
- VAT-inclusive/exclusive wording has official-source and expert-review caveats.
- BNPL/installment copy avoids guaranteed approval, hidden fees, Sharia claims, and unsupported conversion claims.
- Procurement and quote outputs include review gates and approval before sending.
- Evals in `evals/prompts.yml` still cover tax, BNPL, quote, free trial, discount, and exact-price failure modes.

## Done Criteria

- The answer names files read and sources used.
- Pricing recommendations are confidence-labeled and source-scoped.
- No unsupported exact price, legal, tax, BNPL, Sharia, procurement, endpoint, compliance, or performance claims are included.
