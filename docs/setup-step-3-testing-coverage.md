# Step 3 - Unit Testing and Coverage Gate

Este paso define la base de testing con umbral de cobertura obligatorio.

## Objetivo

- Ejecutar tests de forma estable en CI.
- Forzar umbral mínimo de cobertura global en 90%.
- Asegurar política de regresión para bugfixes.

## Configuración aplicada

### 1) Coverage provider para Vitest

Dependencia instalada:

```bash
npm install -D @vitest/coverage-v8
```

### 2) Configuración del builder de tests

En `angular.json` (`projects.<app>.architect.test.options`):

- `"coverage": true`
- `"coverageReporters": ["text-summary", "html", "lcov"]`
- `"coverageThresholds"`:
  - `statements: 90`
  - `branches: 90`
  - `functions: 90`
  - `lines: 90`

### 3) Script de CI para tests

En `package.json`:

- `test:ci`: `ng test --watch=false`
- `check`: actualizado para usar `test:ci`

## Política mínima de equipo

- Todo bugfix debe incluir test de regresión.
- Si coverage baja de 90%, el pipeline debe fallar.

## Validación recomendada

```bash
npm run test:ci
```

Resultado esperado:

- Tests en verde.
- Coverage report generado.
- Umbrales 90% cumplidos o fallo del proceso.
