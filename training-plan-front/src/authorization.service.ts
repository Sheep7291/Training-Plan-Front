import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private apiUrl ="http://localhost:8080/api";
  private authorizationCookie = '';
  private http = inject(HTMLTableCellElement);
  constructor() { }

}
