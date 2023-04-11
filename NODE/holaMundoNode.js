console.log("Hola Mundo");

//En el terminal, lanzamos el comando: node holaMundoNode.js -> Mostrará Hola Mundo

/**
 * Queremos servir páginas web, de manera que necesitamos un Servidor HTTP.
Nuestro servidor necesitará responder directamente peticiones (requests), dependiendo de qué URL sea pedida en este requerimiento, es que necesitaremos algún tipo de enrutador (router) de manera de mapear los peticiones a los handlers (manejadores) de éstos.
Para satisfacer a los peticiones que llegaron al servidor y han sido ruteados usando el enrutador, necesitaremos de hecho handlers (manejadores) de peticiones
El Enrutador probablemente debería tratar cualquier información POST que llegue y dársela a los handlers de peticiones en una forma conveniente, luego necesitaremos manipulación de data de petición
Nosotros no solo queremos manejar peticiones de URLs, sino que también queremos desplegar contenido cuando estas URLs sean pedidas, lo que significa que necesitamos algún tipo de lógica en las vistas a ser utilizada por los handlers de peticiones, de manera de poder enviar contenido al browser del Usuario.
Por último, pero no menos importante, el Usuario será capaz de subir imágenes, así que necesitaremos algún tipo de manipulación de subidas quien se hará cargo de los detalles.
 */