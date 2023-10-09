import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogadoComponent } from './components/logado/logado.component';
import { SaindoComponent } from './components/saindo/saindo.component';

const routes: Routes = [
  {path: 'conta', component: LogadoComponent},
  {path: '', redirectTo: '/conta', pathMatch: 'full'},
  {path: 'logout', component: SaindoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
