const server = require('./server');
const manejadores = require('./urlmanagers');
const router = require('./router');

//Mapear las rutas '/', '/usuario', '/igae'
/*const handler = {
    '/': manejadores.principalManejador,
    '/usuario': manejadores.usuarioManejador,
    '/igae': manejadores.igaeManejador
};*/

const handler = {};
handler['/'] = manejadores.principalManejador;
handler['/usuario'] = manejadores.usuarioManejador;
handler['/igae'] = manejadores.igaeManejador;

server.initIgaeApp(router.routerIgae, handler);