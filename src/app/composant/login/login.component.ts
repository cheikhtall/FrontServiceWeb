import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginServices} from "../../../services/login.services.";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  wrongCredentials = false;
  constructor(private loginService: LoginServices,
              private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.wrongCredentials = false;
    this.loginService.login(this.username, this.password).subscribe(resultat=>{
      this.router.navigate(['/']);
    })
  }
}
