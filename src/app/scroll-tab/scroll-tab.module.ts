import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTabComponent } from './scroll-tab.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollTabComponent
  ],
  exports:[ScrollTabComponent]
})
export class ScrollTabModule { }