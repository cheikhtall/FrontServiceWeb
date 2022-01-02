import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PopUpServices {
  capitals: string = "http://localhost:5000/api/map/region";

  constructor(private http: HttpClient,
              ) {
  }

  makeRegionPopup(data: any){
    return (
      `<div>Régon: ${ this.capitals[data] }</div>`)

  }

  get authorizationHeaders() {
    return {
      accept: 'application/json',
      'content-type': 'application/json',

    };

  }
}
