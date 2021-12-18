import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./composant/index/index.component";
import {LoginComponent} from "./composant/login/login.component";
import {RegisterComponent} from "./composant/register/register.component";
import {RegionComponent} from "./composant/region/region.component";
import {DepartementComponent} from "./composant/departement/departement.component";
import {MapComponent} from "./composant/map/map.component";

const routes: Routes = [
  { path:"", component:IndexComponent },
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  { path:"region", component:RegionComponent},
  { path:"departement", component:DepartementComponent},
  { path:"carte", component:MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
