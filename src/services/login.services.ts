import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginServices{
  serveur = "http://127.0.0.1:5000/api/elector/login";

  constructor(private http: HttpClient) {}

  login(user:any){
    return this.http.post(this.serveur, JSON.stringify(user)).pipe(map((response : any) => {
      console.log(response)
      let result = response.json();
      if (result && result.token){
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
          }));
  }

}
