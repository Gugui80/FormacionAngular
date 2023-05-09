import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MrrHeaderComponent } from './mrr-header/mrr-header.component';
import { MrrFooterComponent } from './mrr-footer/mrr-footer.component';
import { MrrNavbarComponent } from './mrr-navbar/mrr-navbar.component';
import { MrrToolbarComponent } from './mrr-toolbar/mrr-toolbar.component';

@NgModule({
    declarations: [
      MrrHeaderComponent,
      MrrFooterComponent,
      MrrNavbarComponent,
      MrrToolbarComponent
    ],
    imports: [
      BrowserModule,
      NgbModule
    ],
    exports: [
        MrrHeaderComponent,
        MrrFooterComponent,
        MrrNavbarComponent,
        MrrToolbarComponent
    ]
  })
  export class CoreModule { }