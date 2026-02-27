# Step 1 - Project Quality Baseline

Este paso define la base de calidad técnica para Angular + TypeScript.

## Objetivo

- Activar estándares consistentes de lint y formato desde el inicio.
- Evitar drift de estilo y errores básicos de calidad.

## Configuración aplicada

### 1) TypeScript strict

En `tsconfig.json`:

- `"strict": true`
- `"noImplicitOverride": true`
- `"noImplicitReturns": true`
- `"noFallthroughCasesInSwitch": true`
- `"strictTemplates": true` (en `angularCompilerOptions`)

### 2) ESLint moderno (Flat Config)

Dependencias instaladas:

```bash
npm install -D eslint@^9 @eslint/js typescript-eslint angular-eslint eslint-config-prettier
```

Archivo de configuración:

- `eslint.config.mjs` (con `defineConfig` y presets oficiales)

Notas:

- Se usa formato Flat Config (ESLint v9).
- Se evitó `tseslint.config(...)` por deprecación de typings.
- VS Code configurado para Flat Config en `.vscode/settings.json`.

### 3) Prettier

Configuración:

- `.prettierrc`
- `.prettierignore`

Reglas base aplicadas:

- `printWidth: 100`
- `tabWidth: 2`
- `singleQuote: true`
- `semi: true`
- `trailingComma: "all"`
- `endOfLine: "lf"`
- parser `angular` para `*.html`

## Scripts de `package.json`

- `lint`: `eslint .`
- `format`: `prettier --write .`
- `format:check`: `prettier --check .`

## Validación recomendada

```bash
npm run lint
npm run format:check
```

Si ambos pasan, el baseline de calidad está correcto.
