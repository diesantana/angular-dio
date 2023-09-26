// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mensagem: string = 'Olá Mundo';
  textoBotao: string = 'Clique em mim';
  nome: string = 'Bob';
}

