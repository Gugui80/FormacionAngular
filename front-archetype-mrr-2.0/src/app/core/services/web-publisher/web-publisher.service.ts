import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment as ENV } from '../../../../environments/environment';
import { UnsubscribeOnDestroy } from '../../../shared/classes/unsubscribe-on-destroy.class';
import { SecurityService } from '../security.service';
import { WebPubliserBody } from './web-publiser.model';

@Injectable({
  providedIn: 'root'
})
export class WebPublisherService extends UnsubscribeOnDestroy() {

    public baseUrl: string;

    constructor(
        private http: HttpClient,
        private securityService: SecurityService
        ) {
        super();
        this.baseUrl = window.location.protocol + '//';
        this.baseUrl = this.baseUrl + (ENV.API.ENTORNO === 'LOCAL'
            ? window.location.hostname + ENV.API.BASE
            : window.location.host + '/')
            + ENV.API.CONTEX_HOME + ENV.API.LOGS;
    }
  
    saveError(body: WebPubliserBody): void {
        const idUser = JSON.parse(this.securityService.currentUserValue.toString()).user.id;
        this.http.post(this.baseUrl + '/traza?id=' + idUser, body).pipe(take(1)).subscribe();
    }
}
