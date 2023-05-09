import { locale } from './configuration-files/locale';
import { SECURITY } from './configuration-files/security';

export const environment = {
    production: false,
    API: {
        ENTORNO: 'MOCK',
        PROTOCOLO: 'localhost',
        BASE_FRONT: ':5921',
        BASE: ':5291/',
        BASE_IMAGEN: '../coffee-imagenes/',
        ...locale
    },
    SECURITY: { ...SECURITY }
};

/*export const environment = {
    production: false,
    API: {
        ENTORNO: 'MOCK',
        PROTOCOLO: 'localhost',
        CORREOS: true,
        BASE: ':7121/',
        BASE_SWL: ':8080/',
        BASE_FRONT: ':5921',
        BASE_FRONT_MRR: ':4201/',
        BASE_IMAGEN: '../coffee-imagenes/',
        BASE_DOCUMENTS: '../coffee-mrr/assets/documents/',
        BASE_FRONT_SGIFE: ':4202/',
        ...locale,
    },
    SECURITY: { ...SECURITY }
};*/