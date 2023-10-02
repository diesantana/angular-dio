import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo-style',
  templateUrl: './fundo-style.component.html',
  styleUrls: ['./fundo-style.component.css']
})
export class FundoStyleComponent implements OnInit {
  destacarFundo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  alternarFundo(){
    this.destacarFundo = !this.destacarFundo;
  }

}
