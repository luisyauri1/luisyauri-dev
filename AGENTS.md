# Project Agent Routing

This file defines how to activate role-based execution in this repository.

## Canonical Governance

- Angular guidelines: `agents_skills/governance/angular-agents-guidelines.md`
- Commit conventions: `agents_skills/governance/commit-conventions.md`

## Available Role Files

- `agents_skills/agent-roles/lead-tech-lt.md`
- `agents_skills/agent-roles/senior-angular-frontend-engineer.md`
- `agents_skills/agent-roles/senior-creative-ui-engineer.md`
- `agents_skills/agent-roles/senior-devops-engineer.md`
- `agents_skills/agent-roles/senior-security-analyst.md`
- `agents_skills/agent-roles/senior-seo-strategist.md`
- `agents_skills/agent-roles/senior-software-architect.md`
- `agents_skills/agent-roles/senior-ux-writer.md`

## Activation Syntax

Use explicit role requests in your prompt:

- `Use role: senior-angular-frontend-engineer`
- `Use roles: lead-tech-lt + senior-seo-strategist`
- `Review this as: senior-security-analyst`

If no role is specified, default behavior applies.

## Implicit Activation (Default)

If no role is explicitly requested, select role(s) automatically by task intent:

- Angular implementation, refactor, bugfix, architecture inside app code:
  - `senior-angular-frontend-engineer`
- UI redesign, visual system, components look-and-feel, interaction polish:
  - `senior-creative-ui-engineer`
- UX microcopy, CTA text, labels/errors/empty states, tone consistency:
  - `senior-ux-writer`
- SEO strategy, metadata, content structure, rankings, indexing:
  - `senior-seo-strategist`
- Docker, CI/CD, deployment pipelines, runtime operations:
  - `senior-devops-engineer`
- Security reviews, hardening, vulnerability/risk mitigation:
  - `senior-security-analyst`
- System design decisions, boundaries, scalability tradeoffs:
  - `senior-software-architect`

Use `lead-tech-lt` implicitly when:

- The request spans 2+ domains/roles.
- Priorities conflict (speed vs quality, SEO vs UX, security vs delivery).
- A plan, decision, or cross-role validation is needed.

Default behavior without explicit role therefore means implicit routing, not "no role".

## Execution Rules

- Follow the selected role file as primary guidance for the task.
- Apply governance rules from `agents_skills/governance/`.
- If multiple roles are requested, prioritize `lead-tech-lt` for conflict resolution.
- For implicit routing, state in the response which role(s) were selected.
