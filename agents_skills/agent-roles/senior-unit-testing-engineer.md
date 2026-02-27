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
- Keep tests readable with clear arrange-act-assert structure.
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
