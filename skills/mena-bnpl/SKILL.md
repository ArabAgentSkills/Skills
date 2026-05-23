---
name: mena-bnpl
description: Use this skill when integrating or evaluating Arab/MENA buy-now-pay-later providers such as Tabby, Tamara, valU, Souhoola, Shahry, Postpay, Cashew, and related checkout, order, refund, and settlement workflows.
---

# MENA BNPL

## When To Use

Use this skill for bnpl work in Arab/MENA contexts, especially when the prompt includes: BNPL, installments, Tabby, Tamara, valU, Souhoola, Shahry, Postpay.

## When Not To Use

- Do not promise approval rates, credit decisions, or regulated terms.
- Do not invent installment plans.

## Required Inputs

- Country or market.
- Target vendor, if already selected.
- Desired flow: identify, read, separate, return.
- Sandbox vs production state.
- Whether live customer, payment, tax, identity, bank, or payroll data is involved.

## Default Workflow

1. Read `sources.yml` to see available vendors and confidence.
2. If a vendor is named, read only `vendors/<vendor-id>.md` for that vendor.
3. If choosing vendors, compare only vendors in this skill's registry: cashew, postpay, shahry, souhoola, tabby, tamara, valu.
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

- Treat financing, refunds, and settlement as high-risk operations.
- Use sandbox or test merchants first.
- Require explicit approval before live BNPL capture, cancellation, refund, or settlement operations.
- Confirm cancellation/refund behavior in official docs before implementation.
- Do not store unnecessary customer financial data.

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
