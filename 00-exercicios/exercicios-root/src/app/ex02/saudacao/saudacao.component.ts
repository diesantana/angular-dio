import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saudacao',
  templateUrl: './saudacao.component.html',
  styleUrls: ['./saudacao.component.css']
})
export class SaudacaoComponent implements OnInit {

  @Input() nome: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
