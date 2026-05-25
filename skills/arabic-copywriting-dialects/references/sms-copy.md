# SMS Copy

## Use Cases

SMS is useful for OTP, transactional alerts, reminders, delivery updates, and short service notices. Marketing SMS needs consent, sender ID, opt-out, and local compliance review.

## Required Caution

Arabic SMS commonly uses Unicode/UCS-2 handling, which can reduce character capacity compared with GSM-7. Always test segment count with the actual provider before send.

## Drafting Rules

- Keep Arabic SMS short and plain.
- Put the brand or sender context early.
- Avoid decorative punctuation, emoji, and idioms.
- Do not rely on a link when trust is critical unless the domain is obvious.
- Use MSA or simple reviewed local Arabic.

## Draft Examples

Status for all examples: `draft/native_review_required/not_sendable`.

| Use | Draft | QA |
| --- | --- | --- |
| OTP | "رمز التحقق من [brand]: [code]. لا تشاركه مع أي شخص." | Test segment count and code order. |
| Payment reminder | "تذكير من [brand]: لديك دفعة مستحقة بتاريخ [date]. التفاصيل: [url]" | Needs legal/compliance review if finance-related. |
| Refund update | "تم تحديث حالة استرداد مبلغ طلبك [order_id]. سنرسل لك التفاصيل عند اكتمال المعالجة." | Needs support/refund review. |

## QA Checklist

- Segment count tested with real provider tooling.
- Sender ID, opt-out, and DND/compliance rules reviewed.
- Numbers, dates, currency, links, codes, and order IDs render correctly.
- No production send without explicit approval.
