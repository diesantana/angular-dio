import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent implements OnInit, AfterContentChecked {
  contador: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.contador++;
  }

}
