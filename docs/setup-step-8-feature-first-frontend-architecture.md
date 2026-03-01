# Setup Step 8: Frontend Architecture (Feature-First)

## Objetivo

Definir una estructura escalable para Angular, separando responsabilidades por feature (dominio) y evitando carpetas globales gigantes por tipo técnico.

Esta guía aplica para tu caso actual:

- página informativa (`home`)
- sección de proyectos (`projects`)

## Patrón recomendado

- Arquitectura base: `Feature-First` (vertical slicing)
- UI: `Smart/Dumb Components`
- Orquestación: `Facade Pattern`
- Datos: `API + Repository`
- Tests: `co-location` (`*.spec.ts` al lado del archivo probado)

## Estructura sugerida

```text
src/
  app/
    core/
      guards/
      interceptors/
      services/
      config/
      models/
    shared/
      components/
      directives/
      pipes/
      ui/
    features/
      home/
        pages/
        components/
        data-access/
        state/
        models/
        home.routes.ts
      projects/
        pages/
        components/
        data-access/
        state/
        models/
        projects.routes.ts
    app.routes.ts
    app.config.ts
  assets/
    images/
    icons/
    fonts/
    data/
  styles/
    _variables.scss
    _mixins.scss
    _utilities.scss
    main.scss
```

## Responsabilidad por carpeta

- `core/`: servicios globales singleton (auth, config, http base, guards/interceptors).
- `shared/`: piezas reutilizables entre features (botones, cards, pipes, directivas).
- `features/<feature>/pages`: componentes de página/ruta (smart/container).
- `features/<feature>/components`: componentes presentacionales (dumb).
- `features/<feature>/data-access`: acceso a datos (`*.api.ts`, `*.repository.ts`).
- `features/<feature>/state`: estado y casos de uso (`*.facade.ts`, stores/signals).
- `features/<feature>/models`: tipos/contratos de la feature.

## Dónde van las APIs

Las APIs van por feature, no en una carpeta global única.

Ejemplo:

```text
features/
  projects/
    data-access/
      projects.api.ts
      projects.repository.ts
```

Regla:

- `*.api.ts`: llamadas HTTP puras con `HttpClient`.
- `*.repository.ts`: adaptación/mapeo de respuesta al modelo de UI.
- `facade` consume `repository`, no `HttpClient` directo.

Casos globales (por ejemplo auth/session) sí pueden vivir en `core/services`.

## Flujo recomendado

```text
Page Component (smart)
  -> Facade
    -> Repository
      -> API (HttpClient)
```

El retorno vuelve por el mismo camino y la UI solo consume estado expuesto por `Facade`.

## Ejemplo mínimo de feature `home`

```text
features/
  home/
    pages/
      home-page.component.ts
      home-page.component.spec.ts
    components/
      hero-section.component.ts
      hero-section.component.spec.ts
      featured-projects.component.ts
      featured-projects.component.spec.ts
    data-access/
      home-content.api.ts
      home-content.repository.ts
      home-content.repository.spec.ts
    state/
      home.facade.ts
      home.facade.spec.ts
    models/
      home-content.model.ts
    home.routes.ts
```

Si `home` es solo presentación estática, puedes omitir `state/` y `data-access/`.

## Ejemplo mínimo de feature `projects`

```text
features/
  projects/
    pages/
      projects-page.component.ts
      projects-page.component.spec.ts
    components/
      project-card.component.ts
      project-card.component.spec.ts
    data-access/
      projects.api.ts
      projects.repository.ts
      projects.repository.spec.ts
    state/
      projects.facade.ts
      projects.facade.spec.ts
    models/
      project.model.ts
    projects.routes.ts
```

## Convención de pruebas unitarias

Usar `co-location`:

- `archivo.ts` -> `archivo.spec.ts` en la misma carpeta.
- Beneficio: alta mantenibilidad y contexto local de cada feature.

## Cuándo subir complejidad de estado

Empieza con `signals + facade + repository`.

Evalúa pasar a `NgRx` si aparece:

- estado compartido entre muchas pantallas/features
- flujos complejos (cache, optimistic updates, efectos encadenados)
- necesidad alta de trazabilidad/debug temporal

## Checklist de implementación

- crear `features/home` y `features/projects`
- mover componentes a `pages/` y `components/`
- crear `data-access` por feature
- crear `facade` por feature
- mantener `core` solo para transversal
- dejar pruebas `*.spec.ts` junto al código
- activar lazy loading por feature en `app.routes.ts`
