import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development'
import { PokemonData } from '../models/pokemonData';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = '';
  constructor(
    private http: HttpClient
  ) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable<PokemonData> {
    return this
      .http
      .get<PokemonData>
      (`${this.baseURL}${pokemonName}`)
  }
}
