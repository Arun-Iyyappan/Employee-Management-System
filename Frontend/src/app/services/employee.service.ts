import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url  = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient ) { }

  getEmployeesList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url)
  }

  createEmployee(employee : Employee) : Observable<Object>{
    return this.httpClient.post(this.url , employee);
  }

  getEmployeeById(empId:number) : Observable<Employee>{
     return this.httpClient.get<Employee>(`${this.url}/:${empId}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<any>{
    return this.httpClient.put(`${this.url}/${id}`, employee);
  }

   deleteEmployeeById(empId : number) : Observable<Object>{
    return this.httpClient.delete(`${this.url}/${empId}`);
   }
}
