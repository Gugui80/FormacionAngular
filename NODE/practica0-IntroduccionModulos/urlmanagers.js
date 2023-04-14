//Declaramos 3 manejadores para las peticiones a las url '/', '/usuario', '/igae'
principalManejador = () => {
    console.log('Soy el manejador de la HOME');
}

usuarioManejador = () => {
    console.log('Soy el manejador del/la USUARI@');
}

igaeManejador = () => {
    console.log('Soy el manejador de la IGAE');
}

exports.principalManejador = principalManejador;
exports.usuarioManejador = usuarioManejador;
exports.igaeManejador = igaeManejador;