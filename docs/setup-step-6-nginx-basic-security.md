# Step 6 - Nginx Basic Security Layer

Este paso agrega una capa base de Nginx frente a la app SSR en Docker.

## Objetivo

- Exponer solo Nginx hacia afuera.
- Mantener la app Angular SSR como servicio interno.
- Agregar headers de seguridad básicos y compresión gzip.
- Tener un endpoint de salud simple.

## Archivos agregados o actualizados

- `nginx/nginx.conf`
- `docker-compose.yml`
- `.env.example`

## Configuración aplicada

### 1) Reverse proxy básico

Archivo:

- `nginx/nginx.conf`

Configuración:

- Nginx escucha en puerto `80`.
- Reenvía tráfico de `/` a `http://web:4000`.
- Preserva headers (`Host`, `X-Real-IP`, `X-Forwarded-*`).

### 2) Headers de seguridad base

En `nginx.conf` se agregaron:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` con permisos restringidos para cámara/micrófono/geolocalización.

### 3) Gzip

Se habilitó compresión para tipos de contenido comunes web.

### 4) Healthcheck HTTP

Endpoint:

- `/healthz` devuelve `200 ok`.

### 5) Docker Compose

Archivo:

- `docker-compose.yml`

Cambios:

- `web` queda interno (`expose: 4000`).
- nuevo servicio `nginx`:
  - imagen `nginx:1.29-alpine`
  - depende de `web`
  - publica `${NGINX_PORT:-8080}:80`
  - monta `nginx/nginx.conf` en modo solo lectura

### 6) Variables de entorno

Archivo:

- `.env.example`

Variables:

- `PORT=4000`
- `NGINX_PORT=8080`

## Uso rápido

```bash
docker compose up --build -d
```

Abrir:

```text
http://localhost:8080
```

Validar salud:

```text
http://localhost:8080/healthz
```

## Nota

Esta es una base mínima. Para producción en servidor público, conviene agregar TLS, rate limiting, y políticas CSP más estrictas.
