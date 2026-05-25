---
name: arabic-copywriting-dialects
description: Use this skill when drafting, localizing, reviewing, or QA-checking Arabic copy, dialect choice, bilingual Arabic-English text, RTL UI copy, WhatsApp, SMS, push, email, ad copy, landing pages, support scripts, and sales follow-up across Arab markets.
---

# Arabic Copywriting And Dialects

## When To Use

Use this skill for Arabic copywriting, dialect routing, bilingual wording, RTL QA, and channel copy review across Arab markets.

## When Not To Use

- Do not certify native-quality dialect copy.
- Do not publish, send, launch, schedule, or automate outbound copy.
- Do not make regulated or sensitive claims without expert review.
- Do not infer audience traits from nationality, religion, dialect, gender, age, or class.

## Required Context

- Country/market, audience, channel, intended use, and risk tier.
- Desired variety: MSA, Egyptian, Saudi, Gulf, Levantine, Maghrebi, bilingual, or Arabizi.
- Brand tone, approved glossary, and terms that stay in English.
- Whether copy touches paid media, outbound messaging, customer data, or regulated claims.

If context is missing, ask for the smallest missing item or proceed with explicit assumptions and mark the output as draft.

## Source And Confidence Rules

- Read `sources.yml` for source types, confidence, and URLs.
- Use standards/platform docs for RTL, locale, and channel mechanics.
- Use dialect datasets and NLP tools only for routing and caveats.
- Mark gaps as `Unknown from public docs`, `Needs native review`, `Needs expert review`, `Needs platform/account access`, or `Needs vendor access`.
- Do not invent idioms, slang, local laws, platform rules, compliance claims, or reviewer approvals.

## Common Workflows

- Classify market, audience, channel, language variety, intended use, and risk tier.
- Choose MSA, dialect, bilingual wording, Arabizi, or no-copy output intentionally.
- Draft variants with `safe_for_draft`, `draft/native_review_required`, `high_risk_brand_copy`, or `do_not_use_without_local_review`.
- Review existing copy for unsupported claims, stereotypes, channel risk, native-review gaps, and RTL issues.
- Produce a native-review brief with reviewer scope, questions, and acceptance criteria.

## Default Workflow

1. Capture required context and flag missing scope.
2. Default to simple MSA for formal, cross-market, support, app UI, transactional, B2B, and sensitive content.
3. Use dialect only when country, audience, channel, brand reason, and native-review gate are explicit.
4. Load only the relevant reference files listed below.
5. Label all dialect examples `draft/native_review_required` unless scoped review evidence is supplied.
6. Run RTL and channel QA before presenting copy.
7. Require explicit approval before production send, paid launch, public publish, support escalation, or regulated claims.

## Response Contract

- Start with `Files read`.
- State scope: market, audience, channel, variety, use, and risk tier.
- Give the recommendation before copy variants.
- Label every copy block with status and review requirement.
- Separate source-backed facts, assumptions, unknowns, and review gates.
- Include RTL/channel QA for Arabic or mixed copy.
- End with validation steps and approval gates for public, paid, production, or outbound use.

## Files To Read

- Source map: `sources.yml`.
- Choice/review: `references/msa-vs-dialect.md`, `references/native-review-rules.md`.
- Dialects: `references/egyptian-arabic.md`, `references/gulf-arabic.md`, `references/levantine-arabic.md`, `references/maghrebi-arabic-caution.md`.
- Channels: `references/whatsapp-copy.md`, `references/sms-copy.md`, `references/landing-page-copy.md`, `references/support-copy.md`.
- RTL QA: `references/rtl-copy-qa.md`.
- Examples: `examples/dialect-copy-draft.md`, `examples/rtl-copy-review.md`.

## Safety Rules

- Dialect copy is not final until a native/local reviewer approves it for the exact country, audience, channel, and use case.
- High-risk domains need expert review before public use.
- WhatsApp, SMS, email, push, sales, and ads require opt-in, platform/compliance review, test preview, production approval, and explicit user approval.
- Do not use stereotypes, sensitive-attribute persuasion, pressure tactics, fake urgency, unsupported claims, or private customer text.
- Redact secrets, phone numbers, IDs, transcripts, and customer records in examples.

## Anti-Stereotype Rules

- Do not say Arabs, GCC users, nationalities, youth, women, religious users, or dialect groups all behave one way.
- Treat public statistics and platform reach as planning signals, not personality traits.
- Scope claims by country, audience, channel, timeframe, source, confidence, and review status.
- Avoid jokes, idioms, religion, politics, national symbols, class signals, gendered assumptions, and pressure unless locally reviewed.

## Output Rules

- Use simple, direct Arabic before slang.
- Keep MSA warm and readable.
- Keep bilingual glossary decisions explicit.
- For each variant include `language_variety`, `market`, `channel`, `status`, `review_required`, `risk_tier`, and `do_not_publish_until`.
- Mark Maghrebi and Arabizi outputs as high-caution drafts unless supplied by an approved local reviewer.

## Validation Checklist

- Scope includes market, audience, channel, intended use, and risk tier.
- Source-backed notes map to `sources.yml`.
- Unknowns are labeled instead of guessed.
- Dialect, idiom, humor, slogan, ad, support, and sales copy have native-review gates.
- Sensitive or regulated claims have expert-review gates.
- RTL QA covers direction, language tags, numbers, dates, currency, phones, URLs, handles, IDs, punctuation, placeholders, and screenshots.
- Production/outbound/paid actions require explicit approval.

## Done Criteria

- Files read and references used are named.
- Draft copy is labeled and never presented as native-perfect.
- MSA, dialect, bilingual, Arabizi, or no-copy is chosen intentionally.
- Safety, anti-stereotype, native-review, and RTL/channel checks are included.
- No unsupported regional, legal, platform, compliance, cultural, or dialect claims are included.
