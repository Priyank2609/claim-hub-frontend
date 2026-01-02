import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../ environments/ environment';
import { map, Observable } from 'rxjs';
import { AllClaim, MonthItem, MonthlyClaimResponse, MyClaim, Summary } from '../interfaces/claim.interface';

@Injectable({
  providedIn: 'root',
})
export class Claim {
  constructor(private http: HttpClient) { }

  createClaim(data: any) {
    return this.http.post(`${environment.apiUrl}claims/create`, data, { withCredentials: true })
  }
  getMyClaim(): Observable<MyClaim[]> {
    return this.http.get<MyClaim>(`${environment.apiUrl}claims/my-claim`, { withCredentials: true }).pipe(map(res => res.claim))
  }
  getClaimById(id: string): Observable<MyClaim> {
    return this.http.get<MyClaim>(`${environment.apiUrl}claims/${id}`, { withCredentials: true }).pipe(map(res => res.claim))
  }
  getClaimSummary(): Observable<Summary> {
    return this.http.get<Summary>(`${environment.apiUrl}claims/summary`, { withCredentials: true }).pipe(map(res => res))
  }
  getAllClaims(): Observable<AllClaim[]> {
    return this.http.get<AllClaim>(`${environment.apiUrl}claims`, { withCredentials: true }).pipe(map(res => res.getAllClaim))
  }

  updataClaim(id: string, data: any): Observable<any> {
    return this.http.patch(`${environment.apiUrl}claims/update/${id}`, data, { withCredentials: true })
  }

  monthlyClaim(): Observable<MonthItem[]> {
    return this.http.get<MonthlyClaimResponse>(`${environment.apiUrl}claims/claim-month`, { withCredentials: true }).pipe(map(res => res.result))
  }



}
