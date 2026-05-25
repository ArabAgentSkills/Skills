# Experiments

Use this reference to turn channel ideas into controlled tests.

## Experiment Record

```yaml
id: ""
country: ""
segment: ""
channel: ""
language: ""
hypothesis: ""
evidence:
  confidence: B|C|unknown|needs_expert_review
  source_urls: []
  evidence_summary: ""
review_required: []
budget_cap: ""
sample_or_traffic_limit: ""
success_metric: ""
guardrail_metric: ""
stop_rule: ""
owner: ""
approval_gate: approve_before_launch
```

## Test Design Rules

- One country, segment, channel, and primary metric per test cell.
- Use public reports as baselines, not as proof of future performance.
- Keep budget caps small until evidence improves.
- Include stop rules for policy rejection, high complaint rate, poor landing-page QA, consent gaps, or tracking failure.
- Keep sandbox/test setup separate from production/live launch.

## Review Gates By Channel

| Channel | Gate |
| --- | --- |
| Paid social/search | Platform, landing-page, privacy, native, legal review where needed. |
| WhatsApp/CRM | Consent, template, pricing, quality/rate-limit, opt-out, privacy/legal, explicit send approval. |
| Creator | Disclosure, claims, rights, native/legal/platform review, explicit publish approval. |
| Marketplace | Listing, policy, claims, inventory, delivery, returns, support, explicit promo approval. |
| Partnership | Data-sharing, co-marketing, commercial, legal/privacy, brand approval. |

## Reporting

Report test results as scoped evidence:

- Country.
- Segment.
- Channel.
- Timeframe.
- Spend or sample size.
- Metric definition.
- Result.
- Limitations.
- Confidence after test.
- Next action.
