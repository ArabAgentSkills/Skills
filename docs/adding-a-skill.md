# Adding A Skill

New public skills can be proposed by users, companies, agencies, or organizations, but they are not published automatically. Maintainers approve scope, sources, safety rules, eval prompts, and public usefulness before a skill is generated into the public repo.

Create a config file:

```bash
cp tools/generator/configs/mena-payments.yml tools/generator/configs/new-skill.yml
```

Edit it, then run:

```bash
pnpm skills:new -- --config tools/generator/configs/new-skill.yml
pnpm skills:validate
pnpm evals:run
```

Keep `SKILL.md` short and put vendor facts or market evidence into supporting files. API skills should use `vendors/`; non-API skills should keep source-backed facts, examples, scripts, and evals outside the routing file.

The project starts with API skills and expands into Arab-world marketing, sales, support, localization, content, operations, and cultural context when the proposed skill is evidence-backed and reviewable.
