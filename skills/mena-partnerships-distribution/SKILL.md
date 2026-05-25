---
name: mena-partnerships-distribution
description: Use this skill when planning, drafting, or reviewing Arab/MENA partnerships and distribution motions, including reseller strategy, agency partnerships, systems integrators, telco or bank partnerships, payment or logistics partnerships, partner pitches, and co-marketing. It drafts and reviews; it does not approve terms or submit partner applications.
---

# MENA Partnerships and Distribution

## When To Use

Use this skill for Arab/MENA partner strategy, reseller/distributor planning, agency partnerships, systems integrators, regulated ecosystem caution, partner pitches, co-marketing, and due diligence.

## When Not To Use

- Do not sign, submit, register, upload, publish, send, or approve partner terms.
- Do not promise access to banks, telcos, ministries, regulators, chambers, customer lists, or procurement shortcuts.
- Do not provide legal, regulatory, tax, telecom, banking, open-banking, anti-bribery, or commercial agency advice.

## Required Context

- Country or market, partner type, sector, shared customer, commercial model, and intended channel.
- Whether the partner touches customer data, payments, logistics, telecom, bank data, identity, tax, payroll, health, education, government, or public procurement.
- Motion type: referral, reseller, distributor, implementation, agency bundle, technology integration, co-marketing, or regulated ecosystem.
- Requested exclusivity, territory, revenue share, commission, sublicensing, customer ownership, logo use, data access, or production API access.
- Sandbox vs production state if technical integration, shared CRM, partner portal, or message/customer-data workflows are involved.

## Common Workflows

- Classify the partner motion and risk tier.
- Separate commercial fit from regulated feasibility.
- Draft a partner pitch, due-diligence checklist, co-marketing plan, or pilot-first partner plan.
- Flag legal, procurement, regulatory, privacy, security, and operator review gates before live action.
- Keep local tone, seniority, Arabic wording, and relationship claims scoped and review-required unless source-backed.

## Default Workflow

1. Read `sources.yml` for source quality and source-use limits.
2. Read only the relevant reference files under `references/`.
3. State the partner type, country/market, shared customer, channel, and risk tier.
4. Separate source-backed facts from assumptions, `Unknown from public docs`, and items needing local legal, compliance, regulator, platform, security, or native/operator review.
5. Recommend a pilot-first, no-exclusivity default unless the user provides reviewed legal/commercial direction.
6. For integration or automation, separate sandbox and production, protect credentials and secrets, and require retry/idempotency, access control, data minimization, and audit logging.

## Response Contract

- Start by naming `SKILL.md` and the reference files used.
- Ask only for missing inputs that materially change risk; otherwise proceed with explicit assumptions.
- Avoid stereotypes and broad claims about Arab, MENA, GCC, national, religious, dialect, gender, age, or class groups.
- Use public partner pages as examples, not proof of terms, acceptance criteria, or access.
- Include operator review flags before any partner outreach, public announcement, co-marketing asset, partner application, contract, or integration.
- Mark government and semi-government partnership content as procurement-sensitive and operator-review required.

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
- Use native review or expert review labels when partner pitch wording, regulated-sector claims, government context, or local business etiquette risk is present.
- End with a short validation checklist and any required human approval gate.

## Files To Read

- Source map: `sources.yml`.
- Distribution strategy: `references/reseller-strategy.md`.
- Agency/services: `references/agency-partnerships.md`.
- Enterprise implementation: `references/system-integrators.md`.
- Regulated ecosystem: `references/telco-bank-partnerships.md`, `references/payment-logistics-partnerships.md`.
- Pitch/launch support: `references/partner-pitch.md`, `references/co-marketing.md`.
- Example style: `examples/partner-plan.md` or `examples/source-backed-answer.md`.

## Safety Rules

- Anti-stereotype rule: do not turn country, regional, language, religion, gender, age, or class labels into partner personality claims or negotiation norms.
- Draft only; never sign, submit, send, upload, publish, announce, register, grant access, or change settings without explicit approval.
- Do not invent local partner norms, commercial agency obligations, exclusivity rules, regulatory approval, licenses, partner acceptance criteria, customer introductions, or public logos.
- For co-marketing, events, CRM handoff, email, WhatsApp, or SMS follow-up, require consent/opt-in, sender identity, opt-out, and policy review.
- Government and semi-government content requires operator review and procurement caution before outreach, pitch, registration, or co-marketing.
- Payments, banking, open banking, telco, logistics, identity, tax, payroll, health, education, government, and public procurement require legal/compliance and security review.
- Do not share customer names, customer data, production access, credentials, pricing, security docs, or roadmap details unless approved.
- Keep Arabic, dialect, etiquette, religious, national, or culturally specific copy draft-only until native/operator review is complete.

## Validation Checklist

- Partner type, country, shared customer, commercial model, data access, and risk tier are recorded or marked unknown.
- Regulated sectors, government/semi-government routes, data flows, and production access are flagged.
- Source-backed facts map to `sources.yml`; unsupported claims are labeled `Unknown from public docs`.
- Pitch language avoids guaranteed access, fake relationships, and unsupported local norms.
- Sandbox and production are separated for integrations, and secrets are not printed or committed.
- Evals cover reseller, agency, SI, regulated ecosystem, co-marketing, and anti-stereotype behavior.

## Done Criteria

- The answer names the files read and the partner motion selected.
- The output is practical but draft-only, with approval gates for live action and public use.
- Regional claims are scoped and caveated; no unsupported partnership norms or access claims are included.
