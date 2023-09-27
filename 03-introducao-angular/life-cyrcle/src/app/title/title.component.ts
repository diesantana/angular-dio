import { Component, Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnChanges {

  @Input() valor: string = '';

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valor']) {
      const novoValor = changes['valor'].currentValue;
      const valorAnterior = changes['valor'].previousValue;
      console.log(`O valor de entrada mudou de "${valorAnterior}" para "${novoValor}"`);
    }
  }
  
}



