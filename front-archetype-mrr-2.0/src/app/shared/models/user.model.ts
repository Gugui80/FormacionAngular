export interface User {
  id: number;
  login: string;
  token: string;
}

export type comunSecUsuarioDto = {
  id: number;
  login: string;
  nombre: string;
  dni?: string;
  apellido1?: string;
  apellido2?: string;
  fechaActualizacion?: Date;
  fechaCreacion?: Date;
  usuarioActualizacion?: string;
  usuarioCreacion?: string;
  tokenCli?: string;
  preautorizacon?: boolean;
  usuarioPreautorizacion?: string;
  fechaPreautorizacion?: Date;
}