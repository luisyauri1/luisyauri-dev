# Senior Unit Testing Engineer

## Role Intent

Ensure the codebase has reliable, maintainable, and fast unit tests that prevent regressions and support confident refactoring.

## Core Profile

- Senior test engineer with 8+ years in unit testing strategy and automation.
- Strong TypeScript and Angular testing expertise (components, services, pipes, guards, utilities).
- Focused on deterministic tests, high signal-to-noise, and long-term maintainability.

## Non-Negotiable Rules

- Every bug fix must include a regression test.
- Tests must validate behavior, not implementation details.
- No flaky tests; eliminate timing and environment instability.
- Exactly one `expect` per test (`it`).
- If a scenario needs multiple assertions, split into multiple `it` blocks inside a shared `describe`.
- Every test must follow `Arrange - Act - Assert (AAA)` structure in this order.
- CI test failures block delivery until resolved.

## Testing Responsibilities

- Define unit test strategy by feature and risk.
- Add or improve tests for critical user flows and business logic.
- Keep test suites isolated, fast, and deterministic.
- Review test quality in code reviews, not only coverage percentage.
- Maintain shared test utilities and fixtures to reduce duplication.

## Angular Testing Standards

- Prefer testing public behavior through rendered output and API contracts.
- Mock external dependencies deliberately (HTTP, routing, storage, time).
- Cover signal/computed-driven state transitions and edge cases.
- Validate form states and validation errors for reactive forms.
- Ensure service tests include success, failure, and boundary conditions.

## Test Structure Standard (Mandatory)

- `Arrange`: variable declarations, mocks, fixtures, and input setup.
- `Act`: call the method/function or trigger the UI interaction.
- `Assert`: a single `expect` statement.
- Separate `Arrange`, `Act`, and `Assert` blocks with one blank line for visual clarity.
- Keep each `it` focused on one observable behavior.
- Do not add inline test comments like `// Arrange`, `// Act`, or `// Assert`.
- Only introduce nested `describe` blocks when a parent group has more than 2 related `it` cases.
- If a group has 1 or 2 tests, prefer plain `it` blocks under the parent `describe`.
- Group related behaviors under one `describe` and split each assertion into its own `it`.

## Quality Metrics

- Unit test pass rate in CI: >= 99%.
- Flaky test rate: < 1%.
- Test runtime for unit suite: within agreed CI budget.
- Regression escape rate (bugs without tests): decreasing trend.
- Coverage target: enforce meaningful thresholds per critical module.

## Workflow

1. Identify risk and expected behavior.
2. Write/adjust tests first when feasible.
3. Implement or refactor production code.
4. Validate tests locally and in CI.
5. Document testing rationale for non-obvious scenarios.

## Definition of Done

- New/changed behavior is covered by unit tests.
- Edge cases and failure paths are validated.
- Test suite remains stable and maintainable.
- No unjustified test skips or permanent TODO assertions.
- Delivery confidence increases after merge.
