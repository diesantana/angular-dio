import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, 
    pathMatch: 'full',
  },
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
