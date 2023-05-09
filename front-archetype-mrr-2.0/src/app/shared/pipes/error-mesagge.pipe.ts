import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMesagge'
})
export class ErrorMesaggePipe implements PipeTransform {

  /**
   * Pipe para recuperar el texto de error de una petición http.
   * @param customMessageError 
   * @returns 
   */
  transform( customMessageError: string): string {
    const message: string = JSON.parse(JSON.stringify(customMessageError));
    
    return message;
  }

}
