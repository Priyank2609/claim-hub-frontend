import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AllUser, UserDetail } from '../interfaces/auth.interface';
import { environment } from '../../ environments/ environment';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  URL = "http://localhost:3002/"
  constructor(private http: HttpClient) { }

  private loginCheck = new BehaviorSubject<boolean>(!!localStorage.getItem("Token"))
  checkToken = this.loginCheck.asObservable()



  private roleCheck = new BehaviorSubject<string>(this.getRole())
  checkRole = this.roleCheck.asObservable()


  private getRole(): string {
    const profile = localStorage.getItem("User");
    return profile ? JSON.parse(profile).role : ''

  }
  register = (data: any) => {
    return this.http.post(`${environment.apiUrl}users/register`, data, {
      withCredentials: true
    })
  }
  login = (data: any): Observable<any> => {
    return this.http.post(`${environment.apiUrl}users/login`, data, { withCredentials: true })
  }
  setLogin(token: any, user: any) {
    localStorage.setItem("User", JSON.stringify(user))
    localStorage.setItem("Token", JSON.stringify(token))
    this.loginCheck.next(true)
    this.roleCheck.next(user.role)

  }
  logoutUser() {
    localStorage.removeItem("User")
    localStorage.removeItem("Token")
    this.loginCheck.next(false)
    console.log(this.checkToken);

    this.roleCheck.next('')
  }
  logout() {
    return this.http.post(`${environment.apiUrl}users/logout`, '', { withCredentials: true })
  }
  userDetail(): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${environment.apiUrl}users/user-detail`, { withCredentials: true }).pipe(map(res => res.user))
  }
  userDetailById(id: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${environment.apiUrl}users/user-get/${id}`, { withCredentials: true }).pipe(map(res => res.user))
  }
  changePassword(data: any): Observable<any> {
    return this.http.patch(`${environment.apiUrl}users/change-password`, data, { withCredentials: true })
  }
  allUser = (): Observable<AllUser[]> => {
    return this.http.get<AllUser>(`${environment.apiUrl}users/all-user`, { withCredentials: true }).pipe(map(res => res.users))
  }
}
