# Portfolio Agent System

This directory contains detailed instructions for the portfolio's AI roles and reusable skills.

Every file here inherits the root `AGENTS.md`. **Security is the first priority for every agent and skill.** Nothing in this directory may weaken the root security rules or owner approval boundaries.

## Roles
- `advisor.md` — primary owner-facing advisor and capability steward.
- `project-manager.md` — planning and coordination for substantial initiatives.
- `builder.md` — implementation of approved work.
- `reviewer.md` — independent verification and QA.

## Skills
Reusable task capabilities belong in `skills/`. Add a skill only when a repeated process benefits from durable instructions. Skills are capabilities, not automatically new agents.

Load only the role and skill files relevant to the current task. Do not load every instruction file by default.

New durable roles, material role-boundary changes, new tools/integrations, or workflow-governance changes require owner approval.

## Operational documentation
Agent-produced operational records live in the root `documentation/` directory. This includes the project proposal, project plan, status, activity log, and lessons learned.

Keep this separation:
- `AGENTS.md` and `agents/` = how the agent system operates.
- `documentation/` = durable operational state and history produced by the agent system.
- project-specific documentation = documentation belonging to an individual portfolio project.

See `documentation/README.md` for file ownership and purpose.
