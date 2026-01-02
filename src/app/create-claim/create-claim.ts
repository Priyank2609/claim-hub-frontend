import { Component } from '@angular/core';
import { Claim } from '../service/claim';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-claim',
  imports: [FormsModule, NgIf],
  templateUrl: './create-claim.html',
  styleUrl: './create-claim.css',
})
export class CreateClaim {

  constructor(private claim: Claim, private router: Router, private snackBar: MatSnackBar) { }

  onCreate(form: any) {
    const data = {
      claimAmount: form.value.claimAmount,
      claimType: form.value.claimType,
      policyNo: form.value.policyNo,
      reason: form.value.reason
    }
    this.claim.createClaim(data).subscribe({
      next: (res) => {
        console.log(res);

        this.snackBar.open("Claim created successfully!", 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['/my-dashboard'])

      },
      error: (err) => {
        this.snackBar.open(err.error.message || 'Failed to create claim', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-error'

        });
        console.log(err.error.message);

      }
    })

  }
}
