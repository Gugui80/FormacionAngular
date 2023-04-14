//A diferencia de otros lenaguajes, en Typescript las interfaces pueden tener atributos/propiedades.
interface personable {
    nombre: string;
    edad: number;
    getNombre(): void;
    getEdad(): void;
}