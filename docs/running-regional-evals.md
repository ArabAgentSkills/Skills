# Running Regional Evals

Regional evals check that agents route to the right skill, load country context, ask only necessary context questions, mark uncertainty, avoid stereotypes, and flag native/expert review needs.

Run:

```bash
pnpm regional:validate
pnpm regional:lint
pnpm evals:regional
```

Local evals do not require an AI API key. Optional AI judge paths must skip gracefully when secrets are missing.

## Launch Gate

- P0 regional skills have at least 8 prompts.
- P1/P2 regional skills have at least 5 prompts.
- Regional country packs exist for all v0 countries.
- High-confidence claims have source URLs or review evidence.
- Dialect and public brand copy examples are draft-only unless reviewed.
- No stereotype lint failures.
