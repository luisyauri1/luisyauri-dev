# Tooling Configuration (Scope-Limited)

Este documento cubre solo la configuración aplicada en esta conversación:
- Husky + Commitlint
- `.gitattributes`

## 1) Commit Conventions Automáticas

- Hook: `.husky/commit-msg`
- Config: `commitlint.config.mjs`
- Regla base: `@commitlint/config-conventional`

Esto fuerza que los commits cumplan Conventional Commits.

Ejemplo válido:

```text
docs(setup): add tooling configuration guide
```

## 2) Git Line Endings

- Config: `.gitattributes`
- Política:
  - Texto en `LF` por defecto
  - Scripts Windows (`.bat`, `.cmd`, `.ps1`) en `CRLF`
  - Binarios marcados como `binary`

Objetivo: evitar warnings y diferencias de fin de línea entre entornos.

## 3) Scripts configurados (`package.json`)

- `npm run prepare` (inicializa husky)

## 4) Verificación rápida recomendada

```bash
echo "bad message" | npx commitlint
echo "docs(setup): add baseline" | npx commitlint
```

Si todo pasa, la configuración aplicada está saludable.

## Fuera de alcance

- ESLint y Prettier (documentados en `docs/angular-initial-setup.md`)
- Arquitectura Angular de features
- Estrategia SEO
- Configuración Docker/CI avanzada
- Reglas de negocio del proyecto
