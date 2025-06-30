import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  clear(){
    localStorage.clear()
  }

  setItem(key:string, value: any) {
    localStorage.setItem(key, value);
  }

  getItem(key:string) {
    const data = localStorage.getItem(key)
    return data
  }

  removeItem(key:string) {
    localStorage.removeItem(key)
  }
}
