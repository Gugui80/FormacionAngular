const server = require('./server');
const router = require('./main');
const handlers = require('./manejadores');

const handler = {};
handler['/'] = handlers.initIgae,
handler['/init'] = handlers.initIgae,
handler['/back'] = handlers.backCallIgae


//Pasamos como parámetro el callback que maneja los eventos de enrutamiento, a nuestro servidor.
server.initIgaeApp(router.routerIgae, handler);