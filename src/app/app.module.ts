import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SwapiComponentComponent } from './swapi-component/swapi-component.component';
import {AppRoutingModule} from "./app.routing.module";
import { SwapiPersonComponentComponent } from './swapi-component/swapi-person-component/swapi-person-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SwapiComponentComponent,
    SwapiPersonComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ReactiveFormsModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
