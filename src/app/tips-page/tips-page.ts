import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../service/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tips-page',
  imports: [],
  templateUrl: './tips-page.html',
  styleUrl: './tips-page.css',
})
export class TipsPage {
  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) {

  }
  loggedIn!: Observable<any>

  ngOnInit() {
    this.loggedIn = this.auth.checkToken
  }
  onExploreClaims() {
    this.auth.checkToken.subscribe(isLoggedIn => {
      if (isLoggedIn) {

        this.router.navigate(['/quote']);
      } else {

        this.snackBar.open(
          'Please create an account or login to explore policies',
          'Login',
          {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['snackbar-warning']
          }
        );

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 300);
      }
    });
  }

}
