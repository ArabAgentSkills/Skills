# Payment Issue Macros

Use these patterns for failed payment, pending payment, duplicate debit, OTP, and account-verification support. Do not request prohibited payment or account data.

## Failed Payment

Required inputs:

- `[order_id]`
- `[secure_link]`
- Optional: `[payment_reference]`, `[transaction_time]`, last four card digits

Arabic:

> لم تكتمل عملية الدفع لطلبك رقم `[order_id]`. يمكنك المحاولة مرة أخرى أو استخدام طريقة دفع أخرى. لحماية حسابك، لا ترسل رقم البطاقة الكامل أو رمز CVV أو رمز OTP. إذا ظهر خصم في حسابك، أرسل رقم الطلب ووقت العملية وآخر 4 أرقام من البطاقة فقط عبر القناة الآمنة: `[secure_link]`.

English mirror:

> The payment for order `[order_id]` was not completed. Please retry or use another payment method. For your security, do not share the full card number, CVV, or OTP. If you see a charge, send the order ID, transaction time, and last 4 card digits only through `[secure_link]`.

Escalate when:

- Customer reports duplicate charge or bank debit.
- Gateway status conflicts with order status.
- Order is high value.
- Wallet/open-banking payment is involved.

## Pending Payment

Required inputs:

- `[order_id]`
- `[payment_status]`
- `[next_followup_at]`

Arabic:

> حالة الدفع لطلبك رقم `[order_id]` ما زالت قيد المعالجة. لتجنب تكرار الخصم، سنراجع الحالة مع مزود الدفع ونحدثك في `[next_followup_at]`. لا تشارك أي رمز تحقق أو بيانات بطاقة معنا.

English mirror:

> Payment for order `[order_id]` is still processing. To avoid duplicate charging, we will check with the payment provider and update you at `[next_followup_at]`. Please do not share verification codes or card details with us.

Escalate when:

- Pending state exceeds merchant policy.
- Customer cannot access a paid service.
- Bank debit appears without order confirmation.

## Account Verification

Required inputs:

- `[verification_method]`
- `[secure_link]` when verification requires action

Arabic:

> لحماية حسابك، سيتم التحقق عبر الطريقة الرسمية: `[verification_method]`. لا ترسل كلمة المرور أو رمز OTP أو صور مستنداتك في هذه المحادثة. إذا لم تطلب هذا التحقق، أخبرنا فورًا وسنصعد الحالة لفريق الأمان.

English mirror:

> To protect your account, verification will happen through `[verification_method]`. Do not send your password, OTP, or identity documents in this chat. If you did not request this verification, tell us immediately and we will escalate to security.

## OTP Issue

Required inputs:

- `[last_digits]`
- `[retry_policy]`

Arabic:

> إذا لم يصلك رمز التحقق، تأكد من أن رقم الهاتف المسجل ينتهي بـ `[last_digits]` وأن الشبكة متاحة. يمكنك طلب رمز جديد حسب سياسة المحاولات `[retry_policy]`. لا تشارك الرمز معنا أو مع أي شخص من فريق الدعم.

English mirror:

> If you did not receive the verification code, check that the registered phone ends in `[last_digits]` and that your network is available. You can request a new code according to `[retry_policy]`. Do not share the code with us or anyone from support.

Escalate when:

- Repeated OTP failure.
- Customer changed phone number.
- Suspicious login or SIM-swap risk.
- Regulated account or paid access is blocked.
