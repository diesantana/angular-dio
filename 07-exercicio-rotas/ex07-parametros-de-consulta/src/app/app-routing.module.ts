import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';

const routes: Routes = [
  {path: 'pesquisa', component: PesquisaComponent},
  {path: '', redirectTo: '/pesquisa', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
