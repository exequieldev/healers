---
name: healers-frontend
description: Agente de desarrollo para comprender y modificar la interfaz, la lógica y los datos del visor anatómico web Healers.
---

# Agente de desarrollo frontend de Healers

Actúa como agente de desarrollo de este repositorio. Antes de cambiar una sección, identifica su fuente de verdad, sigue el flujo de datos hasta sus consumidores y conserva el comportamiento existente fuera del alcance solicitado. No supongas que este proyecto usa React ni un backend.

## Arquitectura

Healers es un visor anatómico web estático:

- No usa un framework de interfaz ni un proceso de servidor de aplicación. La página se sirve como archivos estáticos; `vercel.json` configura el despliegue y sus encabezados.
- `index.html` define el documento, la estructura de los paneles y la mayor parte del CSS, incluidas las reglas responsive. `fonts/fonts.css` declara las fuentes locales.
- `src/visor.js` es la lógica fuente del visor. Usa Three.js para cargar y mostrar el modelo 3D, gestionar cámara, selección, filtros, paneles y telemetría de ejemplo.
- `src/i18n.js` contiene los idiomas admitidos, la detección del idioma y los textos de interfaz en español e inglés.
- `data/anatomia.js` publica los datos base en español como `window.ANAT_DATA`. `data/anatomia.en.js` añade la traducción inglesa como `window.ANAT_I18N.en`.
- Los scripts `models/*.js` publican los modelos anatómicos que consume el visor como `window.ANAT_MODELS`. El HTML carga los datos y esos scripts antes del bundle.
- `app.js` es el bundle de producción generado a partir de `src/visor.js` por esbuild; incluye Three.js. No lo edites a mano.
- `herramientas/` contiene scripts Python para preparar los datos y las mallas anatómicas. Consulta `herramientas/LEEME.md` antes de cambiar o regenerar esos recursos.
- `Dockerfile` sirve el directorio con el servidor estático de Python. No hay API ni persistencia de telemetría en el proyecto: los valores de tripulación y ambiente se definen en el código cliente como datos de ejemplo.

## Mapa para modificar secciones

- Estructura, orden o contenido visual de paneles; estilos, accesibilidad y responsive: empieza en `index.html`. Busca los `id`, las clases y los atributos `data-*` de la sección para conectar markup y lógica.
- Interacción, escena 3D, estado, renderizado o eventos: cambia `src/visor.js` y revisa cómo se enlaza con los elementos del HTML.
- Texto, idioma o detección de idioma: actualiza `src/i18n.js` para todos los idiomas admitidos. Las fichas anatómicas traducidas se mantienen en los archivos `data/anatomia.<idioma>.js`, alineadas con los datos base.
- Fichas, sistemas, grupos o correspondencia de piezas: inspecciona `data/anatomia.js` y los consumidores en `src/visor.js`; preserva los identificadores que enlazan los datos con las mallas.
- Mallas anatómicas o su exportación: inspecciona `herramientas/LEEME.md` y los generadores antes de tocar los artefactos de `models/`. Mantén consistentes los nombres de malla y los identificadores de piezas.
- Fuentes: usa los archivos existentes bajo `fonts/` y sus declaraciones en `fonts/fonts.css`.

Los paneles principales de la página son el visor 3D (`#stage`), la navegación superior y vistas, la tripulación (`#crew`), las capas y sistemas (`#left`), la telemetría (`#telemetry`), la ficha anatómica (`#right`), las pestañas móviles y el indicador de carga. El CSS de escritorio y los ajustes responsive viven juntos en `index.html`.

## Flujo de datos y build

1. `index.html` carga `data/anatomia.js` y cada `models/*.js` antes de `app.js`.
2. `src/visor.js` inicializa la escena y usa `window.ANAT_DATA` para sistemas, conceptos, piezas y metadatos de modelos.
3. Las mallas se decodifican desde `window.ANAT_MODELS` y se cargan en Three.js; los IDs de las piezas relacionan la geometría con las fichas y los controles de visibilidad.
4. `src/i18n.js` determina el idioma. La traducción anatómica adicional se carga cuando corresponde; los textos de interfaz y las fichas son capas separadas.
5. Si cambias `src/visor.js`, genera el bundle con `npm run build`. El resultado es `app.js`; conserva ese archivo sincronizado con el código fuente.

## Pautas de trabajo

- Antes de editar, inspecciona la sección solicitada y sus referencias en HTML, JavaScript, traducciones y datos. Sigue los IDs y atributos existentes en vez de introducir un flujo paralelo.
- Haz cambios acotados, siguiendo el estilo actual de JavaScript y CSS. No añadas un framework, dependencias, backend ni abstracciones sin que el cambio lo requiera.
- Mantén español e inglés coherentes cuando cambies textos visibles. Usa los mecanismos existentes `data-i18n`, `data-i18n-attr` y `STR`; no dupliques textos traducibles en el markup o en la lógica.
- Conserva accesibilidad existente: controles semánticos, nombres accesibles, estados ARIA y foco visible. Verifica los modos móvil y escritorio si modificas layout o interacción.
- No cambies la estructura de `ANAT_DATA`, los IDs de piezas, los nombres de mallas ni los pasos de generación sin comprobar sus dependencias. Evita editar a mano datos comprimidos o artefactos generados.
- Trata la telemetría como datos ilustrativos locales, no como lecturas médicas reales o una integración con sensores.
- No afirmes que hay pruebas automatizadas configuradas: `package.json` define `build`, pero no un script de test. Ejecuta las comprobaciones pertinentes al cambio; como mínimo, `npm run build` para cambios en `src/`.
- Si no puedes ejecutar una comprobación, indícalo claramente. Resume qué cambiaste y qué validaste al terminar.
