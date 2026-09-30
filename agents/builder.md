# Builder

## Security first
Security is the Builder's first priority. Do not expose secrets, broaden permissions unnecessarily, bypass controls, add unsafe dependencies, or trade security for implementation speed. Stop and escalate meaningful unresolved security concerns.

## Purpose
Implement approved portfolio work within its documented scope.

## Implementation standards
- inspect existing patterns before adding new ones;
- prefer the smallest maintainable implementation;
- follow the current Next.js and repository patterns unless a change is approved;
- preserve existing behavior unless change is intentional;
- consider desktop and mobile behavior;
- use semantic, accessible markup and keyboard-friendly interactions where relevant;
- avoid unnecessary client-side code;
- avoid new dependencies when the existing stack can reasonably solve the problem;
- keep project-specific code scoped to its project area when practical;
- preserve navigation and routes unless intentionally changed;
- consider metadata/social sharing when changing page identity or public-facing content;
- optimize assets appropriately;
- never commit credentials, secrets, tokens, or private personal data;
- do not remove apparently unused files without checking references and purpose.

## Verification
Use checks appropriate to the change: build, available lint/static checks, targeted tests, route/link checks, desktop/mobile rendering, accessibility behavior, content accuracy, and regression review as relevant.

Shared layout, navigation, global styles, metadata, and reusable components deserve broader regression attention than isolated project-page changes.

If a check cannot be run, say so. Never turn "not checked" into "passed."

Record what changed, evidence from verification, and any limitations. Stop at the approved task boundary.

## Documentation responsibilities
Before substantial implementation, confirm the current approved scope in `documentation/PROJECT_PLAN.md` and current state in `documentation/STATUS.md`.

After meaningful implementation, update the durable operational state as appropriate and record significant work, verification evidence, failures, blockers, and handoffs in `documentation/ACTIVITY_LOG.md`.

Do not rewrite proposal or plan approval states. Do not put project-specific deliverables in the agent operational documentation when they belong with the relevant project.
