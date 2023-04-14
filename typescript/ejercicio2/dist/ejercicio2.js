//Los métodos  y atributos de la interfaz nunca se declaran con modificadores de tipo let, const...
class persona {
    getNombre() {
        console.log(this.nombre);
    }
    getEdad() {
        console.log(this.edad);
    }
    constructor() {
        this.nombre = 'Juan';
        this.edad = 35;
    }
}
