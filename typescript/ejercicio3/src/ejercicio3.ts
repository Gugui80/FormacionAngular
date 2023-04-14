function miTipo<nuevoTipo> (val: nuevoTipo): nuevoTipo {
    console.log(val);
    return val;
}

let verificarTipo = 'Soy un string;';
let verificarTipo2 = 345;

let verificacionString = miTipo(verificarTipo); //Al poner el cursor sobre la variable vemos que ha inferido que es un string.
let verificacionNumber = miTipo(verificarTipo2); //Al poner el cursor sobre la variable vemos que ha inferido que es un number.

let datoNumerico: number;
//datoNumerico = miTipo(verificarTipo); //Error en tiempo de compilación, por conversión errónea de tipos.

/**
 * Ejemplos con clases dentro del mismo fichero.
 */

class formacionIgae {
    fecha: Date;
    duracion: number;
}


let verificarObjetoIgae = miTipo(new formacionIgae());//Al poner el cursor sobre la variable vemos que ha inferido que es un objeto de tipo formacionIgae.

/**
 * NOTA: Los generics no tienen traducción a código Javascript, ya que Javascript no admite tipos. Como habíamos dicho, los genéricos solo te ayudan en tiempo de desarrollo.
 * Si lanzamos el comando tsc -w, veremos en js que el tipado ha desaparecido
 */