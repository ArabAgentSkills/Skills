# Security Checklist

- No API keys, private keys, tokens, or certificates committed.
- High-risk operations require explicit approval.
- Sandbox and production are separated.
- Vendor docs access is marked.
- PII is masked in examples and logs.
- Webhook authenticity is only described where source-backed.
- Retries are idempotent for writes.
- Gated docs are not bypassed.
