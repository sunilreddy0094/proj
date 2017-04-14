import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SwapiComponentComponent} from "./swapi-component/swapi-component.component";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {SwapiPersonComponentComponent} from "./swapi-component/swapi-person-component/swapi-person-component.component"
const routes : Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'swapi', component:SwapiComponentComponent, children:[
    {path:':id', component:SwapiPersonComponentComponent}
  ]},
  {path:'login', component:LoginComponentComponent},

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
