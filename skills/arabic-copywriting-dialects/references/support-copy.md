# Support Copy

## Default Language

Use MSA for knowledge-base articles, policies, escalation notes, refund explanations, identity cases, safety cases, and formal support macros. Use locally reviewed dialect only when the support brand intentionally wants conversational replies.

## Support Tone

- Be calm, specific, and accountable.
- Acknowledge the issue without overpromising.
- Give the next step, owner, and expected timing if known.
- Avoid blame, humor, sarcasm, vague apology loops, and unsupported compensation promises.

## High-Risk Support Cases

- Refunds, payments, credit, financing, disputes, chargebacks.
- Identity, account access, government IDs, age, address, or payroll.
- Legal, tax, medical, crisis, safety, harassment, and public complaints.
- Anything involving private customer records.

## Draft Examples

Status for all examples: `draft/native_review_required` when dialect is used.

| Variety | Draft | Status |
| --- | --- | --- |
| MSA | "نعتذر عن الإزعاج. سنراجع الطلب ونرسل لك التحديث التالي خلال [timeframe]." | safe_for_draft |
| Egyptian | "فاهمين إن الموضوع مضايقك. هنراجع الطلب ونرجع لك بتحديث واضح خلال [timeframe]." | draft/native_review_required |
| Saudi | "نعتذر عن الإزعاج. بنراجع طلبك وبنرجع لك بتحديث واضح خلال [timeframe]." | draft/native_review_required |

## QA Checklist

- No legal, refund, or compensation promise unless policy-approved.
- Private customer details are redacted in examples.
- Bilingual product/error names match glossary.
- Native review covers dialect tone and empathy level.
- Escalation path is clear before production use.
