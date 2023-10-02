import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-init',
  templateUrl: './view-init.component.html',
  styleUrls: ['./view-init.component.css']
})
export class ViewInitComponent implements OnInit, AfterViewInit {
  mensagem: string = '';
  constructor() { }
  
  ngOnInit(): void {
    this.mensagem = 'Componente inicializado!';
  }

  ngAfterViewInit(): void {
  }

}
