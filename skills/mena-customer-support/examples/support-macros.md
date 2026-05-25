# Support Macro Examples

Use these as draft patterns. Replace placeholders only with merchant-policy, payment-gateway, carrier, subscription, or tax-policy facts. Mark dialect or public customer-facing Arabic as `native-review-needed`.

## Failed Payment

Arabic:

> لم تكتمل عملية الدفع لطلبك رقم `[order_id]`. يمكنك المحاولة مرة أخرى أو استخدام طريقة دفع أخرى. لحماية حسابك، لا ترسل رقم البطاقة الكامل أو رمز CVV أو رمز OTP. إذا ظهر خصم في حسابك، أرسل رقم الطلب ووقت العملية وآخر 4 أرقام من البطاقة فقط عبر القناة الآمنة: `[secure_link]`.

English mirror:

> The payment for order `[order_id]` was not completed. Please retry or use another payment method. Do not share the full card number, CVV, or OTP. If you see a charge, send the order ID, transaction time, and last 4 card digits only through `[secure_link]`.

Escalate: duplicate charge, bank debit, wallet/open-banking payment, high-value order, gateway conflict.

## Pending Payment

Arabic:

> حالة الدفع لطلبك رقم `[order_id]` ما زالت قيد المعالجة. لتجنب تكرار الخصم، سنراجع الحالة مع مزود الدفع ونحدثك في `[next_followup_at]`. لا تشارك أي رمز تحقق أو بيانات بطاقة معنا.

English mirror:

> Payment for order `[order_id]` is still processing. To avoid duplicate charging, we will check with the payment provider and update you at `[next_followup_at]`. Please do not share verification codes or card details with us.

Escalate: policy window exceeded, bank debit without order confirmation, paid service blocked.

## Successful Refund

Arabic:

> تم تأكيد حالة الاسترداد لطلبك رقم `[order_id]` حسب مرجع العملية `[refund_reference]`. ظهور المبلغ في حسابك يعتمد على سياسة المتجر `[policy_name]` والبنك أو مزود الدفع. إذا لم يظهر بعد المدة المذكورة في السياسة `[policy_timeline]`، سنساعدك في متابعة الحالة.

English mirror:

> The refund status for order `[order_id]` is confirmed under reference `[refund_reference]`. Posting to your account depends on `[policy_name]` and the bank or payment provider. If it does not appear after `[policy_timeline]`, we can help you follow up.

Do not use `[policy_timeline]` unless supplied.

## Refund Delayed

Arabic:

> نتفهم انزعاجك من تأخر ظهور مبلغ الاسترداد لطلب `[order_id]`. الحالة الحالية لدينا: `[refund_status]`. سنصعد الطلب إلى فريق الدفع مع مرجع `[case_id]` ونعود لك بتحديث في `[next_followup_at]` دون طلب أي بيانات بطاقة أو رموز تحقق.

English mirror:

> We understand the frustration with the delayed refund for order `[order_id]`. Current status: `[refund_status]`. We will escalate this to the payments team under case `[case_id]` and update you at `[next_followup_at]` without asking for card data or verification codes.

Escalate: chargeback threat, missing refund reference, provider conflict, refund amount dispute.

## Order Delayed

Arabic:

> نعتذر عن تأخر طلبك رقم `[order_id]`. الحالة الحالية لدى شركة الشحن: `[carrier_status]`. سنراجع مع شركة الشحن ونحدثك في `[next_followup_at]`. إذا كان لديك وقت تسليم مفضل، أرسله لنا وسنضيفه كملاحظة حسب إمكانية الناقل.

English mirror:

> We are sorry your order `[order_id]` is delayed. Current carrier status: `[carrier_status]`. We will check with the carrier and update you at `[next_followup_at]`. If you have a preferred delivery time, send it and we will add it as a note where the carrier supports it.

Escalate: medical/safety/perishable item, repeated delay, public complaint, high-value order.

## Shipment Lost

Arabic:

> نأسف لما حدث مع شحنتك رقم `[tracking_id]`. سنفتح بلاغ متابعة مع شركة الشحن برقم `[case_id]`. لا يمكننا تأكيد التعويض أو الاستبدال قبل اكتمال مراجعة الناقل وتطبيق سياسة المتجر `[policy_name]`، لكننا سنبقيك على اطلاع في `[next_followup_at]`.

English mirror:

> We are sorry about shipment `[tracking_id]`. We will open a carrier investigation under case `[case_id]`. We cannot confirm compensation or replacement before the carrier review and `[policy_name]` are applied, but we will update you at `[next_followup_at]`.

Escalate: delivered-not-received, address mismatch, COD dispute, high-value shipment, regulated documents.

## Customer Complaint

Arabic:

> نتفهم انزعاجك ونشكرك على توضيح المشكلة. سجلنا شكواك برقم `[case_id]` وسنراجع التفاصيل مع الفريق المختص. سنعود لك بتحديث في `[next_followup_at]`. إذا كانت الشكوى تتعلق بدفع أو بيانات حساب، سننقل المتابعة إلى قناة آمنة: `[secure_link]`.

English mirror:

> We understand your frustration and thank you for explaining the issue. We registered complaint `[case_id]` and will review it with the right team. We will update you at `[next_followup_at]`. If it involves payment or account data, we will move the follow-up to `[secure_link]`.

Public comment variant:

> نتفهم انزعاجك ونريد مساعدتك. حفاظًا على خصوصيتك، أرسلنا لك طريقة تواصل خاصة لمراجعة التفاصيل بأمان.

## Account Verification

Arabic:

> لحماية حسابك، سيتم التحقق عبر الطريقة الرسمية: `[verification_method]`. لا ترسل كلمة المرور أو رمز OTP أو صور مستنداتك في هذه المحادثة. إذا لم تطلب هذا التحقق، أخبرنا فورًا وسنصعد الحالة لفريق الأمان.

English mirror:

> To protect your account, verification will happen through `[verification_method]`. Do not send your password, OTP, or identity documents in this chat. If you did not request this verification, tell us immediately and we will escalate to security.

Escalate: account takeover risk, SIM-swap suspicion, regulated account, repeated failed verification.

## OTP Issue

Arabic:

> إذا لم يصلك رمز التحقق، تأكد من أن رقم الهاتف المسجل ينتهي بـ `[last_digits]` وأن الشبكة متاحة. يمكنك طلب رمز جديد حسب سياسة المحاولات `[retry_policy]`. لا تشارك الرمز معنا أو مع أي شخص من فريق الدعم.

English mirror:

> If you did not receive the verification code, check that the registered phone ends in `[last_digits]` and that your network is available. You can request a new code according to `[retry_policy]`. Do not share the code with us or anyone from support.

Escalate: repeated OTP failure, phone change, suspicious login, paid access blocked.

## Subscription Renewal

Arabic:

> تذكير: تجديد اشتراكك `[subscription_name]` مرتبط بالتاريخ `[renewal_date]` حسب شروط الاشتراك `[subscription_terms]`. يمكنك مراجعة الخطة أو تحديث طريقة الدفع أو طلب الإلغاء من `[account_link]`. لا تشارك بيانات البطاقة في المحادثة.

English mirror:

> Reminder: renewal for `[subscription_name]` is tied to `[renewal_date]` under `[subscription_terms]`. You can review the plan, update payment method, or request cancellation from `[account_link]`. Do not share card details in chat.

Escalate: unauthorized renewal, refund request, unclear account owner, business-critical access.

## Cancellation

Arabic:

> يمكننا مساعدتك في طلب الإلغاء وفق سياسة الاشتراك `[policy_name]`. للتأكد، هل تريد إلغاء التجديد القادم فقط أم إغلاق الحساب/الخدمة؟ لن ننفذ أي تغيير حتى يتم تأكيد الاختيار من صاحب الحساب عبر `[secure_link]`.

English mirror:

> We can help with cancellation under `[policy_name]`. To confirm, do you want to cancel the next renewal only or close the account/service? We will not make any change until the account owner confirms through `[secure_link]`.

Escalate: money impact, tax records, data deletion, business seats, regulated service.

## Invoice Or Tax Question

Arabic:

> يمكننا مساعدتك في مراجعة الفاتورة أو البيانات الضريبية لطلب `[order_id]` حسب سياسة الفوترة والأنظمة المحلية. من فضلك أرسل البيانات المطلوبة عبر النموذج الآمن `[secure_link]`، ولا ترسل مستندات ضريبية أو بيانات حساسة في التعليقات أو الرسائل العامة.

English mirror:

> We can help review the invoice or tax details for order `[order_id]` under the billing policy and local rules. Please submit the required details through `[secure_link]`, and do not send tax documents or sensitive data in public comments or open messages.

Escalate: VAT registration, e-invoicing, legal invoice correction, cross-border sale, refund credit note, government portal integration.
