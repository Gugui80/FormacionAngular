//Los métodos  y atributos de la interfaz nunca se declaran con modificadores de tipo let, const...
class persona implements personable {
    nombre: string = 'Juan';
    edad: number = 35;

    getNombre(): void {
        console.log(this.nombre);
    }

    getEdad(): void {
        console.log(this.edad);
    }

    constructor() {

    }

}