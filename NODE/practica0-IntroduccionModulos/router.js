//Manejador de enrutamiento
routerIgae = (rutaSeleccionada, manejador) => {
    console.log('La ruta seleccionada es:' + rutaSeleccionada);

    for (const key in manejador) {
        if (Object.hasOwnProperty.call(manejador, key)) {
            const element = manejador[key];
            if (key === rutaSeleccionada) {
                manejador[key](rutaSeleccionada);
            }
        }
    }
}

exports.routerIgae = routerIgae;