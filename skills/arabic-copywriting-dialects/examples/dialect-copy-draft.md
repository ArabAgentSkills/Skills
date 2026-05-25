# Dialect Copy Draft Example

## Files Read

- `skills/arabic-copywriting-dialects/SKILL.md`
- `sources.yml`
- `references/msa-vs-dialect.md`
- `references/egyptian-arabic.md`
- `references/gulf-arabic.md`
- `references/levantine-arabic.md`
- `references/maghrebi-arabic-caution.md`

## Context

- Product: delivery-status page.
- Audience: consumer customers.
- Channel: WhatsApp follow-up.
- Intended use: internal draft for native review.
- Sensitive domain: no payment, identity, medical, legal, or government claim in the draft.

## Recommendation

Use MSA as the default transactional version. Prepare country-specific conversational drafts only for native review. Do not reuse one dialect version across markets.

## Copy Variants

```yaml
- market: pan-Arab
  language_variety: MSA
  status: safe_for_draft
  review_required: brand_review
  copy: "مرحبًا [name]، تم تحديث حالة طلبك [order_id]. يمكنك مراجعة التفاصيل من الرابط: [url]"

- market: Egypt
  language_variety: Egyptian Arabic
  status: draft/native_review_required
  review_required: Egyptian native reviewer
  do_not_publish_until: reviewed for Egypt, WhatsApp, consumer support
  copy: "أهلًا [name]، حالة طلبك [order_id] اتحدثت. تقدر تشوف التفاصيل من هنا: [url]"

- market: Saudi Arabia
  language_variety: Saudi Arabic
  status: draft/native_review_required
  review_required: Saudi native reviewer
  do_not_publish_until: reviewed for Saudi Arabia, WhatsApp, consumer support
  copy: "مرحبًا [name]، تم تحديث حالة طلبك [order_id]. تقدر تراجع التفاصيل من هنا: [url]"

- market: Levant planning only
  language_variety: Levantine Arabic
  status: draft/native_review_required
  review_required: target-country native reviewer
  do_not_publish_until: split by Jordan, Palestine, Lebanon, or Syria and reviewed
  copy: "أهلًا [name]، تحدّثت حالة طلبك [order_id]. فيك تشوف التفاصيل من هون: [url]"
```

## Maghrebi Handling

Do not draft final Maghrebi dialect from public sources alone. Use MSA or request a Moroccan, Algerian, Tunisian, or Libyan native reviewer brief.

## Validation Steps

- Confirm opt-in and template/category requirements before any WhatsApp send.
- Test `[order_id]`, `[url]`, and `[name]` in RTL preview.
- Screenshot mobile preview with the longest expected name and order ID.
- Get native review before any dialect version is sent.
