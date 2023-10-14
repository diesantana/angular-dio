import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // Importando as variáveis de ambiente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //O serviço é fornecido para toda a aplicação
})
export class PokemonService {
  private pokeApi: string = environment.pokeApiUrl;

  constructor(private http: HttpClient) { }

  getPokemon(pokemonName: string): Observable<any> {
    return this.http.get<any>(`${this.pokeApi}${pokemonName}`);
  }
}
