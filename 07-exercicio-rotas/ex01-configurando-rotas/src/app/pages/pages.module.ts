import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContatoComponent
  ], exports: [
    HomeComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
