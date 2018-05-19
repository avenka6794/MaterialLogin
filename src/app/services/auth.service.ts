import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {isNullOrUndefined} from 'util';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  msg: string;

  constructor(private firebaseAuth: AngularFireAuth, public snackBar: MatSnackBar, public router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.snackBar.open("Success!", "", {
          duration: 2000
        });
      })
      .catch(err => { 
        this.snackBar.open(err.message, "", {
          duration: 2000
        });
      });

  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        if(err.code == "auth/user-not-found"){
          this.msg = "Invalid Email, Please Register!"
        }else{
          this.msg = "Wrong Password!";
        }
        this.snackBar.open(this.msg, "", { duration: 2000});
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  getErrors() {
    return this.msg;
  }

  getName() {
    var temp = this.firebaseAuth.auth.currentUser;
    return temp.email;
  }

  checkLogin():any{
   return this.firebaseAuth.authState.map(auth => {
     if(isNullOrUndefined(auth)){
       this.router.navigate(['/login']);
     }else{
       return true;
     }
   });
  }

}