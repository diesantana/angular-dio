import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LivrosModule } from './livros/livros.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LivrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


