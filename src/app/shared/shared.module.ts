import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideComponent } from './slide-show/slide/slide.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, HeaderComponent, FooterComponent, SlideShowComponent, SlideComponent, PaginationComponent],
  exports: [NavComponent, HeaderComponent, FooterComponent, SlideShowComponent, SlideComponent, PaginationComponent]
})
export class SharedModule { }
