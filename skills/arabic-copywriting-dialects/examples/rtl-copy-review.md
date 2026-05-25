# RTL Copy Review Example

## Files Read

- `skills/arabic-copywriting-dialects/SKILL.md`
- `sources.yml`
- `references/rtl-copy-qa.md`
- `references/native-review-rules.md`

## Input

```text
خصم 20% على Pro Plan - استخدم الكود SAVE20 في checkout قبل 31/05/2026: example.com/checkout
```

## Review

| Area | Risk | Fix |
| --- | --- | --- |
| Language direction | Mixed Arabic-English, URL, code, and date can reorder visually. | Use RTL container with `bdi` or equivalent around `Pro Plan`, `SAVE20`, and the URL. |
| Date | Numeric date can be ambiguous by locale. | Use locale-aware date formatting or write the month name if space allows. |
| CTA clarity | English `checkout` may be acceptable only if glossary-approved. | Confirm glossary; otherwise use a reviewed Arabic equivalent. |
| URL | URL may render awkwardly inside RTL sentence. | Put URL at the end or on its own line in previews. |
| Claim | Discount terms need exact eligibility. | Add terms link only if approved. |

## Safer Draft

```yaml
language_variety: MSA
status: safe_for_draft
review_required: brand + legal/commercial terms review
copy: "احصل على خصم 20% على Pro Plan باستخدام الكود SAVE20. راجع الشروط وأكمل الطلب من: example.com/checkout"
```

## Validation Steps

- Screenshot desktop and mobile RTL previews.
- Verify code, URL, date, and product plan order.
- Confirm discount terms and expiration date.
- Run native review if converting the line to dialect.
