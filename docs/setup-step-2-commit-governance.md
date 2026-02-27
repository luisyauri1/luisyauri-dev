# Step 2 - Commit Governance and Automation

Este paso define gobernanza de commits y automatización pre-commit.

## Objetivo

- Forzar commits con formato convencional.
- Ejecutar lint/format solo en archivos staged para acelerar flujo.
- Evitar ruido de fin de línea entre entornos.

## Configuración aplicada

### 1) Husky + Commitlint

Dependencias instaladas:

```bash
npm install -D husky @commitlint/cli @commitlint/config-conventional
```

Inicialización:

```bash
npm pkg set scripts.prepare="husky"
npm run prepare
```

Archivos:

- `commitlint.config.mjs`
- `.husky/commit-msg`

Contenido del hook:

```sh
npx --no -- commitlint --edit "$1"
```

### 2) lint-staged en pre-commit

Dependencia instalada:

```bash
npm install -D lint-staged
```

Hook:

- `.husky/pre-commit`

Contenido:

```sh
npx lint-staged
```

Configuración en `package.json`:

- `*.{ts,html}` -> `eslint --fix`
- `*.{ts,html,scss,md,json,yml,yaml}` -> `prettier --write`

### 3) Normalización de line endings

Archivo:

- `.gitattributes`

Política:

- Texto en `LF` por defecto
- `.bat`, `.cmd`, `.ps1` en `CRLF`
- Binarios marcados como `binary`

## Validación recomendada

```bash
echo "bad message" | npx commitlint
echo "docs(setup): add baseline" | npx commitlint
npx lint-staged --debug --allow-empty
```

Resultado esperado:

- Mensaje inválido falla.
- Mensaje convencional pasa.
- `lint-staged` carga configuración sin errores.
