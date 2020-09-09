import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ScrollTabComponent } from './scroll-tab/scroll-tab.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ScrollTabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
