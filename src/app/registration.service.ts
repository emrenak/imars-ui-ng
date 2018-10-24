import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { LoginService } from './login.service';

const registerEndpoint = 'http://localhost:8084/registration/user'; //via zuul gw 
const loginEndPoint = 'http://localhost:8084/login/member'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registerUrl:string;
  
  constructor(private http: HttpClient,
  	private loginService: LoginService) { }

   public register (username, email, password){
	 this.registerUrl = registerEndpoint + "/register?email="+email+"&password="+password;
	 console.log(this.registerUrl);
	 // add to registration collection
	 this.http.get(this.registerUrl);
	 // for development purposes add also in members collection
	 return this.loginService.addMember(email,password);
   }

}
