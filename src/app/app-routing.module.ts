import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: '/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: '/about.module#AboutModule'
  },
  {
    path: 'blog',
    loadChildren: '/blog.module#BlogModule'
  },
  {
    path: 'contact',
    loadChildren: '/contact.module#ContactModule'
  },
  {
    path: 'post',
    loadChildren: '/post.module#PostModule'
  },
  {
    path: 'work',
    loadChildren: '/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
