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
  listadoTipologiasUsuarios: TipologiaUsuario[];

  constructor(
    public usuariosManagerService: UsuariosManagerService
    ) { 
    this.nuevoUsuario = this.usuariosManagerService.nuevoUsuario();
    this.listadoTipologiasUsuarios = this.usuariosManagerService.getTipologias();
  }

  ngOnInit(): void {
  }

  altaUsuario() {
    this.usuariosManagerService.agregarUsuario(this.nuevoUsuario);
    this.nuevoUsuario = this.usuariosManagerService.nuevoUsuario()
  }
}
