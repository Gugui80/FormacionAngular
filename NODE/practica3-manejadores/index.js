const server = require('./server');
const router = require('./main');
const handlers = require('./manejadores');

const handler = {
    '/': handlers.initIgae,
    '/init': handlers.initIgae,
    '/back': handlers.backCallIgae
}

//Pasamos como parámetro el callback que maneja los eventos de enrutamiento, a nuestro servidor.
server.initIgaeApp(router.routerIgae, handler);