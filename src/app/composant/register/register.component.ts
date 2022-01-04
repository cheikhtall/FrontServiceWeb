import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Elector} from "../../model/elector.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  electeur: Elector = new Elector();


  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      cni: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      address: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      bureau_id: [null, Validators.required],
      commune_id: [null, Validators.required]
    });
  }

  submitForm():  void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  Inscription()
  {
    // @ts-ignore
    this.http.post("http://127.0.0.1:5000/api/elector/register",this.electeur,{
      headers:{
        "accept": "application/json",
        "content-type":"application/json"
      }
    }).subscribe({
      next: res => {
        console.log(res)

        alert ('Enregistré avec succes')
      },
      error: error => {
        console.log(error)
      }
    })

  }

}
