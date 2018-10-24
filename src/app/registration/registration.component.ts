import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


    constructor( 
    public registrationService:RegistrationService,
  	private route: ActivatedRoute, 
  	private router: Router) { }

  register(username,email, pwd):void {
    this.registrationService.register(username,email,pwd).subscribe(data => {
      console.log("Register succeeded");
      this.router.navigate(['/login']);
     }, error => {
       console.log("Register failed");
     }); ;
  }

}
