# Partnerships Integration Checklist

This compatibility checklist supports the repo's current skill validator. For this regional skill, "integration" means a partner portal, CRM workflow, technical integration, marketplace listing, co-marketing workflow, or shared customer-data process.

## Intake

- Partner type, country, shared customer, commercial model, and operating model.
- Data shared: contact details, customer names, order data, payment data, bank data, delivery addresses, logs, or support notes.
- Sandbox vs production environment for any integration.
- Access model: API keys, partner users, dashboards, webhooks, service accounts, or shared documents.

## Answer Shape

1. Files read.
2. Partner motion and risk tier.
3. Source-backed constraints.
4. Assumptions and `Unknown from public docs`.
5. Draft plan or checklist.
6. Operator review flags.
7. Validation steps.

## Automation Checks

- Keep credentials and secrets out of prompts, logs, and source control.
- Use sandbox data before production partner access.
- Apply role-based access, audit logs, retry limits, idempotency keys, webhook validation, and revocation paths.
- Do not grant production access, upload customer lists, publish partner listings, or start co-marketing without explicit approval.

## Production launch gate

Production launch requires explicit human approval, signed or reviewed partner terms, privacy/security review, data-processing review, brand approval where applicable, rollback/stop procedure, and regulator/procurement review for regulated or government-adjacent partnerships.
