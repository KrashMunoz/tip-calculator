import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CalcForm } from './calc-form';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  _url = 'http://localhost:3000/calculate';
  constructor(private _http: HttpClient) { }

  calculate(calcForm: CalcForm) {
    return this._http.post<any>(this._url, calcForm)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
