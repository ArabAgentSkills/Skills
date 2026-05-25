---
name: mena-sales-playbooks
description: Use this skill when planning, drafting, or reviewing Arab/MENA B2B sales playbooks, SME sales outreach, enterprise sales motions, WhatsApp follow-up, meeting follow-up, objection handling, procurement caution, and reseller/channel sales. It drafts and reviews; it does not send messages or submit procurement actions.
---

# MENA Sales Playbooks

## When To Use

Use this skill for Arab/MENA B2B sales planning, sales sequence drafts, discovery agendas, meeting follow-ups, objection handling, procurement routing, and reseller/channel sales support.

## When Not To Use

- Do not send email, WhatsApp, SMS, calls, proposals, tenders, registrations, or uploads externally.
- Do not scrape contacts, chambers, LinkedIn, directories, or WhatsApp groups.
- Do not provide legal, procurement, privacy, telecom, tax, banking, or anti-bribery advice.

## Required Context

- Country or market, buyer segment, sector, buyer persona, sales stage, and intended channel.
- Contact source, prior relationship, and consent or lawful-basis status.
- Whether the buyer is government, semi-government, public sector, regulated, or procurement-led.
- Language preference: English, MSA Arabic, bilingual, or locally reviewed dialect.
- Sandbox vs production state if the request includes CRM automation, enrichment, sequencing, or message delivery.

## Common Workflows

- Classify the motion as SME outbound, enterprise sales, WhatsApp follow-up, meeting follow-up, objection handling, procurement caution, or reseller/channel sales.
- Route to the relevant reference file before drafting.
- Build a scoped sales plan with assumptions, unknowns, review flags, and one clear next step.
- Draft short, permission-aware copy only after channel and consent status are known.
- For enterprise, government, or semi-government work, map procurement before recommending the next sales action.

## Default Workflow

1. Read `sources.yml` for source quality and regional caveats.
2. Read only the relevant reference files under `references/`.
3. State the sales motion, country/market, buyer type, channel, and risk tier.
4. Separate source-backed facts from assumptions, `Unknown from public docs`, and items needing native/operator, legal, privacy, platform, or procurement review.
5. Provide a draft, checklist, or plan only; do not claim anything was sent or approved.
6. If automation is requested, keep sandbox and production separated, protect credentials and secrets, and require retry/idempotency, suppression, opt-out, and audit logging before any launch.

## Response Contract

- Start by naming `skills/mena-sales-playbooks/SKILL.md` and the reference files used.
- Ask only for missing inputs that materially change risk; otherwise proceed with explicit assumptions.
- Avoid sweeping claims about Arabs, MENA, GCC, nationalities, religions, dialect groups, gender, age, or class.
- Use source-backed country notes as constraints, not as universal local-sales norms.
- Include operator review flags before any live action.
- For WhatsApp, SMS, and email, include consent/opt-in, sender identity, opt-out, platform-policy, and contact-source checks.
- Mark local tone, dialect, greeting, seniority etiquette, humor, urgency, and religious or national references as `Needs native/operator review`.

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
- Use native review or expert review labels when local tone, procurement, legal, regulated-sector, or public messaging risk is present.
- End with a short validation checklist and any required human approval gate.

## Files To Read

- Source map: `sources.yml`.
- SME and outbound: `references/b2b-outbound.md`, `references/sme-sales.md`.
- Enterprise and procurement: `references/enterprise-sales.md`, `references/procurement-caution.md`.
- Follow-up and objections: `references/whatsapp-follow-up.md`, `references/meeting-follow-up.md`, `references/objection-handling.md`.
- Channel sales: `references/reseller-channel-sales.md`.
- Example style: `examples/sales-sequence.md` or `examples/source-backed-answer.md`.

## Safety Rules

- Anti-stereotype rule: do not turn country, regional, language, religion, gender, age, or class labels into buyer personality claims or sales norms.
- Draft only; never send, publish, call, upload, submit, register, or trigger outbound workflows without explicit human approval.
- Do not invent customer references, local norms, government access, regulatory approvals, partnerships, pricing, ROI, integration coverage, or compliance claims.
- Government and semi-government content requires procurement caution and operator review before outreach, proposal, registration, or meeting follow-up is finalized.
- High-risk sectors include payments, banking, open banking, telecom, logistics, identity, tax, payroll, health, education, public procurement, and government data.
- Do not use personal data, contact lists, CRM exports, meeting notes, or WhatsApp chats unless permission, minimization, retention, and access boundaries are clear.
- Keep dialect and culturally specific copy draft-only until native/operator review is complete.

## Validation Checklist

- Country, segment, buyer type, channel, sales stage, and permission state are recorded or marked unknown.
- Procurement and regulated-sector risks are flagged where relevant.
- Source-backed facts map to `sources.yml`; unsupported claims are labeled `Unknown from public docs`.
- Drafts are non-deceptive, low-pressure, specific, and easy to opt out of where outbound applies.
- Sandbox and production are separated for any automation, and secrets are not printed or committed.
- Evals in `evals/prompts.yml` still cover safety, procurement, WhatsApp, objections, and anti-stereotype behavior.

## Done Criteria

- The answer names the files read and the sales motion selected.
- The output is practical but draft-only, with approval gates for live action.
- Regional claims are scoped and caveated; no unsupported sales norms or stereotypes are included.
