import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit, AfterViewInit {
  @ViewChild('fotoLegal', {static: false}) fotoLegal: ElementRef | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe( fragmento => {
      if(fragmento === 'fotoLegal' && this.fotoLegal){
        this.fotoLegal.nativeElement.scrollIntoView({ behavior: 'smooth'});
      }
    })
  }  

}
