# Delivery Delay And Lost Shipment Macros

Use these patterns when carrier status and merchant delivery policy are supplied. Do not promise compensation, replacement, or delivery dates without policy and carrier confirmation.

## Order Delayed

Required inputs:

- `[order_id]`
- `[carrier_status]`
- `[next_followup_at]`

Arabic:

> نعتذر عن تأخر طلبك رقم `[order_id]`. الحالة الحالية لدى شركة الشحن: `[carrier_status]`. سنراجع مع شركة الشحن ونحدثك في `[next_followup_at]`. إذا كان لديك وقت تسليم مفضل، أرسله لنا وسنضيفه كملاحظة حسب إمكانية الناقل.

English mirror:

> We are sorry your order `[order_id]` is delayed. Current carrier status: `[carrier_status]`. We will check with the carrier and update you at `[next_followup_at]`. If you have a preferred delivery time, send it and we will add it as a note where the carrier supports it.

Escalate when:

- Perishable, medical, safety, or high-value goods.
- Repeated delay.
- VIP/customer-retention risk.
- Public complaint.
- Carrier status is stale or contradictory.

## Shipment Lost

Required inputs:

- `[tracking_id]`
- `[case_id]`
- `[carrier_status]`
- `[next_followup_at]`
- `[policy_name]`

Arabic:

> نأسف لما حدث مع شحنتك رقم `[tracking_id]`. سنفتح بلاغ متابعة مع شركة الشحن برقم `[case_id]`. لا يمكننا تأكيد التعويض أو الاستبدال قبل اكتمال مراجعة الناقل وتطبيق سياسة المتجر `[policy_name]`، لكننا سنبقيك على اطلاع في `[next_followup_at]`.

English mirror:

> We are sorry about shipment `[tracking_id]`. We will open a carrier investigation under case `[case_id]`. We cannot confirm compensation or replacement before the carrier review and `[policy_name]` are applied, but we will update you at `[next_followup_at]`.

Escalate when:

- Carrier marks delivered but customer denies receipt.
- Address or phone mismatch.
- COD dispute.
- High-value shipment.
- Lost identity, tax, or regulated documents.

## COD Amount Dispute

Required inputs:

- `[order_id]`
- `[cod_amount]`
- `[checkout_amount]`
- `[carrier_status]`
- `[case_id]`

Arabic:

> نحتاج مراجعة تفاصيل الدفع عند الاستلام لطلبك رقم `[order_id]`: المبلغ المطلوب عند التسليم `[cod_amount]`، والمبلغ الظاهر عند الطلب `[checkout_amount]`، وحالة الشحنة `[carrier_status]`. إذا كان المبلغ مختلفًا، سنصعد الحالة برقم `[case_id]` قبل أي محاولة تسليم جديدة.

English mirror:

> We need to review the cash-on-delivery details for order `[order_id]`: delivery amount `[cod_amount]`, checkout amount `[checkout_amount]`, and shipment status `[carrier_status]`. If the amount differs, we will escalate case `[case_id]` before another delivery attempt.
