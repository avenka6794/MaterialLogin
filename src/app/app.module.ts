import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterGuard } from './router.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AppRouterModule } from './app-router.module';

import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouterModule, BrowserAnimationsModule, AngularFireAuthModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatSnackBarModule,  AngularFireModule.initializeApp({
     apiKey: "**********",
    authDomain: "**********",
    databaseURL: "**********",
    projectId: "**********",
    storageBucket: "**********",
    messagingSenderId: "**********"
  }) ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, RouterGuard]
})
export class AppModule { }
