# WhatsApp Copy

## Use Cases

WhatsApp copy can cover transactional notices, support, appointment/order updates, sales follow-up, and conversational help. Treat marketing and outbound copy as high-risk because opt-in, template approval, category, account state, and local compliance may apply.

## Required Gates

- Opt-in or lawful basis confirmed.
- Platform policy and template/category reviewed where relevant.
- Native review for dialect, sales, escalation, and public-facing support macros.
- Explicit approval before sending or scheduling production messages.

## Drafting Rules

- State sender/context early.
- Keep one purpose per message.
- Avoid pressure tactics, misleading claims, sensitive profiling, and unsupported urgency.
- Keep variables short and tested in RTL: names, dates, order IDs, amounts, phone numbers, and links.
- Use MSA for transactional or sensitive copy unless the support strategy has reviewed local dialect.

## Draft Template

Status for all examples: `draft/native_review_required/not_sendable`.

```text
language_variety: MSA or reviewed local dialect
market: [country]
channel: WhatsApp
status: draft/native_review_required/not_sendable
review_required: native + platform/account + opt-in

مرحبًا [name]، تم تحديث طلبك [order_id]. يمكنك مراجعة التفاصيل من الرابط: [url]
```

## QA Checklist

- Template variables render correctly in RTL.
- Links, coupon codes, order IDs, and phone numbers keep readable order.
- No private customer text is copied into examples.
- Message category and opt-in are confirmed before production.
- User can understand the next action without prior context.
