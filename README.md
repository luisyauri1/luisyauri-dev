# LuisyauriDev

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Docker environments

This repository is configured with separate Docker Compose files for local and production.

- Base: `docker-compose.yml` (shared services)
- Local: `docker-compose.local.yml`
- Production: `docker-compose.prod.yml`

### Local (Docker)

Run local stack with `web + nginx` using `localhost`:

```bash
cp -f .env.example .env
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

Open:

- `http://localhost:8080` (or `LOCAL_NGINX_PORT` from `.env`)
- `http://localhost:4000` (direct app port, optional)

Stop:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml down
```

### Production (Docker + Nginx + TLS)

Run production stack (web + nginx + certbot volumes):

```bash
cp -f .env.example .env
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

Stop:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml down
```

Deploy update on server:

```bash
git pull origin main
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build --force-recreate
docker compose -f docker-compose.yml -f docker-compose.prod.yml ps
```

### TLS renewal (server cron)

Example daily renewal at 03:00:

```cron
0 3 * * * cd /root/apps/luisyauri-dev && docker compose -f docker-compose.yml -f docker-compose.prod.yml stop nginx && docker run --rm -p 80:80 -v /root/apps/luisyauri-dev/certbot/conf:/etc/letsencrypt certbot/certbot:latest renew && docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d nginx
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
