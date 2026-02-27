# Step 5 - Docker and Reproducible Environment

Este paso define una ejecución reproducible del proyecto con Docker.

## Objetivo

- Tener el mismo entorno local y de despliegue.
- Ejecutar SSR de Angular en contenedor con configuración mínima.
- Facilitar ejecución con un solo comando.

## Archivos agregados

- `Dockerfile`
- `.dockerignore`
- `docker-compose.yml`
- `.env.example`

## Configuración aplicada

### 1) Dockerfile multi-stage

- Etapa `builder`:
  - instala dependencias con `npm ci`
  - ejecuta `npm run build`
- Etapa `runner`:
  - instala solo dependencias de producción (`npm ci --omit=dev --ignore-scripts`)
  - copia `dist/`
  - ejecuta `node dist/luisyauri-dev/server/server.mjs`

Nota:

- `--ignore-scripts` evita ejecutar `prepare` (Husky) dentro del contenedor de runtime.

### 2) .dockerignore

- excluye artefactos y carpetas no necesarias (`node_modules`, `dist`, `coverage`, `.angular`, etc.)
- reduce tamaño de contexto y acelera builds

### 3) docker-compose

- servicio `web`
- build local usando `Dockerfile`
- puerto `4000:4000`
- variables:
  - `PORT` (desde `.env` o default 4000)
  - `NODE_ENV=production`

### 4) Ajuste SSR para host local

Archivo:

- `angular.json`

Configuración aplicada:

- `projects.<app>.architect.build.options.security.allowedHosts`:
  - `localhost`
  - `127.0.0.1`

Objetivo:

- evitar warnings SSR por host no permitido al probar Docker en local.

### 5) Variables de entorno base

- `.env.example`:
  - `PORT=4000`

## Uso rápido

```bash
docker compose up --build -d
```

Luego abrir:

```text
http://localhost:4000
```

Comandos útiles:

```bash
docker compose logs -f
docker compose down
```
