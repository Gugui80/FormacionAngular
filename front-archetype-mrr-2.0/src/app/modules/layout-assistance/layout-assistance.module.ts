import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NavegacionModule } from '../navegacion/navegacion.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    ToolbarComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NavegacionModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    ToolbarComponent,
    LayoutComponent,
    HeaderComponent
  ]
})
export class LayoutAssistanceModule { }
