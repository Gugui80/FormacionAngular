import { locale } from './configuration-files/locale';
import { SECURITY } from './configuration-files/security';


export const environment = {
  production: false,
  API: {
    ENTORNO: 'LOCAL',
    PROTOCOLO: 'localhost',
    CORREOS: true,
    BASE: ':7121/',
    BASE_FRONT: ':4200/',
    BASE_FRONT_MRR: ':4201/',
    BASE_IMAGEN: '../coffee-imagenes/',
    BASE_DOCUMENTS: '../coffee-mrr/assets/documents/',
    BASE_FRONT_SGIFE: ':4202/',
    BASE_SWL: ':8080/',
    ...locale,
  },
  SECURITY: { ...SECURITY }
};
