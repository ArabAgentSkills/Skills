# Skill Style Guide

- Start `SKILL.md` with YAML frontmatter: `name` and `description`.
- Write descriptions as routing text: `Use this skill when...`.
- Keep `SKILL.md` procedural and short.
- Put vendor facts in `vendors/*.md`.
- Put reusable implementation patterns in `references/`.
- Put deterministic helpers in `scripts/`.
- Put eval prompts and expected behaviors in `evals/`.
- Use source-backed facts only.
- Mark unknowns honestly.
- Add or update evals when routing, safety, or workflows change.
