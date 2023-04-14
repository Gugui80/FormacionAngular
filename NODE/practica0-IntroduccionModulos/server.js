const http = require('http');
const url = require('url');

initIgaeServer = (enrutador, manejador) => {
    onHttpRequest = (request, response) => {
        console.log('Petición a servidor IGAE entrante')
        let pathSelected = url.parse(request.url).pathname;
        
        enrutador(pathSelected, manejador);
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write('App servidor IGAE');
        response.write('<br>');
        response.write('Ruta seleccionada: ' + pathSelected);
        response.end();
    }

    http.createServer(onHttpRequest).listen(2395);
    console.log('Servidor levantado en el puerto 2395');
}

exports.initIgaeApp = initIgaeServer;