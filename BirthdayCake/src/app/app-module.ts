import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './Components/home/home';
import { Task } from './Components/task/task';
import { Tasks } from './Components/tasks/tasks';
import { Navbar } from './Components/navbar/navbar';


@NgModule({
  declarations: [
    App,
    Home,
    Task,
    Tasks,
    Navbar
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
