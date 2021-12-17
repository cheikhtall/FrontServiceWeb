import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../app/model/departement.model";

@Injectable({providedIn: "root"})
export class DepartementServices {
  private serveur = "http://localhost:5000/api/departement";
  constructor(private http:HttpClient) {}
  listeDepartements():Observable<Departement[]>{
    return this.http.get<Departement[]>(this.serveur, {
      headers: this.authorizationHeaders,
      observe: 'body',
    });
  }
  get authorizationHeaders(){
    return{
      accept: 'application.json',
      'content-type' : 'application.json'
    };
  }
}
