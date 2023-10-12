import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  inputValue: string = '25';
  namePokemon: string = '';
  imgPokemon: string = '';
  typesPokemon: string[] = [];
  altImgPokemon: string = '';

  
  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this.buscarPokemon();
  }
  
  buscarPokemon(){
    this.pokemonService.getPokemon(this.inputValue).subscribe({

      next: (value) => {
        this.namePokemon = value.name; // Passando o nome para a prop
        this.imgPokemon = value.sprites.front_default; // Passando a imagem para o prop
        this.typesPokemon= [];
        // Fazendo o forEach no array de objetos aninhados e pegando apenas o nome 
        value.types.forEach(objeto => {
          const _nameType = objeto.type.name;
          this.typesPokemon.push(_nameType);  // Inserindo o type Name na prop 
        });
        this.altImgPokemon = `Pokemon ${this.namePokemon}`
      },

      error: (err) => console.log(err),

      complete: () => console.log(' "COMPLETE" SOLICITAÇÃO COMPLETA'),
    })
    this.inputValue = '';
  }
  
}
