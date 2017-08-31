import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { HeadlinePostComponent } from './headline-post/headline-post.component';
import { RecentPostComponent } from './recent-post/recent-post.component';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, HeadlinePostComponent, RecentPostComponent]
})
export class BlogModule { }
