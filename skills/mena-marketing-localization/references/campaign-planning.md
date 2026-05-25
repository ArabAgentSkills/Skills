# Campaign Planning

Use this reference when building or reviewing a localized campaign plan.

## Required Scope

Capture these fields before strategy:

| Field | Required handling |
| --- | --- |
| Country | Use a country-specific note, or mark the work as `needs expert review`. |
| Segment | B2B, B2C, ecommerce, app, SaaS, marketplace, public sector, or regulated. |
| Channel | Paid social, search, SEO, WhatsApp, creator, landing page, email/SMS, or partnership. |
| Language | Arabic, English, French, bilingual, MSA, dialect, or unknown. |
| Timeframe | Launch date, campaign period, calendar event, source year, or unknown. |
| Evidence | Source URL, source type, confidence, and last checked date. |

## Evidence Note Template

```yaml
country: Saudi Arabia
segment: ecommerce
channel: paid_social
language: ar/en
timeframe: 2026 Ramadan planning
claim: "Scoped planning signal only."
confidence: B
evidence: "What the source directly supports."
source_urls: []
review_status: needs_native_review
avoid_claims:
  - "Do not turn this into a conversion or audience-preference claim."
```

## Planning Flow

1. Define the business goal and action the user wants customers to take.
2. Map the country, segment, channel, and language.
3. Pull relevant entries from `sources.yml`.
4. Separate source-backed facts from assumptions and hypotheses.
5. Create the offer, landing page, channel test, and measurement plan.
6. Add review gates for native copy, legal/privacy, platform policy, creator disclosure, and operations.
7. Add a launch gate with explicit approval for paid spend, outbound sends, audience uploads, or public publishing.

## Output Shape

1. Files read.
2. Campaign objective and scope.
3. Source-backed market notes.
4. Localization choices and unknowns.
5. Channel and creative hypotheses.
6. Review and approval gates.
7. Test plan, measurement, and rollback.

## Do Not Claim

- "MENA users prefer..." without country, segment, channel, and evidence.
- "Ramadan always improves..." without current country/category data.
- "Arabic copy works better..." without keyword, audience, or campaign evidence.
- "WhatsApp is safe to use..." without opt-in, template, pricing, quality, opt-out, and legal review.
