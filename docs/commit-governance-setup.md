# Tooling Configuration (Scope-Limited)

Este documento cubre solo la configuración aplicada en esta conversación:

- Husky + Commitlint + lint-staged
- `.gitattributes`

## 1) Instalación

Instalar dependencias:

```bash
npm install -D husky @commitlint/cli @commitlint/config-conventional lint-staged
```

Inicializar Husky:

```bash
npm pkg set scripts.prepare="husky"
npm run prepare
```

Crear `commitlint.config.mjs`:

```js
export default {
  extends: ['@commitlint/config-conventional'],
};
```

Crear hook `.husky/commit-msg`:

```sh
npx --no -- commitlint --edit "$1"
```

Crear hook `.husky/pre-commit`:

```sh
npx lint-staged
```

Agregar `.gitattributes`:

```gitattributes
* text=auto eol=lf
*.bat text eol=crlf
*.cmd text eol=crlf
*.ps1 text eol=crlf
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.ico binary
*.woff binary
*.woff2 binary
```

## 2) Commit Conventions Automáticas

- Hook: `.husky/commit-msg`
- Config: `commitlint.config.mjs`
- Regla base: `@commitlint/config-conventional`

Esto fuerza que los commits cumplan Conventional Commits.

Ejemplo válido:

```text
docs(setup): add tooling configuration guide
```

## 3) Pre-commit Automation (lint-staged)

- Hook: `.husky/pre-commit`
- Configuración: `lint-staged` en `package.json`

Patrones activos:

- `*.{ts,html}` -> `eslint --fix`
- `*.{ts,html,scss,md,json,yml,yaml}` -> `prettier --write`

Objetivo:

- Ejecutar lint/format solo en archivos staged para acelerar commits.
- Evitar que código no formateado o con fixes simples llegue al commit.

## 4) Git Line Endings

- Config: `.gitattributes`
- Política:
  - Texto en `LF` por defecto
  - Scripts Windows (`.bat`, `.cmd`, `.ps1`) en `CRLF`
  - Binarios marcados como `binary`

Objetivo: evitar warnings y diferencias de fin de línea entre entornos.

## 5) Scripts configurados (`package.json`)

- `npm run prepare` (inicializa husky)

## 6) Verificación rápida recomendada

```bash
echo "bad message" | npx commitlint
echo "docs(setup): add baseline" | npx commitlint
npx lint-staged --debug --allow-empty
```

Si todo pasa, la configuración aplicada está saludable.

## Fuera de alcance

- ESLint y Prettier (documentados en `docs/angular-initial-setup.md`)
- Arquitectura Angular de features
- Estrategia SEO
- Configuración Docker/CI avanzada
- Reglas de negocio del proyecto
