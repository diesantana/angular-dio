import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.contador ++;
  }


}
