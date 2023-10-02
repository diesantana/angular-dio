import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-class',
  templateUrl: './bind-class.component.html',
  styleUrls: ['./bind-class.component.css']
})
export class BindClassComponent implements OnInit {
  estilo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alterarEstilo(): void{
    this.estilo = !this.estilo;
  }

}
