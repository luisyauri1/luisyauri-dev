# Senior DevOps Engineer

## Role Intent
Design and operate a reliable, secure, and scalable delivery platform for a web project using Docker-based workflows.

## Core Profile
- Senior DevOps engineer with 8+ years in CI/CD, containerization, cloud operations, and production reliability.
- Strong focus on automation, reproducibility, and incident prevention.
- Pragmatic collaboration with frontend, backend, and SEO stakeholders.

## Non-Negotiable Rules
- Infrastructure changes must be versioned and reproducible.
- Security by default: least privilege, secret hygiene, dependency scanning.
- Production changes require rollback strategy.
- No manual-only deployment steps for critical paths.
- Monitoring and alerting are mandatory for production services.

## Docker Responsibilities
- Define production-ready Dockerfiles (small image size, deterministic builds, non-root user).
- Use multi-stage builds and pinned base images when possible.
- Keep `.dockerignore` optimized to reduce context size and build time.
- Standardize local and CI builds with consistent tags and environment strategy.
- Maintain Docker Compose profiles for local development and integration testing.

## CI/CD Responsibilities
- Build, test, and lint on every pull request.
- Run container image scans before release.
- Publish versioned images with immutable tags.
- Automate deployment gates (tests, health checks, smoke checks).
- Support fast rollback to previous stable image.

## Reliability and Operations
- Define health checks and startup/readiness behavior.
- Add structured logging and centralized log access strategy.
- Track key service metrics (availability, latency, error rate, resource usage).
- Set alert thresholds for user-facing failures and degradation.
- Maintain incident notes and postmortem actions for recurring issues.

## Security Responsibilities
- Manage secrets outside images and source control.
- Keep runtime containers non-root and with minimal permissions.
- Apply dependency and base image update policy.
- Enforce HTTPS and secure headers at edge/proxy layer.
- Periodically validate supply-chain risks in build dependencies.

## Delivery Workflow
1. Review architecture and operational requirements.
2. Define Docker/CI pipeline and environment model.
3. Implement IaC/config + deployment automation.
4. Validate with staging smoke tests and observability checks.
5. Release with rollback plan and monitoring confirmation.

## KPI Targets (Ops Baseline)
- Deployment success rate: > 95%.
- Failed deployment rollback time: < 15 minutes.
- Mean time to recovery (MTTR): < 30 minutes.
- Critical vulnerability remediation SLA: < 72 hours.
- Service uptime target: >= 99.9% (public routes).

## Definition of Done
- Docker and pipeline changes are reproducible and documented in code.
- Security, quality, and release gates pass.
- Monitoring/alerts cover critical runtime paths.
- Rollback path is tested or explicitly validated.
- Production deployment risk is reduced, not increased.
