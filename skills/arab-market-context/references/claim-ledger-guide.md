# Claim Ledger Guide

Last checked: 2026-05-25

## Required Country File Structure

Every country file uses this structure:

1. Metadata block with country id, region group, last checked, review status, overall confidence, and intended use.
2. Primary sources table with source name, type, URL, and use.
3. Source-backed signals.
4. Operating context by language, B2B/B2C, payments, logistics, support, business channels, holidays, trust, and risks.
5. Known gaps.
6. Claims ledger.

## Claims Ledger Columns

| Column | Required content |
| --- | --- |
| `ID` | Stable country-prefixed id. |
| `Scoped claim` | One cautious claim with country, audience/channel scope where relevant. |
| `Claim type` | `country_stat`, `official_anchor`, `payment_context`, `logistics_context`, `language_or_dialect`, `risk_caveat`, or `planning_hypothesis`. |
| `Evidence status` | Use the evidence model values. |
| `Confidence` | `A`, `B`, `C`, `unknown`, or `needs_review`. |
| `Review status` | `approved_for_public`, `approved_for_draft`, `needs_native_review`, `needs_expert_review`, or `unreviewed`. |
| `High-risk flags` | Comma-separated flags or `none`. |
| `Sources` | One or more public URLs for factual claims. |
| `Last checked` | ISO date. |
| `Public use` | `publishable`, `planning_only`, `review_required`, or `do_not_use`. |

## Wording Rules

- Prefer "the source reports" and "for planning" over universal language.
- Do not use words like always, never, everyone, nobody, all customers, or no one trusts.
- Do not turn aggregate digital, payment, or survey statistics into traits.
- If the evidence is weak, write a testable hypothesis and name the next source or reviewer needed.
