import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesPageComponent } from '../estructura/pages/componentes-page/componentes-page.component';

const routes: Routes = [
  { path: 'plan-recuperacion/componentes', component: ComponentesPageComponent, data: { breadcrumbData: ['plan-recuperacion, componentes'], titlePage: '' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavegacionRoutingModule { }
