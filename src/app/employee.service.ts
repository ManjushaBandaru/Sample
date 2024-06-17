import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getemp(){
  
    return this.http.get('https://localhost:44383/api/Detailsemp')
  }
}
