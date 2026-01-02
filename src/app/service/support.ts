import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../ environments/ environment';

@Injectable({
  providedIn: 'root',
})
export class Supports {
  constructor(private http: HttpClient) {

  }

  getSupport = (data: any): Observable<any> => {
    return this.http.post(`${environment.apiUrl}supports/create`, data)
  }

}
