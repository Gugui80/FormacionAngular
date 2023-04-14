//Declaramos un nuevo módulo para manejar 2 tipos concreots de peticiones
initIgae = () => {
    console.log('Manejador de petición INIT invocado');
}

backCallIgae = () => {
    console.log('Manejador de petición BACKEND invocado');
}

exports.initIgae = initIgae;
exports.backCallIgae = backCallIgae;