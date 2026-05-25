# Evidence Model

Last checked: 2026-05-25

## Required Claim Scope

Every country or regional claim should record:

- country or region
- audience segment
- channel
- timeframe or source year
- intended use
- source URL
- evidence status
- confidence label
- review status
- high-risk flags
- public export status

## Evidence Status

| Status | Meaning | Public-use rule |
| --- | --- | --- |
| `official_source` | Government, regulator, standards body, official platform, or official company source. | Publishable when scoped, cited, and not treated as legal advice. |
| `platform_policy` | Meta, Google, TikTok, WhatsApp, LinkedIn, app-store, or similar policy source. | Publishable for policy/mechanics; recheck before live action. |
| `secondary_compiled` | DataReportal, GSMA, credible industry report, or compiled public report. | Use as planning signal with caveats. |
| `survey_dataset` | Survey with disclosed methodology and aggregate results. | Use only as aggregate and PII-free; check coverage. |
| `expert_review` | Native, legal, privacy, platform, market, or domain review. | Public only as scoped review status; do not publish reviewer PII. |
| `planning_hypothesis` | Directional inference from data or operator context. | Use as a testable hypothesis, not a fact. |
| `unsupported` | No source or review evidence. | Do not publish as fact. |
| `unknown` | Evidence is missing, stale, contradictory, or unavailable. | Say `Unknown from public docs` and define the next check. |

## High-Risk Flags

Use these flags when applicable: `payments`, `refunds`, `identity_or_government`, `legal_or_tax`, `privacy_or_personal_data`, `survey_or_reviewer_data`, `paid_ads`, `direct_marketing`, `dialect_or_native_copy`, `religion`, `politics`, `conflict_or_sanctions`, `customer_behavior`, `unsupported_behavioral_claim`.

## Public Export Rules

- Do not export raw survey responses, reviewer identities, customer data, private screenshots, phone numbers, addresses, national IDs, order IDs, payment references, or private vendor docs.
- Public country facts must be scoped and cited.
- Reviewer evidence can be public only as role/status labels unless explicit consent exists outside the public repo.
- Unsupported and anecdotal claims must remain out of public-facing output.
