import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDataModel } from '../models/pokemon-data-models';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private baseUrlPoke: string = environment.pokeApi;
  private pokemonData: PokemonDataModel | any; 

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string): Observable<PokemonDataModel>{
    this.pokemonData = this.http.get<any>(`${this.baseUrlPoke}${pokemonName.toLowerCase()}`);
    return this.pokemonData;
  }
}
