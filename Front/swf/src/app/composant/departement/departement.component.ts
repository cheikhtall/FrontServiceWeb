import { Component, OnInit } from '@angular/core';
import {Departement} from "../../model/departement.model";
import {error} from "@angular/compiler/src/util";
import {HttpClient} from "@angular/common/http";
import {DepartementServices} from "../../../services/departement..services";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  departements : Departement[]| null=null;
  private isLoad: boolean | undefined;

  constructor(private departementService : DepartementServices) { }

  ngOnInit(): void {
    this.departementService.listeDepartements().subscribe( data=> {
      this.departements = data;
      this.isLoad = false;
      console.log(data)
    },

    error => {
      this.isLoad = false

    });
  }
}
