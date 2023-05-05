import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'laboratorio', 
    loadChildren: () => import('../app/laboratorio/laboratorio-routing.module')
      .then( (routeModule) => routeModule.LaboratorioRoutingModule) 
  },
  { path: 'asincronia', 
    loadChildren: () => import('../app/asincronia/asincronia-routing.module')
      .then( (routeModule) => routeModule.AsincroniaRoutingModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
