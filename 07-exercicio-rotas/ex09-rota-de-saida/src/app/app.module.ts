import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogadoComponent } from './components/logado/logado.component';
import { SaindoComponent } from './components/saindo/saindo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogadoComponent,
    SaindoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
