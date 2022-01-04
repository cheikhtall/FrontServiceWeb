import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../model/login.model";
import {LoginServices} from "../../../services/login.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean | undefined;
  validateForm!: FormGroup;
  login: Login= new Login();
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private loginService : LoginServices,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      cni: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  /* submitForm(value : any): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  } */

  connecter(user:any){
    this.loginService.login(user).subscribe((result: any) => {
      if (result)
        this.router.navigate(['/']);
      else
        this.invalidLogin = true;
    });
  }

}
