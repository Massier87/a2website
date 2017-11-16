import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar.component';
import {JumbotronComponent} from './Components/jumbotron/jumbotron.component';
import {AboutComponent} from './Components/pages/about.component';
import {HomeComponent} from './Components/pages/home.component';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
