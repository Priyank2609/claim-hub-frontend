import { Component } from '@angular/core';
import { Auth } from '../service/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private auth: Auth, private router: Router, private snackBar: MatSnackBar) { }

  register = (form: any) => {
    const data = {
      email: form.value.email,
      password: form.value.password,
      userName: form.value.userName,
      role: form.value.role,
      dateOfBirth: form.value.dateOfBirth || null,
      gender: form.value.gender || null,
      maritalStatus: form.value.maritalStatus || null,
      phone: form.value.phone,

      address: {
        street: form.value['address.street'] || '',
        city: form.value['address.city'] || '',
        state: form.value['address.state'] || '',
        country: form.value['address.country'] || '',
        postalCode: form.value['address.postalCode'] || ''
      }
    }

    this.auth.register(data).subscribe({
      next: (res) => {
        console.log(res);

        this.snackBar.open("Your account has created now please login", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['login'])

      },
      error: (err) => {
        this.snackBar.open(err.error.message || "Failed to create account", "Close", {
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
