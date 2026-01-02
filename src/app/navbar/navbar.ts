import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  isToggle: boolean = false;
  isLoggin!: Observable<any>;
  isMobile: boolean = false;
  role$!: Observable<String>

  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isLoggin = this.auth.checkToken;
    this.role$ = this.auth.checkRole
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) this.isToggle = false;
  }

  isOpen() {
    this.isToggle = !this.isToggle;
  }

  logout() {
    this.auth.logout().subscribe({
      next: (res) => {
        this.auth.logoutUser();
        this.snackBar.open("Logout successfully", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['/']);
        this.isToggle = false;
      },
      error: (err) => {

        this.snackBar.open(err.error.message || "Failed to logout", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-error'
        })
        console.log(err.error.message)
      }
    });
  }
}
