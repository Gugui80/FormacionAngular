import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { SecurityService } from '../services/security.service';
import { WebPublisherService } from '../services/web-publisher/web-publisher.service';

@Injectable({
    providedIn: 'root'
  })
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private securityService: SecurityService,
        private webPublisherService: WebPublisherService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        );
    }
}

/**
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((response: any) => {
        if (response?.status === 204) {
          this.setError(response, LogLevel.Info, `Http: ${response.statusText} for ${response.url}`);
        }
      }),
      catchError((err: HttpErrorResponse) => {
        let errorLevel = LogLevel.All;
        if (err?.status !== 200 && err.url && !err.url.includes('/logs/traza')) {
          switch (err.status) {
            case 401:
            case 403:
              errorLevel = LogLevel.Warn;
              this.securityService.logout();
              location.reload();
              break;
          }
        }
        return throwError(err);
      })
    );
  }

  private setError(error: any, errorLevel: string, message?: string): void {
    const modulo = `${localStorage.getItem('modulo')}`;
    const seccion = localStorage.getItem('seccion')
      ? JSON.parse(localStorage.getItem('seccion')).id
      : '';
    const seccionID = seccion ? `/${seccion}` : '';
    const funcion = localStorage.getItem('funcion')
      ? `/${localStorage.getItem('funcion')}`
      : '';
    const subfuncion = localStorage.getItem('subfuncion')
      ? `/${localStorage.getItem('subfuncion')}`
      : '';

    this.webPublisherService.saveError(
      new WebPubliserBody(
        message ? message : error.message,
        error.statusText,
        errorLevel,
        modulo + seccionID + funcion + subfuncion,
        'coffee-mrr'
      )
    );
}
 */