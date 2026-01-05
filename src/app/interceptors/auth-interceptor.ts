import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Auth } from '../service/auth';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401 || error.status === 403) {

          this.auth.logoutUser();
          this.router.navigate(['/']);
        }

        return throwError(() => error);
      })
    );
  }
}
