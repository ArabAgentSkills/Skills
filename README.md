# Arab Agent Skills

```text
      ###    ####      ###    ####
     #   #   #   #    #   #   #   #
     #####   ####     #####   ####
     #   #   #  #     #   #   #   #
     #   #   #   #    #   #   ####

       ###    ####  #####  #   #  #####      ####  #   #  #####  #       #        ####
      #   #  #        #    ##  #    #       #      #  #     #    #       #       #
      #####  #  ##    #    # # #    #        ###   ###      #    #       #        ###
      #   #  #   #    #    #  ##    #           #  #  #     #    #       #           #
      #   #   ####  #####  #   #    #       ####   #   #  #####  #####   #####  ####
```

Public generated agent skills for Arab and MENA APIs.

This repository is the public install surface. The private maintenance system keeps the crawler, validators, evals, and website pipeline separate so generated skill changes stay reviewable.

Website and source transparency live at the private system repo's Netlify build. This public repo exists so agents can install and inspect the generated skills directly.

## Install

```bash
npx skills add ArabAgentSkills/skills
```

## Contents

- `skills/`: generated agent skills.
- `data/`: public registry subset used for install and audit transparency.
- `docs/`: contributor and skill-use documentation.
- `standards/`: source quality, skill style, security, and release checklists.

## What is included

- Source-backed regional API skill instructions.
- Vendor files with docs access, confidence, source links, and unknowns marked honestly.
- Eval prompts and expected behavior files for each skill.
- Examples that show how an agent should answer without inventing endpoints or credentials.

## Safety

Do not add API keys, payment credentials, private government docs, or gated vendor material to this repo. Keep sandbox and production steps separate in every high-risk integration.

## Update flow

This repo is updated by the weekly Codex maintenance automation from the private system repo. Manual pull requests are welcome when they include official sources and keep unknowns explicit.

Generated at: 2026-05-23T23:05:22.560Z