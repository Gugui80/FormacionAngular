import { NgModule, ErrorHandler, LOCALE_ID, isDevMode } from '@angular/core';
import { registerLocaleData, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers } from './reducers';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutAssistanceModule } from './modules/layout-assistance/layout-assistance.module';
import { NavegacionModule } from './modules/navegacion/navegacion.module';
import { MrrSpinnerComponent } from './shared/components/mrr-spinner/mrr-spinner.component';
import { MrrBreadcrumbsComponent } from './shared/components/mrr-breadcrumbs/mrr-breadcrumbs.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service';
import { CoffeeErrorHandler } from './shared/handlers/coffee-error-handler';
import { ErrorMesaggePipe } from './shared/pipes/error-mesagge.pipe';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { RootStoreModule } from './root-store/root-store.module';
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';
import { MrrToasterComponent } from './shared/components/mrr-toaster/mrr-toaster.component';
import { CanReadEntityDirective } from './shared/directives/can-read-entity.directive';
import { CanEditEntityDirective } from './shared/directives/can-edit-entity.directive';
import { CanDeleteEntityDirective } from './shared/directives/can-delete-entity.directive';
import { CanCreateEntityDirective } from './shared/directives/can-create-entity.directive';
import { toolbarReducer } from './root-store/toolbar-feature/toolbar.reducer';
import { navbarReducer } from './root-store/navbar-feature/navbar.reducer';
import { sidebarReducer } from './root-store/sidebar-feature/sidebar.reducer';
import { SidebarEffects } from './root-store/sidebar-feature/sidebar.effects';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    MrrSpinnerComponent,
    MrrBreadcrumbsComponent,
    ErrorMesaggePipe,
    ClickStopPropagationDirective,
    MrrToasterComponent,
    CanReadEntityDirective,
    CanEditEntityDirective,
    CanDeleteEntityDirective,
    CanCreateEntityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'MY-XSRF-TOKEN',
      headerName: 'MY-X-CSRF-TOKEN'
    }),
    CoreModule,
    SharedModule,
    LayoutAssistanceModule,
    NavegacionModule,
    WelcomeModule,
    NgbToastModule,
    NgbModule,
    StoreModule.forRoot({
        navbar: navbarReducer,
        toolbar: toolbarReducer,
        sidebar: sidebarReducer
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true
    }),
    EffectsModule.forRoot([SidebarEffects]),
    StoreRouterConnectingModule.forRoot(),
    RootStoreModule
  ],
  providers: [
    DatePipe,
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: CoffeeErrorHandler},
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
