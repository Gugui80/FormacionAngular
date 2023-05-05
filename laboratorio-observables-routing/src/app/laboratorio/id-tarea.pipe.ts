import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idTarea'
})
export class IdTareaPipe implements PipeTransform {

  transform(identificadorTarea: number, contenidoTarea?: string): string {
    let resultadoTransformacion: string = '';

    switch (identificadorTarea) {
      case 1:
        resultadoTransformacion = 'Tarea prioritaria';
        break;
      case 3:
        resultadoTransformacion = 'Tarea secundaria';
        break;
      default:
        resultadoTransformacion = 'Tarea sin seguimiento';
        break;
    }

    if (contenidoTarea === 'Tarea 2') {
      resultadoTransformacion = 'Tarea no realizable';
    }

    return resultadoTransformacion;
  }

}
