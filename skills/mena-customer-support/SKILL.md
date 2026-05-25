---
name: mena-customer-support
description: Use this skill when drafting, reviewing, localizing, or evaluating Arab/MENA customer support macros, Arabic or bilingual support replies, WhatsApp and Instagram support handling, ecommerce payment/refund/delivery/account/subscription/tax responses, complaint de-escalation, escalation rules, and native-review-needed customer-facing Arabic.
---

# MENA Customer Support

## When To Use

Use this skill for Arab/MENA support work involving WhatsApp, Instagram DM/comment, web chat, email, ecommerce orders, payments, refunds, delivery, lost shipments, COD disputes, complaints, account verification, OTP issues, subscriptions, cancellation, and invoice/tax questions.

## When Not To Use

- Do not send customer messages or trigger outbound automation.
- Do not finalize refunds, cancellations, account closure, identity reset, shipment compensation, or tax corrections.
- Do not invent merchant policy, country law, platform policy, carrier status, payment status, timelines, or eligibility.

## Required Context

- Country/market, channel, customer language, and public/private context.
- Scenario and risk level.
- Merchant policy inputs: refund/return/cancellation terms, carrier status/SLA, payment status, subscription terms, or tax invoice policy.
- Draft vs approved macro, and sandbox/test queue vs production send state.

## Common Workflows

- Classify scenario, risk, channel, and language.
- Read the relevant reference before drafting.
- Draft with acknowledgement, factual status, safe next step, and escalation route.
- Use placeholders and mark unknowns.
- Mark dialect, humor, idioms, and public Arabic as `native-review-needed`.
- Escalate money movement, identity risk, legal/tax issues, fraud, repeated failure, public anger, or unsafe data requests.

## Default Workflow

1. Read `sources.yml`, then `references/support-tone.md`.
2. Read the scenario file: `payment-issue-macros.md`, `refund-macros.md`, `delivery-delay-macros.md`, `complaint-deescalation.md`, `whatsapp-support.md`, or `escalation-rules.md`.
3. For implementation or launch readiness, read `references/integration-checklist.md`.
4. Draft with placeholders such as `[order_id]`, `[case_id]`, `[refund_reference]`, `[carrier_status]`, `[policy_timeline]`, `[secure_link]`, and `[next_followup_at]`.
5. If a needed fact is missing, say `Unknown from public docs`, `Needs vendor access`, or `Needs merchant policy`.
6. Include review flags, escalation, and production gates.

## Decision Tree

- Arabic or bilingual support: default to MSA; use dialect only when country, brand voice, and native review are supplied.
- WhatsApp: check opt-in/template/service-window assumptions; never ask for OTP, CVV/CVC, full card number, password, or bank credentials.
- Public social: acknowledge briefly and move private; do not ask for order, phone, address, email, payment, or identity data publicly.
- Payment/refund: use references and safe last-four only when needed; do not promise refunds, posting dates, or eligibility without policy.
- Delivery/lost shipment: tie claims to carrier status; do not promise compensation or replacement without policy and carrier review.
- Account/OTP/identity: never request codes or passwords; escalate suspected takeover, SIM swap, or regulated account issues.
- Invoice/tax: provide process support only; route legal/tax interpretation to qualified local review.

## Response Contract

- Name files read.
- State scenario, risk, channel, and review flags.
- Give the macro/rewrite first, then policy inputs and unknowns.
- Separate source-backed facts, assumptions, and merchant-policy gaps.
- Include safe/prohibited data fields and escalation owner.
- Include sandbox/test and production approval gates for automation or outbound messaging.

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

- Sources: `sources.yml`.
- Tone: `references/support-tone.md`.
- WhatsApp/social: `references/whatsapp-support.md`.
- Refunds: `references/refund-macros.md`.
- Payments/account/OTP: `references/payment-issue-macros.md`.
- Delivery/lost shipment/COD: `references/delivery-delay-macros.md`.
- Complaints: `references/complaint-deescalation.md`.
- Escalation: `references/escalation-rules.md`.
- Examples: `examples/support-macros.md`.

## Safety Rules

- Never request OTP, password, CVV/CVC, full card number, bank credentials, private keys, or unnecessary identity documents.
- Do not promise refunds, compensation, legal rights, delivery dates, bank posting timelines, cancellation success, or tax outcomes without supplied policy/review.
- Move payment, identity, invoice, phone, address, and order details to private or secure channels.
- Treat payments, refunds, chargebacks, account access, identity, tax, high-value lost shipments, and public complaints as high-risk.
- Separate sandbox/test queues from production sends; require explicit approval for live outbound messages or customer-record changes.
- Keep retries idempotent when automating ticket updates or message sends.

## Validation Checklist

- Policy inputs are present or marked `Needs merchant policy`.
- Unsupported facts are marked `Unknown from public docs` or `Needs vendor access`.
- Public replies contain no private customer data.
- Dialect, humor, idioms, and public Arabic are flagged `native-review-needed`.
- High-risk scenarios include human escalation and no live-action instruction.

## Done Criteria

- The answer names the files read.
- The macro uses safe placeholders and avoids prohibited data collection.
- Review flags and escalation rules are explicit.
- Missing policy, platform, legal, carrier, or gateway facts are labeled instead of guessed.
- Production use includes sandbox/test validation and explicit approval gates.
