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
  private apiUrl ="http://localhost:8080/api";
  private authorizationHeader= '';
  private http = inject(HttpClient);
  private router = inject(Router);
  private userRoles: string = ''
  private username = "";
  constructor() { }

  login(username: string, password: string){
    let crypt = btoa(username +':' + password)
    let authorizationHeader = 'Basic ' + crypt;
    this.authorizationHeader = authorizationHeader;
    this.username = username;
    return this.http
      .get(`${this.apiUrl}/users/check-if-user-is-logged`,
        {headers: {
          Authorization: authorizationHeader,
          }})
  }

  addAuthorizationheader(AuthorizationHeader:string){
    localStorage.setItem('AuthorizationHeader',AuthorizationHeader);
  }

  getUserRoles():Observable<String>{
    return this.http.get<String>(`${this.apiUrl}/users/get-self-roles`, {headers:
        {
          Authorization: this.authorizationHeader
        }})
  }

  getInjuries(): Observable<Injury[]> {
    const params = new HttpParams()
      .set('username', this.username)
return this.http.get<Injury[]>(`${this.apiUrl}/injuries`, {headers:
    {
      Authorization: this.authorizationHeader
    }
      , params: params});
  }

  getMyTrainingPlans(): Observable<TrainingPlan[]> {
    return this.http.get<TrainingPlan[]>(`${this.apiUrl}/training-plans`, {headers:
    {
      Authorization: this.authorizationHeader
    }})
  }

  getTodayTrainingPlan(): Observable<TrainingPlan> {
    return this.http.get<TrainingPlan>(`${this.apiUrl}/training-plans`, {headers:
        {
          Authorization: this.authorizationHeader
        }})

  }

  setUserRoles(){
    this.getUserRoles().subscribe(
      {
        next: (roles) => {this.userRoles = (roles as any).message;
        console.log(this.userRoles.toString());}
      }
    );
  }
}
