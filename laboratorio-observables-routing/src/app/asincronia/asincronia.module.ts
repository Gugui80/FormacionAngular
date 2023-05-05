import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';



@NgModule({
  declarations: [
    SimpleObservableComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SimpleObservableComponent
  ]
})
export class AsincroniaModule { }
