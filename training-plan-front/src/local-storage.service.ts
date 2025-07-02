import {Injectable} from '@angular/core';

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
    return localStorage.getItem(key)
  }

  removeItem(key:string) {
    localStorage.removeItem(key)
  }

  getItemsLenght() {
    return localStorage.length;
  }
}
