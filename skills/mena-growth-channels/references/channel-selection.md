# Channel Selection

Use this reference when comparing or prioritizing growth channels.

## Required Scope

| Field | Requirement |
| --- | --- |
| Country | Country-specific evidence, or `needs expert review`. |
| Segment | B2B, B2C, ecommerce, app, SaaS, marketplace, public sector, or regulated. |
| Channel | Paid social, search, SEO, WhatsApp, creator, marketplace, partnership, or offline/assisted. |
| Language | Arabic, English, French, MSA, dialect, bilingual, or unknown. |
| Timeframe | Test window, campaign period, source year, or unknown. |
| Evidence | Source URL, confidence, and review status. |

## Channel Decision Flow

1. Start with the business goal and user action.
2. List possible channels and exclude high-risk or unsupported ones.
3. Pull scoped notes from `sources.yml`.
4. Identify missing evidence and review requirements.
5. Choose 1 to 3 tests, not a full budget allocation.
6. Define metrics, budget caps, stop rules, and approval gates.

## Scoring Rubric

Score each candidate as evidence, fit, readiness, risk, and measurability:

```yaml
channel: search
country: United Arab Emirates
segment: ecommerce
confidence: B
evidence: "Digital and ecommerce context only."
readiness: landing_page_ready|needs_work|unknown
risk: low|medium|high|needs_expert_review
test_metric: qualified signup|purchase|lead|activation
approval_gate: approve_before_launch
```

## Avoid

- Saying a channel "works in MENA" without country, segment, channel, and evidence.
- Allocating budget from public statistics alone.
- Treating platform reach, mobile penetration, or creator followers as demand.
- Launching paid, outbound, creator, or partnership commitments without explicit approval.
