import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MyPolicies, PoliciesLists, PolicyDetail } from '../interfaces/policies.interface';
import { environment } from '../../ environments/ environment';

@Injectable({
  providedIn: 'root',
})
export class Policy {
  constructor(private http: HttpClient) { }

  getAllPolicy = (): Observable<PoliciesLists[]> => {
    return this.http.get<PoliciesLists>(`${environment.apiUrl}policies`, { withCredentials: true }).pipe(map(res => res.getAllPolicy))
  }
  createPolicy = (data: any, id: string): Observable<any> => {
    return this.http.post(`${environment.apiUrl}policies/${id}/create-policy`, data, { withCredentials: true })

  }

  myPolicies = (): Observable<MyPolicies[]> => {
    return this.http.get<MyPolicies>(`${environment.apiUrl}policies/my-policy`, { withCredentials: true }).pipe(map(res => res.myPolicies))

  }

  policyById = (id: string): Observable<PolicyDetail> => {
    return this.http.get<PolicyDetail>(`${environment.apiUrl}policies/policy/${id}`, { withCredentials: true }).pipe(map(res => res.policyDetail))

  }
  updatePolicy = (id: string, data: any,): Observable<any> => {
    return this.http.patch(`${environment.apiUrl}policies/${id}/update`, data, { withCredentials: true })
  }

  totalPolicy = (): Observable<any> => {
    return this.http.get<any>(`${environment.apiUrl}policies/progress`, { withCredentials: true }).pipe(map(res => res.totalPolices))
  }
  downloadPolicy = (policyId: string): Observable<Blob> => {
    return this.http.get(`${environment.apiUrl}policies/${policyId}/download`, {
      responseType: 'blob',  // important!
      withCredentials: true
    });
  };


}
