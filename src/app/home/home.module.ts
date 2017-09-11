import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule, MdCardModule, MdFormFieldModule, MdIconModule, MdInputModule, MdProgressBarModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,
    MdTabsModule,
    MdFormFieldModule,
    MdInputModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
