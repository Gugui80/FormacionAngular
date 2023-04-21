import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';



@NgModule({
  declarations: [
    AltaUsuarioComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AltaUsuarioComponent,
    ListadoUsuariosComponent
  ]
})
export class UsuariosModule { }
