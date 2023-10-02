import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-checked',
  templateUrl: './view-checked.component.html',
  styleUrls: ['./view-checked.component.css']
})
export class ViewCheckedComponent implements OnInit, AfterViewChecked {

  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.contador++;
  }

}
