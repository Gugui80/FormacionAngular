import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUserMrr = this.securityService.currentUserValue;

    if (currentUserMrr && JSON.parse(currentUserMrr.toString()).token) {
      if (
        (request.url.includes(ENV.API.CONTEX_HOME) || request.url.includes(ENV.API.CONTEX_WS) )  &&
        JSON.parse(sessionStorage.getItem('tokenJWT')!)
      ) {
        request = request.clone({
          setHeaders: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Authorization: JSON.parse(sessionStorage.getItem('tokenJWT')!)
          }
        });
      } else if (
        request.url.includes(ENV.SECURITY.WS_LOGIN.LOGIN_CONTEX_SGIFE)
      ) {
              
    } else {

      request = request.clone({
        setHeaders: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Authorization: JSON.parse(currentUserMrr.toString()).token
        }
      });
    }
  }
    return next.handle(request);
  }
}
