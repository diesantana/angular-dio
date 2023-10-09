import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ContatoComponent,
    HomeComponent
  ], exports: [
    ContatoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
