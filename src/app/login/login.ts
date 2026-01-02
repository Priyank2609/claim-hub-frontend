import { ChangeDetectorRef, Component } from '@angular/core';
import { Auth } from '../service/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoggin: boolean = false
  showSuccessPopup: boolean = false

  constructor(private auth: Auth, private router: Router, private check: ChangeDetectorRef, private snackBar: MatSnackBar) { }


  onLogin = (form: any) => {

    const data = {
      email: form.value.email,
      password: form.value.password
    }

    // this.store.dispatch(userAction.loginUser({ data }))
    this.auth.login(data).subscribe({
      next: (res) => {
        console.log(res)

        this.auth.setLogin(res.token, res.emailExists)


        this.check.markForCheck()
        this.snackBar.open("Login Successful Welcome back to ClaimHub 🎉", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['/'])


      },
      error: (err) => {
        this.snackBar.open(err.error.message || "Failed to login", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-error'
        })
        console.log(err.error.message);

      }
    })
  }


}
