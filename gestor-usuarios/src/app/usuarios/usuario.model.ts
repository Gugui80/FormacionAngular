export interface Usuario {
    id: number;
    nombre: string;
    dni: string;
    direccion?: string;
    tipo: TipologiaUsuario;
}

export interface TipologiaUsuario {
    id: number;
    nombreTipologia: string;
}