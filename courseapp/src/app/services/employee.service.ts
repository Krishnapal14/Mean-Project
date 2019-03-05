import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Emp } from '../models/emp/emp';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   url0 = 'http://localhost:9999/emp/empJson';
    url = 'http://localhost:9999/emp';
  constructor(private httpClient: HttpClient) { }

  getEmpInfo() {
    console.log( 'Employee Service Method' );
    this.httpClient.get(this.url).subscribe(data => console.log(data));
     }

  getEmpInfoDb(): Observable<Emp[]>{
    return this.httpClient.get<Emp[]>(this.url0);
  }

  storeEmpInfoDb(userInfo): Observable<string> {
    return this.httpClient.post(this.url + '/empDbStore', userInfo,
    {responseType: 'text'});
  }

  }
