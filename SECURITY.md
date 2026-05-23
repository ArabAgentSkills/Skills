# Security Policy

## Rules

- Never commit API keys, vendor credentials, certificates, private keys, or live tokens.
- Never bypass gated docs or scrape private docs.
- Never execute untrusted vendor scripts.
- Never include live payment, refund, payout, tax, identity, payroll, or bank instructions that act on production data without explicit human approval.
- Keep sandbox and production separate.
- Mask PII and financial data in examples and logs.

High-risk categories:

- payments
- refunds
- payouts
- identity
- tax
- open banking
- payroll

## Checks

```bash
pnpm skills:security-check
```

The check scans for obvious secrets, ensures high-risk skills include safety rules, and verifies vendor files mark docs access.

## Reporting

Open a private security advisory or contact maintainers. Do not publish exploitable secrets or private vendor documentation in an issue.
