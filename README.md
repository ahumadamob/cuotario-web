# cuotario-web

Proyecto base en Angular 20.3.2 con el tema Sandstone de Bootswatch habilitado por defecto y un cliente HTTP
preconfigurado para apuntar a `http://localhost:8080/`.

## Requisitos

- Node.js 20+
- npm 10+

## Scripts disponibles

- `npm start`: inicia el servidor de desarrollo.
- `npm run build`: genera el build de producción en `dist/`.
- `npm test`: ejecuta las pruebas unitarias con Karma.

## Configuración de API

El archivo `src/environments/environment.development.ts` define `apiBaseUrl` como `http://localhost:8080/`. Si deseas
apuntar a otro host o puerto, ajusta ese valor (y el de `environment.ts` para producción).

El componente de inicio incluye un botón “Probar conexión” que realiza una petición GET al `apiBaseUrl` para validar la
conectividad con el backend.
