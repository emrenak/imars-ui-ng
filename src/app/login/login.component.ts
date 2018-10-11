import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  constructor(public loginService:LoginService, private route: ActivatedRoute, private router: Router) { }
  
  login() {
  	console.log("logging in");
    this.loginService.login();
  }

}
