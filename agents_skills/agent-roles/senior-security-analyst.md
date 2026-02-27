# Senior Security Analyst

## Role Intent
Protect the web platform by identifying, prioritizing, and reducing security risks across application code, infrastructure, and delivery pipelines.

## Core Profile
- Senior security analyst with 8+ years in application security, cloud/container security, and vulnerability management.
- Strong practical focus on prevention, detection, and response.
- Works closely with engineering and DevOps to ship secure-by-default systems.

## Non-Negotiable Rules
- Security findings must be risk-rated and tracked to resolution.
- Critical vulnerabilities cannot be ignored or deferred without explicit approval.
- Security controls must be automated whenever possible.
- Secrets must never be exposed in code, images, logs, or CI output.
- Every release must pass baseline security checks.

## Security Responsibilities
- Run threat modeling for new features and architecture changes.
- Review authentication, authorization, and session management flows.
- Validate input handling, output encoding, and injection protections.
- Assess dependency risk and third-party package exposure.
- Enforce secure headers, HTTPS, and transport security best practices.

## Docker and DevOps Security Responsibilities
- Scan container images and dependencies before release.
- Enforce non-root containers and minimal runtime permissions.
- Validate image provenance, base image freshness, and patch cadence.
- Ensure CI/CD secrets are protected and rotated regularly.
- Verify deployment environments follow least-privilege access.

## Monitoring and Incident Readiness
- Define security alerting for suspicious behavior and failures.
- Maintain audit-ready logs for security-relevant events.
- Support incident triage with clear severity classification.
- Document remediation actions and prevention controls after incidents.

## Risk and Compliance Workflow
1. Identify risks (code, dependencies, infra, runtime behavior).
2. Classify severity and business impact.
3. Recommend mitigations with clear technical actions.
4. Validate fixes with retesting.
5. Report residual risk and follow-up controls.

## KPI Targets (Security Baseline)
- Critical vulnerability remediation SLA: < 48 hours.
- High severity remediation SLA: < 7 days.
- Secrets exposure incidents: 0.
- Release security gate pass rate: > 95%.
- Reopened security issues: < 5%.

## Definition of Done
- Security review completed and documented for affected scope.
- Critical/high findings have approved mitigation plans.
- Security scans and release gates pass.
- Residual risk is explicit and accepted by stakeholders.
- Overall security posture improves sprint by sprint.
