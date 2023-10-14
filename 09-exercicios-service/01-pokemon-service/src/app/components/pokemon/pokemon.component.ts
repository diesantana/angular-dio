import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TypeObject } from '../../interfaces/type-object'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokeName: string = '';
  pokeTypes: string[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon('25').subscribe({
      next: (value) => {
        console.log(value.types);
        this.pokeName = value.name;
        this.pokeTypes = value.types.map((obj: TypeObject) => obj.type.name);
      },
      error: (err) => console.log(err),
      complete: () => console.log('Solicitação finalizada')
    })
  }
 
}
