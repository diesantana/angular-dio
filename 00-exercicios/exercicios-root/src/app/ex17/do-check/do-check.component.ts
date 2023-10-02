import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements OnInit, DoCheck {
  @Input() valor: number = 0;
  valorAnterior: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(this.valorAnterior !== this.valor){
      console.log(`Valor atual: ${this.valor} `);
      console.log(`Valor anteior: ${this.valorAnterior} `);
      this.valorAnterior = this.valor;
    }
  }

}
