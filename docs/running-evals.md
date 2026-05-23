# Running Evals

Run local evals:

```bash
pnpm evals:run
```

Outputs:

- `data/processed/eval-results.json`
- `reports/eval-report.md`

Local evals check file structure, routing quality, source links, safety rules, and launch-gate requirements. AI judging is optional and must not block CI when no API key is present.
