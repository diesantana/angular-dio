import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saindo',
  templateUrl: './saindo.component.html',
  styleUrls: ['./saindo.component.css']
})
export class SaindoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href = 'https://www.google.com/intl/pt-BR/account/about/'
    }, 1000);
  }

}
