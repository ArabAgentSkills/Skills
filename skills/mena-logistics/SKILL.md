---
name: mena-logistics
description: Use this skill when building Arab/MENA shipping, courier, last-mile, label, rate, tracking, pickup, webhook, and fulfillment integrations for Aramex, Bosta, ShipBlu, OTO, Naqel, SMSA, SPL, Quiqup, Shipa, Aymakan, and similar providers.
---

# MENA Logistics

## When To Use

Use this skill for logistics work in Arab/MENA contexts, especially when the prompt includes: shipping, courier, label, tracking, pickup, last mile, fulfillment, 3PL.

## When Not To Use

- Do not create live shipments without explicit approval.
- Do not assume COD or return support without sources.

## Required Inputs

- Country or market.
- Target vendor, if already selected.
- Desired workflow: vendor selection, implementation, review/debugging, launch readiness, or source research.
- Sandbox vs production state.
- Whether live customer, payment, tax, identity, bank, or payroll data is involved.

## Common Workflows

- Identify shipment lifecycle stage: rates, create shipment, label, pickup, tracking, return, or cancellation.
- Read vendor file for docs access and known gotchas.
- Return a test plan with address, COD, label, and tracking checks.
- Keep carrier-specific facts tied to source URLs.

## Default Workflow

1. Read `sources.yml` to see available vendors and confidence.
2. If a vendor is named, read only `vendors/<vendor-id>.md` for that vendor.
3. If choosing vendors, compare only vendors in this skill's registry: aramex, aymakan, bosta, dubai-makani, fetchr, jeebly, naqel, oto, quiqup, saudi-national-address-api-spl, saudi-post-spl, shipa, and 2 more.
4. Load `references/integration-checklist.md` only for implementation, review, or launch-readiness work.
5. Use `scripts/list-vendors.mjs` for a deterministic vendor list when needed.
6. Answer with source-backed facts, explicit unknowns, and validation steps.

## Decision Tree

- Named vendor: read that vendor file, then answer narrowly.
- Vendor selection: filter by country, docs access, maturity, and source quality before recommending.
- Implementation: include auth, sandbox, webhook/callback, retries, idempotency, logging, and error handling only where source-backed.
- Review/debugging: compare the user's plan or code against the vendor file, `sources.yml`, and `references/integration-checklist.md`.
- Source research: update facts only when an official source, developer portal, GitHub repo, OpenAPI/Postman asset, or government source supports the claim.
- Missing docs: say `Needs vendor access` or `Unknown from public docs`.

## Response Contract

- Start by naming the skill file and vendor/reference files used.
- Give a short recommendation or implementation path before details.
- Separate source-backed facts from assumptions and unknowns.
- Include country/market fit, docs access, docs confidence, and source-quality caveats when selecting vendors.
- Include a validation checklist with sandbox/test steps, rollback or retry notes, and manual approval gates for high-risk work.
- Never provide live-action instructions that move money, tax documents, bank data, identity data, payroll data, or outbound messages without explicit human approval.

## Files To Read

- Routing and process: `SKILL.md`.
- Vendor facts: `vendors/*.md`.
- Source map: `sources.yml`.
- Implementation review: `references/integration-checklist.md`.
- Example response style: `examples/source-backed-answer.md`.

## Safety Rules

- Use test accounts or sandbox where available.
- Protect customer addresses and phone numbers.
- Do not bypass gated carrier portals.
- Keep retries idempotent for shipment creation.

## Validation Checklist

- Vendor facts map back to `source_urls`.
- Unknowns are labeled instead of guessed.
- Sandbox and production are separated.
- Secrets are not printed or committed.
- High-risk live actions require explicit human approval.
- Evals in `evals/prompts.yml` still cover the changed workflow.

## Done Criteria

- The answer names the files read or source-backed references used.
- The implementation plan includes tests and rollback/verification steps.
- No unsupported regional, API, compliance, pricing, or endpoint claims are included.
