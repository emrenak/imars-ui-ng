import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8090/member';
const httpOptions = {
     headers: new HttpHeaders({
    '  Content-Type':  'application/json'
   })
  };

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginUrl:string;
  constructor(private http: HttpClient) { }

  public login (username, password) : void {
  	 this.loginUrl = endpoint + "/login?email="+username+"&password="+password;
     this.http.get(this.loginUrl).subscribe(data => {
     	console.log("logging succeeded");
     }, error => {
     	console.log("Error occured: " + error);
     });
  }

}
