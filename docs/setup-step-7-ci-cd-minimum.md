# Step 7 - Minimum CI/CD

Este paso agrega un pipeline mínimo para validar calidad y desplegar manualmente.

## Objetivo

- Validar automáticamente calidad en PR y `main`.
- Confirmar que la imagen Docker builda correctamente.
- Permitir despliegue manual controlado a servidor por SSH.

## Archivos agregados

- `.github/workflows/ci.yml`
- `.github/workflows/cd-manual.yml`

## Configuración aplicada

### 1) CI automático

Archivo:

- `.github/workflows/ci.yml`

Se ejecuta en:

- `pull_request`
- `push` a `main`

Pasos:

1. `actions/checkout@v4`
2. `actions/setup-node@v4` con Node `22` y cache npm
3. `npm ci --ignore-scripts`
4. `npm run check` (`lint + format:check + test:ci + build`)
5. `docker build -t luisyauri-dev:ci .`

### 2) CD manual por GitHub Actions

Archivo:

- `.github/workflows/cd-manual.yml`

Se ejecuta por:

- `workflow_dispatch` (manual)

Acciones:

1. carga llave SSH desde secret
2. registra `known_hosts` con `ssh-keyscan`
3. conecta al servidor
4. en `APP_DIR`:
   - `git fetch --all`
   - `git checkout <branch>`
   - `git pull --ff-only origin <branch>`
   - `docker compose up -d --build`
   - `docker image prune -f`

## Secrets y variables necesarias

En GitHub (`Settings > Secrets and variables > Actions`) configurar:

- `SSH_PRIVATE_KEY`
- `SSH_HOST`
- `SSH_PORT` (ejemplo `22`)
- `SSH_USER`
- `APP_DIR` (ruta del repo en el servidor)

Opcional:

- `DEPLOY_BRANCH` (variable de repositorio; default `main`)

## Notas

- Este CD es mínimo y manual para mantener control.
- Siguiente evolución recomendada: deploy por tags, entorno `staging`, y rollback automatizado.
