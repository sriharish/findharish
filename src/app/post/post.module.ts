import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { CommentsComponent } from './comments/comments.component';

import { PostRoutingModule } from './post-routing.module'

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  declarations: [PostComponent, CommentsComponent]
})
export class PostModule { }
