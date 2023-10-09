import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './components/pagina/pagina.component';

const routes: Routes = [
  {path: 'pagina', component: PaginaComponent},
  {path: '', redirectTo: '/pagina', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
