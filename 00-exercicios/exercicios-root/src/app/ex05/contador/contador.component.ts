import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Input() contagem: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(){
    this.contagem += 1;
  }

  subtrair(){
    this.contagem -= 1;
  }
}
