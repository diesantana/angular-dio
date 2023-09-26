import { Component, OnInit } from '@angular/core';


@Component({
    // Nome da tag que representa o componente
    selector: 'menu-component',
    // Arquivo HTML que define o template do componente
    templateUrl: './menu.component.html',
    //  Arquivos CSS que definem os estilos do componente
    styleUrls: ['./menu.component.css']
})

// export class MenuComponent{}

export class MenuComponent implements OnInit {
    // Propriedades e métodos do componente aqui
    constructor() { }
  
    ngOnInit() {
      // Lógica a ser executada quando o componente é inicializado
    }
}
  