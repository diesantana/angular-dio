import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  

  constructor() { }

  ngOnInit(): void {
  }


}
