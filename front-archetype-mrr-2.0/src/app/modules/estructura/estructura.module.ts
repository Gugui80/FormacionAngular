import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesPageComponent } from './pages/componentes-page/componentes-page.component';
import { MedidasPageComponent } from './pages/medidas-page/medidas-page.component';
import { ProyectosPageComponent } from './pages/proyectos-page/proyectos-page.component';
import { SubproyectosPageComponent } from './pages/subproyectos-page/subproyectos-page.component';
import { ActuacionesPageComponent } from './pages/actuaciones-page/actuaciones-page.component';

@NgModule({
  declarations: [
    ComponentesPageComponent,
    MedidasPageComponent,
    ProyectosPageComponent,
    SubproyectosPageComponent,
    ActuacionesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentesPageComponent,
    MedidasPageComponent,
    ProyectosPageComponent,
    SubproyectosPageComponent,
    ActuacionesPageComponent
  ]
})
export class EstructuraModule { }
