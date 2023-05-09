import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MrrSpinnerComponent } from './components/mrr-spinner/mrr-spinner.component';
import { MrrBreadcrumbsComponent } from './components/mrr-breadcrumbs/mrr-breadcrumbs.component';
import { CoffeeErrorHandler } from './handlers/coffee-error-handler';
import { ErrorMesaggePipe } from './pipes/error-mesagge.pipe';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { MrrToasterComponent } from './components/mrr-toaster/mrr-toaster.component';
import { CanReadEntityDirective } from './directives/can-read-entity.directive';
import { CanEditEntityDirective } from './directives/can-edit-entity.directive';
import { CanDeleteEntityDirective } from './directives/can-delete-entity.directive';
import { CanCreateEntityDirective } from './directives/can-create-entity.directive';


@NgModule({
    declarations: [
        /*MrrSpinnerComponent,
        MrrBreadcrumbsComponent,
        ErrorMesaggePipe,
        ClickStopPropagationDirective,
        MrrToasterComponent,
        CanReadEntityDirective,
        CanEditEntityDirective,
        CanDeleteEntityDirective,
        CanCreateEntityDirective*/
    ],
    imports: [
      BrowserModule
    ],
    exports: [
       /* MrrSpinnerComponent,
        MrrBreadcrumbsComponent,
        ErrorMesaggePipe,
        ClickStopPropagationDirective,
        MrrToasterComponent,
        CanReadEntityDirective,
        CanEditEntityDirective,
        CanDeleteEntityDirective,
        CanCreateEntityDirective*/
    ]
  })
  export class SharedModule { }