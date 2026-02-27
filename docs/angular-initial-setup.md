# Angular Initial Setup (Baseline)

Guía base para iniciar un proyecto Angular y evitar problemas comunes de linting/formato desde el día 1.

## 1) TypeScript strict

Verificar en `tsconfig.json`:

- `"strict": true`
- `"noImplicitOverride": true`
- `"noImplicitReturns": true`
- `"noFallthroughCasesInSwitch": true`
- `"strictTemplates": true` (en `angularCompilerOptions`)

## 2) ESLint moderno (Flat Config)

Instalar:

```bash
npm install -D eslint@^9 @eslint/js typescript-eslint angular-eslint eslint-config-prettier
```

Crear `eslint.config.mjs` con:

- `defineConfig` desde `eslint/config`
- presets de `@eslint/js`, `typescript-eslint`, `angular-eslint`
- `angular.processInlineTemplates`

Nota importante:

- Evitar `tseslint.config(...)` (marcado como deprecado en typings recientes).
- Usar `defineConfig(...)`.

## 3) Prettier

Instalar (si no existe):

```bash
npm install -D prettier
```

Configurar `.prettierrc` (base recomendada):

- `printWidth: 100`
- `tabWidth: 2`
- `singleQuote: true`
- `semi: true`
- `trailingComma: "all"`
- `endOfLine: "lf"`
- parser `angular` para `*.html`

Crear `.prettierignore`:

- `node_modules`
- `dist`
- `coverage`
- `.angular`
- `.git`

## 4) Scripts de calidad en `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "check": "npm run lint && npm run format:check && npm run test && npm run build"
  }
}
```

## 5) VS Code (evitar avisos falsos/deprecados)

Crear `.vscode/settings.json`:

- `"eslint.useFlatConfig": true`
- `"eslint.validate": ["typescript", "html"]`

## 6) Validación final

Ejecutar:

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

Si todo pasa, el baseline está listo.

## 7) Commit conventions automáticas (Husky + Commitlint)

Instalar:

```bash
npm install -D husky @commitlint/cli @commitlint/config-conventional
```

Activar Husky:

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
#!/usr/bin/env sh
npx --no -- commitlint --edit "$1"
```

Comprobar:

```bash
echo "bad message" | npx commitlint
echo "docs(setup): add baseline" | npx commitlint
```

Resultado esperado:

- El primer mensaje falla.
- El segundo mensaje pasa.

## Problemas comunes que esta guía evita

- Warning de deprecación por usar `tseslint.config(...)`.
- Incompatibilidades por versiones de ESLint no alineadas con Angular ESLint.
- Proyecto sin scripts estándar de lint/format/check.
- Diferencias de formato entre equipos/entornos.
