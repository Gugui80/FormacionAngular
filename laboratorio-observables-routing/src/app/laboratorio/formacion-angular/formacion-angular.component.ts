import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-formacion-angular',
  templateUrl: './formacion-angular.component.html',
  styleUrls: ['./formacion-angular.component.scss']
})
export class FormacionAngularComponent implements OnInit {

  nombre: string = 'IGAE';
  contadorFormacion: number;
  finalizada: boolean;
  buttonContent: string = 'Finalizar formación';
  buttonDisabled: boolean = false;
  diaDeHoy: Date = new Date();
  tareaCapturada: string = '';
  urlFormacion: string = '';

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    this.contadorFormacion = 7;
    this.finalizada = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametrosPath: Params) => {
        if (parametrosPath['tipoFormacion']) {
          this.urlFormacion = parametrosPath['tipoFormacion'];
        } else {
          this.urlFormacion = 'Ningún parámetro pasado en la url';
        }
      }
    );
  }

  finalizarFormacion(event: any): void {
    this.finalizada = !this.finalizada;
  }

  capturarTarea(contenidoTarea: string): void {
    console.log('Componente formacion: ' + contenidoTarea)
    this.tareaCapturada = contenidoTarea
  }

}
