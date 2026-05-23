---
name: arab-identity-gov
description: Use this skill when evaluating Arab identity, address, digital-government, national login, and government API marketplace integrations such as UAE PASS, Nafath, Yakeen, Saudi National Address, Makani, and UAE API Marketplace.
---

# Arab Identity and Government APIs

## When To Use

Use this skill for identity-government work in Arab/MENA contexts, especially when the prompt includes: identity, government, UAE PASS, Nafath, Yakeen, National Address, Makani.

## When Not To Use

- Do not bypass government onboarding.
- Do not process real identity checks without approval.

## Required Inputs

- Country or market.
- Target vendor, if already selected.
- Desired flow: identify, read, separate, return.
- Sandbox vs production state.
- Whether live customer, payment, tax, identity, bank, or payroll data is involved.

## Default Workflow

1. Read `sources.yml` to see available vendors and confidence.
2. If a vendor is named, read only `vendors/<vendor-id>.md` for that vendor.
3. If choosing vendors, compare only vendors in this skill's registry: makani, nafath, saudi-national-address, uae-api-marketplace, uae-pass, yakeen, yakeen-by-elm.
4. Load `references/integration-checklist.md` only for implementation, review, or launch-readiness work.
5. Use `scripts/list-vendors.mjs` for a deterministic vendor list when needed.
6. Answer with source-backed facts, explicit unknowns, and validation steps.

## Decision Tree

- Named vendor: read that vendor file, then answer narrowly.
- Vendor selection: filter by country, docs access, maturity, and source quality before recommending.
- Implementation: include auth, sandbox, webhook/callback, retries, idempotency, logging, and error handling only where source-backed.
- Missing docs: say `Needs vendor access` or `Unknown from public docs`.

## Files To Read

- Routing and process: `SKILL.md`.
- Vendor facts: `vendors/*.md`.
- Source map: `sources.yml`.
- Implementation review: `references/integration-checklist.md`.
- Example response style: `examples/source-backed-answer.md`.

## Safety Rules

- Treat identity verification and government credentials as high-risk.
- Use official onboarding channels only.
- Require explicit approval before live identity verification or government-account changes.
- Never store national IDs or identity artifacts unless required and approved.
- Mask PII in logs and examples.

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
