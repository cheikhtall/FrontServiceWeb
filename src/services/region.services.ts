
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Region} from "../app/model/region.model";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class RegionServices{
  private serveur = "http://localhost:5000/api/region";
  constructor(private http:HttpClient) {}

  listeRegions():Observable<Region[]>{
    return this.http.get<Region[]>(this.serveur, {

      headers: this.authorizationHeaders,
      observe: 'body',
    });

  }

  get authorizationHeaders() {
    return {
      accept: 'application/json',
      'content-type': 'application/json',

    };
  }
}
