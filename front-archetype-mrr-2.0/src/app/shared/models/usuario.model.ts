export interface Usuario {
  id?: number;
  login: string;
  activo: string;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
  usuarioCreacion?: string;
  usuarioActualizacion?: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  cargo: string;
  correoElectronico: string;
  telefono: string;
  dni: string;
  tokenCli?: string;
}

export interface UsuarioNodoListado {
  loginUsuario: string;
  nombreUsuario: string;
  cargo: string;
  codigoPerfil: string;
  nombrePerfil: string;
  fechaCreacion?: string;
}
