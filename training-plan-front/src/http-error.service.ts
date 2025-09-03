import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  formatError(error: HttpErrorResponse) :string{
    return this.httpErrorFormattter(error)
  }

  constructor() { }

  private httpErrorFormattter(err: HttpErrorResponse): string {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.statusText}`;
    }
    return errorMessage;
  }
}
