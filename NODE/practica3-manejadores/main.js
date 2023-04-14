//Declaramos un manejador de enrutamientos de las url de las peticiones a nuestro servidor.
routerIgae = ( pathPeticion, handler ) => {
    console.log('Petición enrutada para ' + pathPeticion);

    for (const key in handler) {
        if (Object.hasOwnProperty.call(handler, key)) {
            const element = handler[key];
            if (key === pathPeticion) {
                handler[key](pathPeticion);
            }
        }
    }
    
}

exports.routerIgae = routerIgae;