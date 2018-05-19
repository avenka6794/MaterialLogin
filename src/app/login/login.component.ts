import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

    getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

   getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :       '';
  }

  onSubmit(email:string, password:string){
   this.authService.login(email, password);
  }


}

//http://demo.geekslabs.com/materialize-v1.0/user-login.html