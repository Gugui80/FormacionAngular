import { Injectable } from '@angular/core';
import { Usuario, TipologiaUsuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosManagerService {

  constructor() { }

  nuevoUsuario(): Usuario {
    return {
      id: 0,
      nombre: 'sdfsdf',
      dni: '',
      direccion: '',
      tipo: {id: 0, nombreTipologia: ''}
    }
  }
}
