import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlideComponent } from './slide-show/slide/slide.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MaterialModule, MdListModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, MaterialModule, MdToolbarModule, MdSidenavModule, MdListModule, RouterModule
  ],
  declarations: [NavComponent, FooterComponent, SlideShowComponent, SlideComponent, PaginationComponent],
  exports: [NavComponent, FooterComponent, SlideShowComponent, SlideComponent, PaginationComponent]
})
export class SharedModule {

  constructor (@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
