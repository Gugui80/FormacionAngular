import { locale } from './configuration-files/locale';
import { SECURITY } from './configuration-files/security';

export const environment = {
  production: false,
  API: {
    ENTORNO: 'OTRO',
    CORREOS: false,
    BASE: window.location.protocol + '//' + window.location.host,
    BASE_FRONT: window.location.protocol + '//' + window.location.host,
    BASE_FRONT_MRR: ':4201/',
    BASE_IMAGEN: '../coffee-imagenes/',
    BASE_DOCUMENTS: '../coffee-mrr/assets/documents/',
    BASE_FRONT_SGIFE: ':4202/',
    BASE_SWL: ':8080/',
    ...locale,
  },
  SECURITY: { ...SECURITY }
};