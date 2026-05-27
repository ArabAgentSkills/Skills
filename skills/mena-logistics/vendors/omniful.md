# Omniful

## Source status

- Official docs: https://docs.omniful.tech/
- Developer portal: https://www.omniful.ai/
- API reference: https://docs.omniful.tech/
- OpenAPI: Unknown from public docs
- Postman: Unknown from public docs
- SDKs: Unknown from public docs
- GitHub: Unknown from public docs
- Last checked: 2026-05-27T08:19:09.400Z
- Docs access: public
- Docs confidence: A
- Notes: Official docs cover Custom Integration APIs with Bearer-token auth, staging and production base URLs, Postman import, default rate limiting, orders, shipments, SKUs, inventory, returns, purchase orders, POS orders, customers, and webhooks. Docs also warn that valid credentials can affect live integration data, and KSA operations require national_address_code in address objects. Exact account, region, warehouse, and carrier availability should be confirmed with Omniful before production rollout.

## What this vendor is good for

Omniful is useful when an agent needs to plan or review integrations around fulfillment operations rather than a single-carrier shipping flow. Source-backed public docs and site content position it around:

- Order management, warehouse management, transport management, inventory, returns, and analytics.
- Custom sales-channel integration for products, orders, inventory, customers, POS orders, purchase orders, shipments, and returns.
- Ecommerce, retail, logistics-provider, and enterprise fulfillment operations.

Route single-carrier label/tracking-only work to the relevant carrier file when the chosen carrier is not Omniful.

## Countries and currencies

- Countries: MENA
- Currencies: Official docs show currency fields in order/invoice examples, but supported production currency coverage is account-specific and should be confirmed with Omniful.
- Country caveat: Public docs include KSA-specific address behavior. Do not infer complete country coverage from that alone.

## Auth model

- Official docs use Bearer-token authentication in the Authorization header.
- Store the token in a server-side secret store or environment variable.
- Never expose Omniful credentials in frontend code, screenshots, logs, examples, or public issue reports.
- Confirm token issuance, scopes, rotation, and per-tenant separation with the Omniful account team before production.

## Core flows

- Environment setup: choose staging or production base URL before running any request.
- Products and SKUs: create and fetch master catalog SKUs; inventory can be included for hub-specific views.
- Inventory: fetch seller hub inventory and filter by SKU codes and update windows.
- Orders: create, read, and update seller or sales-channel order records where the documented order state permits updates.
- Shipments: trigger Omniful-generated shipments, assign shipping partners, and handle tracking/AWB details where supported by the account.
- Returns: create and manage return requests and return orders for eligible delivered orders.
- Purchase orders: create and retrieve purchase orders for supplier and replenishment flows.
- POS and customers: create POS orders and customer records through the documented public sales-channel APIs.

## Webhooks

- Official docs include a webhooks section for real-time updates.
- Treat the event list, payload shape, delivery retry behavior, and signature/secret verification as implementation-critical details to re-check in the docs before launch.
- If signature behavior is not visible in the current account/docs view, mark webhook authenticity as `Needs vendor access`.

## Refunds / captures / voids

- Omniful is not a payment gateway. Do not use this file for payment capture, void, or card refund behavior.
- Use this file for fulfillment returns and return-order workflows only.
- Route payment refunds to `skills/mena-payments` and reconcile fulfillment return status with the payment provider separately.

## Recurring / tokenization

Not applicable from public docs. Omniful docs reviewed here are fulfillment and commerce-operation APIs, not card tokenization or recurring payment APIs.

## Error handling

- Honor the documented default rate limit and design retry/backoff behavior so repeated writes do not duplicate orders, shipments, or returns.
- Log Omniful stable IDs and correlation IDs where available, not raw customer addresses, phone numbers, or full payloads.
- Validate timestamps, hub codes, SKU codes, order status, and return eligibility before write calls.
- Do not invent undocumented error codes; capture actual API responses from staging tests and add source-backed notes later.

## Sandbox

- Official docs list separate staging and production base URLs.
- Start every new integration in staging.
- Official docs warn that valid credentials can affect real-time integration data, so treat production credentials as live-action capable.
- Keep environment-specific tokens, base URLs, tenant IDs, seller codes, hub codes, and channel IDs separate.

## Known gotchas

- Omniful should be modeled as a fulfillment/OMS/WMS/TMS platform, not only as a courier.
- KSA operations require `national_address_code` inside address objects according to the official docs.
- Shipment creation can be constrained by order shipment type and order state; validate the documented prerequisites before triggering shipment workflows.
- Returns have different documented folders for custom sales-channel returns and seller returns; choose the right flow based on how the original order was created.
- Some filters have date-window and format constraints. Verify the latest docs before building incremental sync jobs.
- Postman import exists in the official docs, but a direct collection URL has not been stored in this registry yet.
- Do not assume undocumented endpoint paths or webhook signatures.
- Keep sandbox and production credentials separate.
- Re-check docs before production work because regional APIs change frequently.

## Sources

- https://www.omniful.ai/
- https://docs.omniful.tech/
