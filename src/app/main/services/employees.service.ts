import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IEmployesResponse } from 'app/shared/models/i-employes';
import { IEmployeesByGroupResponse, IGroupsResponse } from 'app/shared/models/i-groups';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IEmployesResponse>{
    return this.http.get<IEmployesResponse>(`${environment.API_URL}/employees/${environment.NAME}`);
  }

  saveUsers(employee: Employee): Observable<any>{
    return this.http.post<any>(`${environment.API_URL}/employees/${environment.NAME}`, employee);
  }

  getGroups(): Observable<IGroupsResponse>{
    return this.http.get<IGroupsResponse>(`${environment.API_URL}/groups/${environment.NAME}`);
  }

  getEmployeesByGroup(id: number): Observable<IEmployeesByGroupResponse>{
    return this.http.get<IEmployeesByGroupResponse>(`${environment.API_URL}/employees/${environment.NAME}/getByGroup?id=${id}`);
  }
}
