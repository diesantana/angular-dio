import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnInit, OnChanges {
  @Input() valor: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['valor']){
      const novoValor: number = changes['valor'].currentValue;
      const valorAnterior: number = changes['valor'].previousValue;
      console.log(`O valor atual é: ${novoValor}`);
      console.log(`O valor anterior é: ${valorAnterior}`);
    }
  }

}
