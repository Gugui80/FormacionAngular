import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.contadorFormacion = 7;
    this.finalizada = true;
  }

  ngOnInit(): void {
  }

  finalizarFormacion(event: any): void {
    this.finalizada = !this.finalizada;
  }

  capturarTarea(contenidoTarea: string): void {
    console.log('Componente formacion: ' + contenidoTarea)
    this.tareaCapturada = contenidoTarea
  }

}
