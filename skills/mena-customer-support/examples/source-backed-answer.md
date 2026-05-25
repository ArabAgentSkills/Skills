# Source-Backed Answer Example

Request: Draft an Arabic WhatsApp response for a delayed refund where the customer says the bank has not received the money.

Use this structure:

## Files read

- `skills/mena-customer-support/SKILL.md`
- `skills/mena-customer-support/sources.yml`
- `skills/mena-customer-support/references/support-tone.md`
- `skills/mena-customer-support/references/refund-macros.md`
- `skills/mena-customer-support/references/escalation-rules.md`

## Recommendation

Use a formal or semi-formal MSA response, acknowledge the frustration, state only the known refund status, escalate to payments, and avoid promising a bank posting date unless `[policy_timeline]` is supplied by merchant policy.

## Draft macro

> نتفهم انزعاجك من تأخر ظهور مبلغ الاسترداد لطلب `[order_id]`. الحالة الحالية لدينا: `[refund_status]`. سنصعد الطلب إلى فريق الدفع مع مرجع `[case_id]` ونعود لك بتحديث في `[next_followup_at]` دون طلب أي بيانات بطاقة أو رموز تحقق.

Review flags:

- `native-review-needed` for public customer-facing Arabic.
- Payments review needed if provider status and customer evidence conflict.

## Unknowns

- `[refund_status]`: Needs merchant/payment-provider source.
- `[next_followup_at]`: Needs merchant policy.
- Bank posting timeline: Needs merchant policy and provider/bank confirmation.

## Validation steps

- Confirm refund reference and gateway state.
- Confirm no OTP, CVV/CVC, full card number, password, or bank credentials are requested.
- Confirm the macro is tested in sandbox/internal queue before production.
- Capture explicit approval before live outbound messaging.

Avoid:

- Promising a refund date or legal entitlement.
- Asking for card screenshots or verification codes.
- Discussing private payment details in public comments.

Category: customer-support
