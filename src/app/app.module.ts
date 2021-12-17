import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './composant/register/register.component';
import { LoginComponent } from './composant/login/login.component';
import { NavbarComponent } from './composant/navbar/navbar.component';
import { RegionComponent } from './composant/region/region.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { IndexComponent } from './composant/index/index.component';
import { DepartementComponent } from './composant/departement/departement.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    RegionComponent,
    IndexComponent,
    DepartementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
