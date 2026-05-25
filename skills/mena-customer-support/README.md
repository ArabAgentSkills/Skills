# MENA Customer Support

Use this skill to draft and review safe Arabic, bilingual, and channel-aware customer support macros for Arab/MENA ecommerce, subscriptions, account access, payment/refund, delivery, complaint, and invoice/tax workflows.

## Supported Scenarios

| Scenario | Default handling |
| --- | --- |
| Failed payment | Explain that payment did not complete, suggest retry or alternate method, and prohibit OTP/CVV/full card sharing. |
| Pending payment | Prevent duplicate payment, check payment-provider status, and give a policy-backed follow-up placeholder. |
| Successful refund | Confirm only source-backed refund status/reference; avoid bank posting promises without policy. |
| Refund delayed | Escalate to payments with case ID and safe follow-up placeholder. |
| Order delayed | Tie response to carrier status and merchant delivery policy. |
| Shipment lost | Open carrier investigation; do not promise replacement or compensation without policy. |
| Customer complaint | Acknowledge, de-escalate, create case, and move sensitive details to secure channel. |
| Account verification | Use official verification route; never ask for passwords, OTPs, or documents in chat. |
| OTP issue | Troubleshoot delivery safely and escalate repeated failures or suspicious access. |
| Subscription renewal | Reference subscription terms and account link; no card data in chat. |
| Cancellation | Confirm account owner intent before any change; distinguish renewal cancellation from account closure. |
| Invoice/tax question | Route sensitive tax details to secure form and local expert review where needed. |

## Usage

Start with `skills/mena-customer-support/SKILL.md`, then load only the reference file matching the scenario. Use `examples/support-macros.md` for macro shape and placeholders.

## Maintenance

- Keep `SKILL.md` short and procedural.
- Update references only with source-backed, policy-safe guidance.
- Mark dialect or public customer-facing Arabic as `native-review-needed`.
- Run `pnpm skills:validate`, `pnpm validate`, `pnpm test`, and `pnpm site:build` before release.
