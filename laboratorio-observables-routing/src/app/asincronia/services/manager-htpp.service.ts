import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerHttpService {

  constructor(
    public httpClient: HttpClient
  ) { }

  getTodos(idTodo: number): Observable<Object> {
    return this.httpClient.get<Object>('https://jsonplaceholder.typicode.com/todos/' + idTodo);
  }

  getPokemons(): Observable<Object> {
    return this.httpClient.get<Object>('https://pokeapi.co/api/v2/pokemon/ditto');
  }
}
