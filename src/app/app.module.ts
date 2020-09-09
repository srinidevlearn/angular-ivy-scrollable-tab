import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollTabModule } from './scroll-tab/scroll-tab.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ScrollTabModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
