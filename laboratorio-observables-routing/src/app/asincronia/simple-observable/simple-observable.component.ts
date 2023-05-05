import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ManagerHttpService } from '../services/manager-htpp.service';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {

  primerObservable = from('Hola Mundo');

  constructor(
    public managerHttpService: ManagerHttpService
  ) { 
    
  }

  ngOnInit(): void {
    //Manejo de subscribe
    this.primerObservable.subscribe(
      character => {
        console.log(character);
      }
    );

    //Operadores
    this.primerObservable.pipe(
      filter( character => character != 'M'),
      map( character => character + ',')
    ).subscribe(
      characterFilter => {
        console.log(characterFilter);
      }
    )
  }

  consultarTodos(idTodo: number) {
    this.managerHttpService.getTodos(idTodo).subscribe(
      result => {
        console.log(result);
      },
      errorTodo => {
        console.log(errorTodo);
      }
    )
  }

  consultarPokemos() {
    this.managerHttpService.getPokemons().
      pipe(
        map( (pokemonSkills: any) => pokemonSkills.abilities )
      )
      .subscribe( 
        abilities => {
          console.log(abilities);
        }
      )
  }

}
