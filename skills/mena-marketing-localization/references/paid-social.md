# Paid Social

Use this reference for Meta, TikTok, LinkedIn, YouTube creator amplification, and other paid social planning.

## Source Limits

Platform docs are mechanics and policy sources. They are not proof that a platform will perform for a country, audience, or category.

## Platform Mechanics

| Platform | Scoped use |
| --- | --- |
| Meta | Country/segment/channel confidence: A for ad and landing-page policy mechanics. Review personal attributes, discrimination, deception, restricted categories, and landing pages. |
| TikTok | Country/segment/channel confidence: A for targeting mechanics and ad/landing language/currency policy. Location delivery can be signal-based and not guaranteed. |
| LinkedIn | Country/segment/channel confidence: A for B2B location and profile-language mechanics. English profile language can broaden reach; non-English profile language can narrow by profile language. |
| YouTube/Google | Country/segment/channel confidence: A for policy mechanics. Do not use sensitive personalized targeting or restricted remarketing without policy/legal review. |

## Required Paid Social Brief

```yaml
country: ""
segment: ""
channel: meta|tiktok|linkedin|youtube|other
language: ""
campaign_objective: ""
audience_assumptions: []
source_backed_facts: []
hypotheses_to_test: []
excluded_claims: []
platform_policy_risks: []
native_review_required: true
expert_review_required: true
approval_gate: approve_before_launch
```

## Copy Safety

- Do not imply knowledge of religion, ethnicity, health, financial hardship, employment status, housing status, age, family status, income, or other sensitive personal attributes.
- Avoid panic, shame, religious pressure, family pressure, or fake urgency.
- Avoid "you are struggling", "because you are in debt", "for fasting people like you", or similar personal-attribute framing.

## Production Launch Gate

- Ads and landing page reviewed together.
- Country, language, currency, and destination are consistent.
- Restricted category and local law risks are reviewed.
- Tracking, consent, UTM, pixel, and analytics are tested in sandbox/test where possible.
- Human explicitly approves spend, publish, audience upload, and launch.
