import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './ex06/calculadora/calculadora.component';
import { EventoComponent } from './ex07/evento/evento.component';
import { CheckboxComponent } from './ex08/checkbox/checkbox.component';
import { BindComponent } from './ex09/bind/bind.component';
import { RadioComponent } from './ex10/radio/radio.component';
import { SimpleComponent } from './ex01/simple/simple.component';
import { SaudacaoComponent } from './ex02/saudacao/saudacao.component';
import { MeuComponent } from './ex03/meu/meu.component';
import { ListaItensComponent } from './ex04/lista-itens/lista-itens.component';
import { ContadorComponent } from './ex05/contador/contador.component';
import { TextareaComponent } from './ex11/textarea/textarea.component';
import { FundoStyleComponent } from './ex12/fundo-style/fundo-style.component';
import { BindClassComponent } from './ex13/bind-class/bind-class.component';
import { InitDadosComponent } from './ex14/init-dados/init-dados.component';
import { ChangesComponent } from './ex15/changes/changes.component';
import { ObjChangesComponent } from './ex16/obj-changes/obj-changes.component';
import { DoCheckComponent } from './ex17/do-check/do-check.component';
import { AfterContentComponent } from './ex18/after-content/after-content.component';
import { CheckedComponent } from './ex19/checked/checked.component';
import { ViewInitComponent } from './ex20/view-init/view-init.component';
import { ViewCheckedComponent } from './ex21/view-checked/view-checked.component';
import { DestroyComponent } from './ex22/destroy/destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    EventoComponent,
    CheckboxComponent,
    BindComponent,
    RadioComponent,
    SimpleComponent,
    SaudacaoComponent,
    MeuComponent,
    ListaItensComponent,
    ContadorComponent,
    TextareaComponent,
    FundoStyleComponent,
    BindClassComponent,
    InitDadosComponent,
    ChangesComponent,
    ObjChangesComponent,
    DoCheckComponent,
    AfterContentComponent,
    CheckedComponent,
    ViewInitComponent,
    ViewCheckedComponent,
    DestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
