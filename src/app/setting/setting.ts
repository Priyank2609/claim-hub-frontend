import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setting',
  imports: [NgIf, AsyncPipe, DatePipe, FormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) { }
  showPasswordForm: boolean = false;
  role$!: Observable<String>
  user!: Observable<any>
  ngOnInit(id: string) {
    this.role$ = this.auth.checkRole
    this.user = this.auth.userDetail(id)
  }

  onChangePassword(form: any) {
    const data = {
      password: form.value.password,
      newPassword: form.value.newPassword,
      confirmPassword: form.value.confirmPassword
    }

    this.auth.changePassword(data).subscribe({
      next: (res) => {
        this.snackBar.open("Password change successfully", "Close", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['/'])

      },
      error: (err) => {
        this.snackBar.open(err.error.message || "Failed to update password", "Close", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: 'top',
          panelClass: 'snackbar-error'
        })
      }
    })
  }


}
