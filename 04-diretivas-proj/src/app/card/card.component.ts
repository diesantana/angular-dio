import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  exibirConteudo: boolean = true;
  frutas: string[] = ["maça", 'banana', 'pera'];

  typeUser: string = 'user'; 

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.frutas.push('Outra Fruta');
  }
  remover(){
    this.frutas.pop();
  }
}


