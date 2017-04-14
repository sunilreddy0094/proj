import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {LoginService} from "./login.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']

})
export class LoginComponentComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  user:User;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {

  }

  login(form: NgForm){
    const data= form.value;
    console.log(data.username,data.password);
    this.user=this.loginService.getUser(data.username);
    if(data.password==this.user.password){
      console.log('login successful');
      this.router.navigate(['swapi']);
    }
  }
}
