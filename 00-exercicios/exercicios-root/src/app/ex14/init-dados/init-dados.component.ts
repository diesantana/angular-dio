import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-dados',
  templateUrl: './init-dados.component.html',
  styleUrls: ['./init-dados.component.css']
})
export class InitDadosComponent implements OnInit {
  mensagem: string = '';
  constructor() { }

  ngOnInit(): void {
    this.mensagem = 'Bem vindo, Usuário!';
  }

}
