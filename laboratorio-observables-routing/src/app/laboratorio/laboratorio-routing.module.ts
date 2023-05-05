import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacionAngularComponent } from './formacion-angular/formacion-angular.component';
import { PrivadoComponent } from './privado/privado.component';

const routes: Routes = [
    { path: 'formacion', component: FormacionAngularComponent },
    { path: 'privado', component: PrivadoComponent }];

@NgModule({
    imports: [RouterModule. forChild(routes)],
    exports: [RouterModule]
  })
  export class LaboratorioRoutingModule { }