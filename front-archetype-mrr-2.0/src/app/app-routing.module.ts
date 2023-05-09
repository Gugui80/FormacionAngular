import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './modules/welcome/pages/welcome-page/welcome-page.component';
import { ComponentesPageComponent } from './modules/estructura/pages/componentes-page/componentes-page.component';
import { MedidasPageComponent } from './modules/estructura/pages/medidas-page/medidas-page.component';
import { ProyectosPageComponent } from './modules/estructura/pages/proyectos-page/proyectos-page.component';
import { SubproyectosPageComponent } from './modules/estructura/pages/subproyectos-page/subproyectos-page.component';
import { ActuacionesPageComponent } from './modules/estructura/pages/actuaciones-page/actuaciones-page.component';
import { ErrorPageComponent } from './modules/welcome/pages/error-page/error-page.component';
import { MrrCustomErrorComponent } from './modules/welcome/components/mrr-custom-error/mrr-custom-error.component';
import { LogoutPageComponent } from './modules/welcome/pages/logout-page/logout-page.component';
import { AuthGuardService } from './core/guards/auth-guard.service';

const titleMrr: string = 'COFFE-MRR';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: WelcomePageComponent, title: titleMrr, data: { breadcrumbData: '', titlePage: ''} },
  { path: 'plan-recuperacion/componentes', component: ComponentesPageComponent, title: titleMrr + ' - Componentes', data: { breadcrumbData: ['plan-recuperacion, componentes'], titlePage: 'Componentes' } },
  { path: 'plan-recuperacion/medidas', component: MedidasPageComponent, title: titleMrr + ' - Medidas', data: { breadcrumbData: ['plan-recuperacion, medidas'], titlePage: 'Medidas' } },
  { path: 'planificacion/proyectos', component: ProyectosPageComponent, title: titleMrr + ' - Proyectos', data: { breadcrumbData: ['planificación-gestión, proyectos'], titlePage: 'Proyectos' } },
  { path: 'planificacion/subproyectos', component: SubproyectosPageComponent, title: titleMrr + ' - Subproyectos', data: { breadcrumbData: ['planificación-gestión, subproyectos'], titlePage: 'Subproyectos' } },
  { path: 'planificacion/actuaciones', component: ActuacionesPageComponent, title: titleMrr + ' - Actuaciones', data: { breadcrumbData: ['planificación-gestión, actuaciones'], titlePage: 'Actuaciones' } },
  { path: 'logout', component: LogoutPageComponent, title: titleMrr },
  { path: 'error', component: ErrorPageComponent, title: titleMrr, children: [{ path: '', component: MrrCustomErrorComponent }] },
  { 
    path: '**', 
    component: ErrorPageComponent, 
    children: [ { path: '', component: MrrCustomErrorComponent } ], 
    data: { breadcrumbData: [''], titlePage: 'Error' } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
