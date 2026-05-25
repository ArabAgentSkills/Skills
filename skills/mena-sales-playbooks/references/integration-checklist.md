# Sales Playbook Integration Checklist

This compatibility checklist supports the repo's current skill validator. For this regional skill, "integration" means integrating a sales playbook into a CRM, sequence tool, enablement workflow, or operator process.

## Intake

- Country, buyer segment, sector, channel, and sales stage.
- Contact source, consent/opt-in status, and suppression/opt-out process.
- Sandbox vs production environment for any CRM or messaging automation.
- Data fields used: contact details, notes, meeting recaps, company metadata, and message history.

## Answer Shape

1. Files read.
2. Sales motion and risk tier.
3. Source-backed constraints.
4. Assumptions and `Unknown from public docs`.
5. Draft or workflow.
6. Operator review flags.
7. Validation steps.

## Automation Checks

- Keep credentials and secrets out of prompts, logs, and source control.
- Use sandbox data before production contacts.
- Apply suppression lists, opt-out handling, retry limits, idempotency keys, and audit logs.
- Do not enrich, upload, sequence, call, or message contacts without explicit approval.

## Production launch gate

Production launch requires explicit human approval, verified consent or lawful basis, platform-policy review, local privacy/telecom review where applicable, suppression list testing, and a rollback/stop procedure.
