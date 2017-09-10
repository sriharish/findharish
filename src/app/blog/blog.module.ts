import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { HeadlinePostComponent } from './headline-post/headline-post.component';
import { RecentPostComponent } from './recent-post/recent-post.component';

import { BlogRoutingModule } from './blog-routing.module';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule
  ],
  declarations: [BlogComponent, HeadlinePostComponent, RecentPostComponent]
})
export class BlogModule { }
