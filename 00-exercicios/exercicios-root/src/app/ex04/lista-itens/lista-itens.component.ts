import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {
  @Input() lista: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
