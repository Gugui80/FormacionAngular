import { ErrorHandler, Injectable } from "@angular/core";
import { environment as ENV } from '../../../environments/environment';
import { LogLevel } from "../models/logEntry.model";
import { WebPubliserBody } from "../../core/services/web-publisher/web-publiser.model";
import { WebPublisherService } from "../../core/services/web-publisher/web-publisher.service";
import { MrrCustomError } from "../models/mrrCustomError.model";
import { ToastService } from '../../core/services/toast.service';
import { ErrorMesaggePipe } from "../pipes/error-mesagge.pipe";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CoffeeErrorHandler implements ErrorHandler {
    errorMrr: MrrCustomError = new MrrCustomError();
    urlDefaultError: string = 'error';

    constructor(
        private webPublisherService: WebPublisherService,
        public toastService: ToastService,
        private router: Router
    ) { }

    public handleError(error: any): void {
        if ( error && error !== null ) {
            switch ( error.status ) {
                case 500: 
                    this.errorMrr = error;
                    this.errorMrr.customMessage = new ErrorMesaggePipe().transform(error.message);
                    break;
                case 400: 
                    this.errorMrr = error;
                    this.errorMrr.customMessage = error.message;
                    break;
                case 404:
                    this.errorMrr = error;
                    this.errorMrr.customMessage = new ErrorMesaggePipe().transform(error.message);
                    break;
                default:
                    this.errorMrr.customMessage = 'Error inesperado'
            }
        }
        
        this.toastService.showToasts(this.errorMrr.customMessage, { classname: 'bg-danger text-light', delay: 5000 });
        
        this.router.navigate(
                [this.urlDefaultError],
                { queryParams: { 
                    message: this.errorMrr.customMessage,
                    status: error.status 
                    } 
                }
            );
        
    }

    /*handleError(error: Error): void {
        if (error.message && !error.message.toString().includes('HttpErrorResponse')) {

            const modulo = `${localStorage.getItem('modulo')}`;
            const seccion = localStorage.getItem('seccion')? JSON.parse(localStorage.getItem('seccion')).id : '';
            const seccion = '';
            const seccionID = seccion ? `/${seccion}` : '';
            const funcion = localStorage.getItem('funcion') ? `/${localStorage.getItem('funcion')}` : '';
            const subfuncion = localStorage.getItem('subfuncion') ? `/${localStorage.getItem('subfuncion')}` : '';

            this.webPublisherService.saveError(new WebPubliserBody(
                error.message,
                error.stack,
                LogLevel.Error,
                modulo + seccionID + funcion + subfuncion,
                'coffee-mrr'
            ));
            this.webPublisherService.saveError(new WebPubliserBody(
                error.message,
                '',
                LogLevel.Error,
                modulo + seccionID + funcion + subfuncion,
                'coffee-mrr'
            ));
        }
        if (!ENV.production) {
            throw new Error(error.message);
        }
    }*/
}