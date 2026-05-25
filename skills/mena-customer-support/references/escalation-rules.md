# Escalation Rules

Use this file to route high-risk support cases to a human owner.

## Escalation Owners

| Trigger | Owner | Required handling |
| --- | --- | --- |
| Duplicate charge, bank debit, refund missing, chargeback | Payments team | Use case ID, payment reference, transaction time, and safe last four only. |
| Account takeover, suspicious login, SIM swap, repeated OTP failure | Security/account team | Do not ask for OTP or password; use official verification route. |
| Tax invoice, VAT, e-invoicing, credit note, legal invoice correction | Tax/legal expert | Provide process support only; no legal advice. |
| Lost high-value shipment, delivered-not-received, COD discrepancy | Logistics lead | Open carrier investigation; no compensation promise without policy. |
| Public angry customer or viral complaint | Support lead/comms lead | Reply once publicly, move private, avoid argument. |
| Legal threat, regulator complaint, discrimination, harassment | Legal/compliance lead | Preserve facts, avoid admission beyond approved language. |
| Refund, cancellation, account closure, data deletion | Human supervisor | Confirm account owner and policy before action. |
| Open banking, wallet, BNPL, fintech account | Regulated support owner | Treat as high risk; no money movement or credential guidance. |

## Data Rules

Safe fields:

- `[order_id]`
- `[case_id]`
- `[payment_reference]`
- `[refund_reference]`
- `[tracking_id]`
- `[transaction_time]`
- last four card digits only when needed

Prohibited fields:

- OTP.
- Password.
- CVV/CVC.
- Full card number.
- Bank login credentials.
- Private keys.
- Unnecessary national ID or identity documents.

## Production Launch Gate

Before any macro is automated in production:

- Run through sandbox or internal queue.
- Confirm channel policy and opt-in where relevant.
- Confirm no prohibited data request exists.
- Confirm escalation routing and owner.
- Require explicit human approval for outbound sends or customer-record changes.
