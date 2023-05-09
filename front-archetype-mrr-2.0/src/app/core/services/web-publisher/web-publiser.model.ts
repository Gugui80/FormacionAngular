export class WebPubliserBody {

    message: string;
    cause: string;
    level: string;
    component: string;
    application: string;
    
    constructor(message: string, cause: string, level: string, component: string, application: string) {
        this.message = message ? message : '';
        this.cause = cause ? cause : '';
        this.level = level ? level : '';
        this.component = component ? component : '';
        this.application = application ? application : '';
    }
}

export class WebPubliserRequest {
    id: string;
}