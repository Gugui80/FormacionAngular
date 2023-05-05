import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss']
})
export class PrivadoComponent implements OnInit {

  estilos: string[] = [];
  divEscapista: any;
  isLlamativo: boolean = false;
  tareas: any[] = [];

  @Input()
  nombreFormacion: string = '';

  @Output()
  contenidoTarea = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.estilos.push('publica');
    this.estilos.push('privada');
    this.divEscapista = {'mostrar-div-cantoso': this.isLlamativo, 'mostrar-div-soseras': !this.isLlamativo };

    this.tareas = [
      {
        id: 1,
        content: 'Tarea 1'
      },
      {
        id: 2,
        content: 'Tarea 2'
      },{
        id: 3,
        content: 'Tarea 3'
      },{
        id: 4,
        content: 'Tarea 4'
      },{
        id: 5,
        content: 'Tarea 5'
      },
    ];
  }

  lanzarTarea(contenidoTarea: string) {
    console.log('Componente privado: ' + contenidoTarea);
    this.contenidoTarea.emit(contenidoTarea);
  }
}
