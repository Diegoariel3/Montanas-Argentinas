# Actualización de Montañas Argentinas

Copia local del repositorio original, abierta en VS Code. Los cambios no se subieron a GitHub.

## Qué cambió

Cinco páginas renovadas con enfoque de turismo informativo, seis fichas de destinos, búsqueda por texto y región, recomendaciones para elegir alojamiento y lista de preparación con guardado local. Se conserva HTML, CSS/Sass y JavaScript y las rutas originales.

La dirección visual convierte las fichas de la cordillera argentina en páginas de una guía de viaje. Se usan Bebas Neue y EB Garamond, fondo piedra y acentos de bosque y lago tomados de las fotografías existentes. Las fotos costeras sugeridas por la herramienta se sustituyeron por el archivo real de montañas del proyecto. La portada se concentra en El Chaltén.

## Comprobaciones

- Cinco páginas: sin desborde móvil y todas las imágenes cargan.
- Búsqueda sin tildes, filtro de Cuyo, resultados vacíos y restablecimiento: correctos.
- Menú móvil y persistencia de la lista: correctos.
- Catálogo: sin desborde a 1440, 768 y 390 píxeles.
- Enlaces, imágenes y anclas locales: verificados.
- Comparación visual antes/después a 1440, 768 y 390 píxeles: revisada.
- Inspector visual: de 7 hallazgos de fallo en el original a 0 en la portada actual. El título pasó de estar fuera de la primera pantalla a ser visible y ocupar dos líneas en los tres tamaños.
- Revisión de cambios de Git: sin errores de espacios.

Quedan tres observaciones visuales: no hay video (el archivo original no contiene uno), variación de alineaciones por las fichas y una sección con título a la izquierda y lista a la derecha que la herramienta interpreta como desequilibrada. La revisión de capturas confirma que ambas columnas tienen contenido. Se prioriza una guía de lectura rápida y fotografías del destino sobre incorporar video sin procedencia verificada.

## Pendiente antes de publicar

Documentar autores y licencias de las imágenes heredadas. Confirmar el contenido editorial y revisar condiciones vigentes en las fuentes oficiales enlazadas. La página no procesa reservas ni envía formularios.

## Cómo verla

Abrí index.html en el navegador, o usá Open with Live Server desde VS Code. El README explica cómo editar los estilos y sincronizar los cambios con GitHub.
