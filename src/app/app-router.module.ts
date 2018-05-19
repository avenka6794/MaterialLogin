import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from './router.guard';
import { AuthService } from './services/auth.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login/signup',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup/login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouterGuard]
  },
  { path: '',   
  redirectTo: 'signup', 
  pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      })
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRouterModule { }

