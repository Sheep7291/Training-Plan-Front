import { Routes } from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {InjuryListComponent} from '../injury-list/injury-list.component';
import {HomeComponent} from '../home/home.component';
import {LandingPageComponent} from '../landing-page/landing-page.component';

export const routes: Routes = [

  {path: 'home', component: HomeComponent,
  children: [
    {path: 'injuries', component: InjuryListComponent },
  ]},
  {path: '', component: LandingPageComponent,
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]},
];
