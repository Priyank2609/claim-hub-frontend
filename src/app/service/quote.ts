import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../ environments/ environment';
import { AllQuotes } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root',
})
export class Quotes {
  constructor(private http: HttpClient) { }

  createQuote = (data: any): Observable<any> => {
    return this.http.post(`${environment.apiUrl}quotes/create-qoute`, data, { withCredentials: true })

  }

  getQuote = (): Observable<AllQuotes[]> => {
    return this.http.get<AllQuotes>(`${environment.apiUrl}quotes`, { withCredentials: true }).pipe(map(res => res.quotes))
  }
}
