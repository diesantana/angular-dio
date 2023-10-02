import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-obj-changes',
  templateUrl: './obj-changes.component.html',
  styleUrls: ['./obj-changes.component.css']
})
export class ObjChangesComponent implements OnInit, OnChanges {
  @Input() pessoa = { name: 'Bob', age: 23}; 


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const pessoaAutual = changes['pessoa'].currentValue;
    console.log(`Nome: ${pessoaAutual.name}`);
    console.log(`Idade: ${pessoaAutual.age}`);
  }

}
