# Refund Macros

Use these patterns only when merchant refund policy and payment status are supplied. If missing, mark `Needs merchant policy` or `Unknown from public docs`.

## Successful Refund

Required inputs:

- `[order_id]`
- `[refund_reference]`
- `[refund_status]`
- `[policy_name]`
- `[policy_timeline]` only if supplied by policy

Arabic:

> تم تأكيد حالة الاسترداد لطلبك رقم `[order_id]` حسب مرجع العملية `[refund_reference]`. ظهور المبلغ في حسابك يعتمد على سياسة المتجر `[policy_name]` والبنك أو مزود الدفع. إذا لم يظهر بعد المدة المذكورة في السياسة `[policy_timeline]`، سنساعدك في متابعة الحالة.

English mirror:

> The refund status for order `[order_id]` is confirmed under reference `[refund_reference]`. Posting to your account depends on `[policy_name]` and the bank or payment provider. If it does not appear after `[policy_timeline]`, we can help you follow up.

Safety notes:

- Do not say the money is already in the bank account unless confirmed by the payment provider and bank evidence.
- Do not create a timeline when `[policy_timeline]` is not supplied.

## Refund Delayed

Required inputs:

- `[order_id]`
- `[refund_status]`
- `[case_id]`
- `[next_followup_at]`

Arabic:

> نتفهم انزعاجك من تأخر ظهور مبلغ الاسترداد لطلب `[order_id]`. الحالة الحالية لدينا: `[refund_status]`. سنصعد الطلب إلى فريق الدفع مع مرجع `[case_id]` ونعود لك بتحديث في `[next_followup_at]` دون طلب أي بيانات بطاقة أو رموز تحقق.

English mirror:

> We understand the frustration with the delayed refund for order `[order_id]`. Current status: `[refund_status]`. We will escalate this to the payments team under case `[case_id]` and update you at `[next_followup_at]` without asking for card data or verification codes.

Escalate when:

- Refund is missing after policy window.
- Customer threatens chargeback, regulator complaint, or legal action.
- Payment provider data conflicts with customer evidence.
- Refund amount is disputed.

## Refund Eligibility Unknown

Arabic:

> نحتاج مراجعة طلب الاسترداد رقم `[order_id]` وفق سياسة المتجر `[policy_name]`. لا يمكننا تأكيد الأهلية أو المبلغ قبل مراجعة تفاصيل الطلب والسياسة. سجلنا الحالة برقم `[case_id]` وسنعود لك بتحديث في `[next_followup_at]`.

English mirror:

> We need to review refund request `[order_id]` under `[policy_name]`. We cannot confirm eligibility or amount before reviewing the order and policy. Case `[case_id]` is open and we will update you at `[next_followup_at]`.
