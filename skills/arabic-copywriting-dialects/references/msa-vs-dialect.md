# MSA Vs Dialect

## Default Choice

Use simple Modern Standard Arabic for formal, cross-market, transactional, support, app UI, B2B, government, education, finance, healthcare, legal, tax, identity, payroll, and compliance-adjacent copy.

Do not make MSA stiff by default. Prefer direct verbs, short sentences, clear CTAs, and familiar product terms.

## Dialect Choice

Use dialect only when all are true:

- The target country or narrow region is explicit.
- The channel benefits from local warmth or conversational tone.
- The brand wants local voice rather than pan-Arab consistency.
- A native/local review gate is available before publication.

## Review Tiers

| Tier | Use | Required label |
| --- | --- | --- |
| safe_for_draft | MSA drafts, internal variants, simple non-sensitive UI copy | draft |
| native_review_required | Any dialect, idiom, humor, slogan, public support, sales, or bilingual copy | draft/native_review_required |
| high_risk_brand_copy | Ads, hero copy, slogans, influencer scripts, public apology, religious/cultural references | draft/native_review_required/expert_review_if_sensitive |
| do_not_use_without_local_review | Legal, financial, medical, government, identity, payroll, tax, refunds, investment, credit, crisis, politics, religion | blocked_until_review |

## Practical Routing

- Cross-market or unsure: MSA.
- Egypt-only consumer or conversational support: Egyptian draft, native review.
- Saudi Arabia: Saudi-specific draft, Saudi review.
- GCC planning: Gulf as a planning label only; split by country before production.
- Levant planning: broad family label only; split by Jordan, Palestine, Lebanon, or Syria before production.
- Maghreb: MSA or locally reviewed Moroccan, Algerian, Tunisian, or Libyan copy.
- Arabizi: avoid unless the brand and local reviewer explicitly approve it.

## Output Metadata

For each variant include:

- `language_variety`
- `market`
- `channel`
- `status`
- `review_required`
- `risk_tier`
- `unknowns`
- `do_not_publish_until`
