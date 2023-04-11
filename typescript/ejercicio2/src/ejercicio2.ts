class persona implements personable {
    nombre: string = 'Juan';
    edad: number = 35;

    getNombre(): void {
        console.log(this.nombre);
    }

    getEdad(): void {
        console.log(this.edad);
    }

}