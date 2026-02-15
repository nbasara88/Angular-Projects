import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Cmp1 } from './cmp1/cmp1';
import { Cmp2 } from './cmp2/cmp2';
import { Cmp3 } from './cmp3/cmp3';

@NgModule({
  declarations: [
    App,
    Navbar,
    Cmp1,
    Cmp2,
    Cmp3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
