import { Component, OnInit } from '@angular/core';
import { UsuariosManagerService } from '../../services/usuarios-manager.service';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

  listadoUsuariosDisponibles: Usuario[];

  constructor(
    public usuariosManagerService: UsuariosManagerService
  ) {
    this.listadoUsuariosDisponibles = this.usuariosManagerService.getUsuarios();
  }

  ngOnInit(): void {
  }

}
