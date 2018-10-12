import { Component,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent{ 

  constructor(public loginService:LoginService, 
  	private route: ActivatedRoute, 
  	private router: Router) { }

  login(username, pwd):void {
    this.loginService.login(username,pwd);
    // then, navigate to profile page
    
  }

  register():void {
 	console.log("register");
    this.router.navigate(['/register']);
  }

 
}
