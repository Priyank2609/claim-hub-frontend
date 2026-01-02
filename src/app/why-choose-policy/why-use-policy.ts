import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-why-use-policy',
  imports: [],
  templateUrl: './why-use-policy.html',
  styleUrl: './why-use-policy.css',
})
export class WhyUsePolicy {
  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) {

  }
  loggedIn!: Observable<any>

  ngOnInit() {
    this.loggedIn = this.auth.checkToken
  }
  onExplorePolicies() {
    this.auth.checkToken.subscribe(isLoggedIn => {
      if (isLoggedIn) {

        this.router.navigate(['/policies']);
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
