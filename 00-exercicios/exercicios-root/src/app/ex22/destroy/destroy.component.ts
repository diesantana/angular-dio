import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.css']
})
export class DestroyComponent implements OnInit, OnDestroy {

  mensagem: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mensagem = 'Componente destruído!';
  }

}
