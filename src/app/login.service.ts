import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8084/login/member'; //via zuul gw 
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
  loginAddUrl:string;
  constructor(private http: HttpClient) { }

  public login (username, password){
  	 this.loginUrl = endpoint + "/login?email="+username+"&password="+password;
     return this.http.get(this.loginUrl);
  }

  public addMember(email, password){
  	this.loginAddUrl = endpoint + "/add?email="+email+"&password="+password;
  	return this.http.get(this.loginAddUrl);
  }

}
