import { Component, OnInit } from '@angular/core';
import { Usuario, TipologiaUsuario } from '../../usuario.model';
import { UsuariosManagerService } from '../../services/usuarios-manager.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario;

  constructor(public usuariosManagerService: UsuariosManagerService) { 
    this.nuevoUsuario = this.usuariosManagerService.nuevoUsuario();
  }

  ngOnInit(): void {
    console.log(this.nuevoUsuario)
  }
  //[(ngModel)]=""s
}
