# Alternativas del Sur

Directorio de software libre e infraestructura abierta, sin extractivismo ni prácticas onerosas, con una sección dedicada a universidades. Se publica en <https://alternativas.desdeelsur.org>.

## Desarrollo

Requiere Node 22.23.1 (ver `.node-version`). Astro está fijado en 7.4.1 porque las versiones 7.4.2 y posteriores exigen Node 22.23.4 o superior; al actualizar Node, actualizá también `.node-version` y Astro.

```sh
npm install
npm run dev      # servidor local
npm run build    # genera dist/ y valida las fichas contra el esquema
npm run preview  # sirve dist/
```

## Contenido

Cada programa es un archivo Markdown en `src/content/apps/`. El esquema está en `src/content.config.ts`; las categorías, áreas universitarias y tipos de gobernanza, en `src/data/taxonomy.ts`.

- Una ficha con el campo `university` aparece también en `/universidades/`.
- Los nombres de `alternativeTo` generan las páginas `/alternativas-a/<nombre>/`.
- El campo `kind` agrupa las opciones por tipo, como metabuscador o buscador con índice propio.
- Los otros directorios y listas awesome de `/otros-directorios/` están en `src/data/otros-directorios.yaml`.
- Las notas editoriales de una página de `/alternativas-a/` están en `src/data/notas-alternativas.ts`.

Los criterios editoriales se publican en `/criterios/`.

## Despliegue en Cloudflare Pages

Conectá este repositorio en Cloudflare Pages con:

| Ajuste | Valor |
| --- | --- |
| Comando de compilación | `npm run build` |
| Directorio de salida | `dist` |
| Versión de Node | la toma de `.node-version` |
| Dominio personalizado | `alternativas.desdeelsur.org` |

Las cabeceras de seguridad están en `public/_headers`. Si activás Cloudflare Web Analytics, inyectará un script externo y dejará de ser cierto lo que dice `/criterios/`.

## Licencias

- **Código:** [AGPL-3.0-or-later](LICENSE).
- **Contenido** (fichas de `src/content/` y textos editoriales de las páginas): [CC BY-SA 4.0](LICENSE-CONTENIDO).

Las tipografías Piazzolla y Alegreya Sans se distribuyen bajo la SIL Open Font License, y cada programa del directorio conserva su propia licencia.
