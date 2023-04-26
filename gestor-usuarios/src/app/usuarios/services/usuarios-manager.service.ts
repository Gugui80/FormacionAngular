import { Injectable } from '@angular/core';
import { Usuario, TipologiaUsuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosManagerService {

  listadoUsuarios: Usuario[];
  tipologiasUsuarios: TipologiaUsuario[];

  constructor() {
    this.listadoUsuarios = [];
    this.tipologiasUsuarios = [
      {
        id: 0,
        nombreTipologia: 'No registrado'
      },
      {
        id: 1,
        nombreTipologia: 'Administrador'
      },
      {
        id: 2,
        nombreTipologia: 'Invitado'
      },
      {
        id: 3,
        nombreTipologia: 'Desarrollador'
      }
    ];
  }

  nuevoUsuario(): Usuario {
    return {
      id: this.listadoUsuarios.length,
      nombre: '',
      dni: '',
      direccion: '',
      tipo: {id: 0, nombreTipologia: ''}
    }
  }

  getUsuarios(): Usuario[] {
    return this.listadoUsuarios;
  }

  getTipologias(): TipologiaUsuario[] {
    return this.tipologiasUsuarios;
  }

  agregarUsuario(usuario: Usuario): void {
    this.listadoUsuarios.push(usuario);
    console.log(this.listadoUsuarios);
  }
}
