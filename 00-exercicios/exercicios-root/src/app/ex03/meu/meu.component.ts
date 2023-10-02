import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu',
  templateUrl: './meu.component.html',
  styleUrls: ['./meu.component.css']
})
export class MeuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alerta(){
    alert('Botão clicado no Componente!');
  }


}
