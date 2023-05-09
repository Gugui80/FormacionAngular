import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MrrCustomErrorComponent } from './components/mrr-custom-error/mrr-custom-error.component';
import { MrrDashboardComponent } from './components/mrr-dashboard/mrr-dashboard.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { MrrLogoutComponent } from './components/mrr-logout/mrr-logout.component';



@NgModule({
  declarations: [
    WelcomePageComponent,
    ErrorPageComponent,
    MrrCustomErrorComponent,
    MrrDashboardComponent,
    LogoutPageComponent,
    MrrLogoutComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    WelcomePageComponent,
    ErrorPageComponent,
    MrrCustomErrorComponent
  ]
})
export class WelcomeModule { }
