import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';

const routes: Routes = [
    { path: 'laboratorio-observables', component: SimpleObservableComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AsincroniaRoutingModule { }