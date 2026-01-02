import { Component } from '@angular/core';
import { Supports } from '../service/support';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support',
  imports: [FormsModule],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support {
  constructor(private supp: Supports, private snackBar: MatSnackBar, private router: Router) {

  }


  onSupport(form: any) {
    const data = {
      fullName: form.value.fullName,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    }
    this.supp.getSupport(data).subscribe({
      next: (res) => {
        this.snackBar.open(res.message, "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: "snackbar-success"
        })
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.snackBar.open(err.error.message || "Failed to get support", "Close", {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: "snackbar-error"
        })
      }
    })
  }

}
