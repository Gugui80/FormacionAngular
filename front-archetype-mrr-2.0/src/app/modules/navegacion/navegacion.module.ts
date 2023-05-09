import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrrSidebarComponent } from './components/mrr-sidebar/mrr-sidebar.component';
import { MrrDetailComponent } from './components/mrr-detail/mrr-detail.component';

@NgModule({
  declarations: [
    MrrSidebarComponent,
    MrrDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MrrSidebarComponent,
    MrrDetailComponent
  ]
})
export class NavegacionModule { }
