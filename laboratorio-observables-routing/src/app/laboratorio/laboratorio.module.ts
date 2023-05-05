import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormacionAngularComponent } from './formacion-angular/formacion-angular.component';
import { PrivadoComponent } from './privado/privado.component';
import { IdTareaPipe } from './id-tarea.pipe';
import { AppFondoRojoDirective } from './app-fondo-rojo.directive';

@NgModule({
  declarations: [
    FormacionAngularComponent,
    PrivadoComponent,
    IdTareaPipe,
    AppFondoRojoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormacionAngularComponent,
    PrivadoComponent
  ]
})
export class LaboratorioModule { }
