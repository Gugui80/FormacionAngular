import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';
import { BreadcrumbItem } from 'src/app/shared/models/breadcrumb-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  listMenuItems: SidebarItem[] = [];

  private baseUrl: string =
    window.location.protocol +
    '//' +
    window.location.host +
    '/' +
    ENV.API.CONTEX;
  
  constructor( 
    private httpClient: HttpClient
  ) {
    if (ENV.API.ENTORNO === 'LOCAL') {
      this.baseUrl =
        window.location.protocol +
        '//' +
        window.location.hostname +
        ENV.API.BASE +
        ENV.API.CONTEX;
    }

    if (ENV.API.ENTORNO === 'MOCK') {
      this.baseUrl = '';
    }
   }

   getMenuItems(): Observable<SidebarItem[]> {
    return this.httpClient.get<SidebarItem[]>(this.baseUrl + 'assets/mocks/sidebarMock.json');
   }

   getBreadcrumbsItems(): Observable<BreadcrumbItem[]> {
    return this.httpClient.get<BreadcrumbItem[]>(this.baseUrl + 'assets/mocks/breadcrumbMock.json')
   }
}
