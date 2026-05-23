# Adding A Vendor

1. Collect official source URLs.
2. Add the vendor to the seed workbook or curated vendor registry.
3. Run `pnpm registry:import-seed`.
4. Run `pnpm skills:generate`.
5. Review the generated vendor file.
6. Mark unknowns honestly.
7. Run `pnpm validate`, `pnpm evals:run`, and `pnpm site:build`.

Do not add unsupported claims.
