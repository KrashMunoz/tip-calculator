import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalcForm } from './calc-form';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  _url = '';
  constructor(private _http: HttpClient) { }

  calculate(calcForm: CalcForm) {
    this._http.post<any>(this._url, calcForm);
  }
}
