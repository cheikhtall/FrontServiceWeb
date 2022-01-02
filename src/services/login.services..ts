import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class LoginServices{
  serveur = "http://127.0.0.1:5000/api/elector/login";

  constructor(private http: HttpClient) {}

  login(pUsername:any, pPassword:any){
    const loginData = {
      username :pUsername,
      password : pPassword
    }
    return new Observable<boolean>((observer)=>{
      this.http.post(this.serveur, loginData).subscribe(resultat=>{
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    })
  }

}
