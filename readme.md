# Montañas Argentinas

Guía informativa de turismo de montaña. Proyecto de práctica actualizado con HTML, Sass/CSS y JavaScript sin framework.

## Abrir en VS Code

En VS Code, elegí **Archivo → Abrir carpeta** y seleccioná esta carpeta `Montanas-Argentinas`.

Abrí `index.html` en tu navegador o usá la extensión Live Server. No hace falta instalar dependencias para navegar el sitio.

Si tenés Python instalado, `npm start` sirve la web en http://127.0.0.1:4173.

## Editar

- `index.html`: portada.
- `pages/lugares.html`: destinos y fichas.
- `pages/actividades.html`: experiencias.
- `pages/alojamiento.html`: orientación para elegir alojamiento.
- `pages/contacto.html`: guía de viaje (conserva la URL original).
- `scss/main.scss`: estilos de la versión actual; los parciales anteriores se conservan como referencia y ya no se importan.
- `css/main.css`: estilos compilados que carga el navegador.
- `js/main.js`: navegación móvil, búsqueda y lista de preparación.

Para trabajar con Sass: `npm install`, luego `npm run sass:watch`. Para generar el CSS una vez: `npm run sass:build`.

## Funciones

Búsqueda sin distinguir tildes, filtros por región, fichas desplegables, menú móvil accesible y lista de preparación guardada en este navegador. Sin JavaScript, los destinos y el contenido siguen disponibles.

Las tipografías de Google Fonts son opcionales: hay fuentes locales de respaldo. Las imágenes se conservan del repositorio original; falta documentar sus autores y licencias individuales antes de una publicación definitiva. No se agregaron fotografías externas.

Las tarifas, aperturas y permisos se consultan mediante los enlaces oficiales de cada ficha. Esta web no vende excursiones, no procesa reservas y no recoge datos personales. El antiguo formulario de contacto no tenía un servicio de envío y se reemplazó por la guía informativa.

## Subir la actualización a GitHub

En **Control de código fuente** de VS Code, revisá los cambios, escribí un mensaje, confirmalos y elegí **Sincronizar cambios**. La copia local conserva el remoto original. Esta actualización no se subió ni modificó la web pública.
