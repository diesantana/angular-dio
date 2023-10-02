import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    const conteudoInicial = document.querySelector('app-after-content')?.textContent;
    console.log(conteudoInicial);
  }

}
