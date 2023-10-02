import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.css']
})
export class DiretivasAtributoComponent implements OnInit {
  estilo: string = 'disable';
  tamanhoFont: number = 2.5;
  corFunto: string = 'green';
  item: string = '';
  lista: string[] = [];
  mostrarElemento: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === 'enable'){
      this.estilo = 'disable';
    }else{
      this.estilo = 'enable';
    }
  }

  adicionar(){
    this.lista.push(this.item);
  }

}
