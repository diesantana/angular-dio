import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( parametro => {
      const paramsId = parametro['id'];
      console.log(`ID do produto: ${paramsId}`);
    })
   }

  ngOnInit(): void {
    
  }

}
