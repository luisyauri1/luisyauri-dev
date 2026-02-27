# Commit Conventions

This project follows the **Conventional Commits** standard to keep commit history clear and automation-friendly.

## Format

```text
type(optional-scope): short imperative description
```

Example:

```text
feat(auth): add session validation with refresh token
```

## Allowed Types

- `feat`: new feature.
- `fix`: bug fix.
- `docs`: documentation changes.
- `style`: formatting/style-only changes (spacing, lint, etc.), no logic change.
- `refactor`: internal code improvement without external behavior change.
- `test`: add or update tests.
- `chore`: maintenance tasks (config, dependencies, scripts).
- `build`: build system or tooling changes.
- `ci`: continuous integration/deployment changes.
- `perf`: performance improvements.

## Rules

- Use lowercase for `type` and description.
- Keep the description short, clear, and without a final period.
- Write in imperative mood: `add`, `fix`, `update`.
- Include a `scope` when it adds useful context: `feat(ui): ...`.
- Each commit should represent one logical change.

## Breaking Changes

For incompatible changes:

1. Add `!` after the type or scope.
2. Describe the impact in the commit body using `BREAKING CHANGE:`.

Example:

```text
feat(api)!: change users response structure

BREAKING CHANGE: "fullName" was removed and replaced by "firstName" and "lastName".
```

## Valid Examples

```text
feat(chat): add model selector
fix(ui): fix mobile overflow issue
docs(readme): update installation steps
refactor(core): simplify error handling
test(auth): cover token expiration
chore(deps): update angular to 21.2.0
```

## Invalid Examples

```text
Various changes
fix: fixes
feat: a new screen was added.
update code
```

## PR Recommendation

- Keep commits small and descriptive.
- Squash noisy commits (`wip`, `temp`, `debug`) before merging.
- Ensure the PR title reflects the main change.
