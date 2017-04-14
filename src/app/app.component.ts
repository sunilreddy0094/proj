import { Component } from '@angular/core';
import {LoginService} from "./login-component/login.service";
import {SwapiService} from "./swapi-component/swapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService,SwapiService]
})
export class AppComponent {
  title = 'app works!';
}
