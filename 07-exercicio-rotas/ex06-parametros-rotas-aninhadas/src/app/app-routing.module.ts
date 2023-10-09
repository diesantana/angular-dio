import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent, children:[{path: 'post/:id', component: PostComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
