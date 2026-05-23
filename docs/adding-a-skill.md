# Adding A Skill

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

Keep `SKILL.md` short and put vendor facts into `vendors/`.
