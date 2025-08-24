import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Injury} from './entities/injury';
import {TrainingPlan} from './entities/training-plan';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingPlanApiService {
  private localStorage = inject(LocalStorageService)
  private apiUrl = "http://localhost:8080/api";
  private authorizationHeader = '';
  private http = inject(HttpClient);
  private router = inject(Router);
  private userRoles: string = ''
  private username = "";

  constructor() {
  }

  login(username: string, password: string) {
    let crypt = btoa(username + ':' + password)
    let authorizationHeader = 'Basic ' + crypt;
    this.authorizationHeader = authorizationHeader;
    this.username = username;
    return this.http
      .get(`${this.apiUrl}/users/check-if-user-is-logged`,
        {
          headers: {
            Authorization: authorizationHeader,
          }
        })
  }

  addAuthorizationheader() {
    this.localStorage.setItem('AuthorizationHeader', this.authorizationHeader);
  }

  addUsername(){
    this.localStorage.setItem('Username', this.username)
  }

  addRoles(){
    localStorage.setItem('Roles', this.userRoles)
  }

  getUserRolesFromApi(): Observable<String> {
    return this.http.get<String>(`${this.apiUrl}/users/get-self-roles`, {
      headers:
        {
          Authorization: localStorage.getItem('AuthorizationHeader')!.toString()
        }
    })
  }

  getUserRoles(): string {
    return this.userRoles
  }

  getInjuries(): Observable<Injury[]> {
    const params = new HttpParams()
      .set('username', localStorage.getItem('Username')!.toString())
    return this.http.get<Injury[]>(`${this.apiUrl}/injuries`, {
      headers:
        {
          Authorization: localStorage.getItem('AuthorizationHeader')!.toString()
        }
      , params: params
    });
  }

  logout() {
    localStorage.clear();
  }

  getMyTrainingPlans(): Observable<TrainingPlan[]> {
    return this.http.get<TrainingPlan[]>(`${this.apiUrl}/training-plans`, {
      headers:
        {
          Authorization: localStorage.getItem('AuthorizationHeader')!.toString()
        }
    })
  }

  getTodayTrainingPlan(): Observable<TrainingPlan> {
    return this.http.get<TrainingPlan>(`${this.apiUrl}/training-plans`, {
      headers:
        {
          Authorization: localStorage.getItem('AuthorizationHeader')!.toString()
        }
    })

  }

  setUserRoles() {
    this.getUserRolesFromApi().subscribe(
      {
        next: (roles) => {
          this.userRoles = (roles as any).message;
          console.log(this.userRoles.toString())
          localStorage.setItem('UserRoles', this.userRoles.toString());
        }
      }
    );
  }

  register(username: string, password: string) {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get<String>(`${this.apiUrl}/users/register`, {
      params: params
    })

  }

  getInjuriesByUsername(username: string):Observable<Injury[]> {
    const  params = new HttpParams()
      .set('username', username)
    return this.http.get<Injury[]>(`${this.apiUrl}/injuries`, {
      headers:
        {
          Authorization: localStorage.getItem('AuthorizationHeader')!.toString()
        }
      , params: params
    });
  }
}
