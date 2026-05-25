# WhatsApp And Social Support

Use this file for WhatsApp, Instagram DM, and public social support handling.

## WhatsApp Rules

- Confirm whether the conversation is customer-initiated or business-initiated.
- For business-initiated messages, verify opt-in and approved template/category before launch.
- Use likely template categories carefully:
  - Authentication: OTP and account verification notices. Never ask the customer to send OTP back to support.
  - Utility: order status, delivery update, refund status, invoice availability, subscription reminder, account update.
  - Service/free-form: customer-initiated support inside the allowed support window, subject to current Meta policy.
  - Marketing: avoid for support unless the customer opted in and the content is promotional.
- Treat platform mechanics as `Unknown from public docs` until current Meta/Twilio/BSP docs are checked for the actual account.

## Safe WhatsApp Data

Allowed when needed:

- `[order_id]`
- `[case_id]`
- `[payment_reference]`
- `[refund_reference]`
- `[tracking_id]`
- `[transaction_time]`
- last four card digits only

Never request:

- OTP or authentication code.
- Password.
- CVV/CVC.
- Full card number.
- Bank login credentials.
- Private keys.
- Unnecessary identity documents or screenshots exposing sensitive data.

## Instagram DM And Public Comments

- In public comments, acknowledge once and move to DM or secure channel.
- Do not ask for order number, phone, address, email, payment, tax, or identity details publicly.
- If the customer is angry publicly, do not argue or diagnose in the thread.
- For social commerce, confirm product/order context privately before discussing refunds, delivery, payment, or account status.

## Launch Gate

Before automating WhatsApp/social support:

- Verify platform policy and account permissions.
- Verify opt-in and template approval where required.
- Test in sandbox or internal queue before production.
- Confirm no macro asks for prohibited data.
- Require explicit approval before live outbound sends.
