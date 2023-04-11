const http = require('http');

initIgae = () => {
    onHttpRequest = (request, response) => {
        console.log('Petición entrante');
        
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hola Mundo Servidor Node');
        response.write('<br>');
        response.end();
    }

    http.createServer(onHttpRequest).listen(2395);

    console.log('Servidor corriendo en puerto 2395');
}

exports.initIgaeApp = initIgae;