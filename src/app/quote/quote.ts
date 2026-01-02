import { Component } from '@angular/core';
import { Quotes } from '../service/quote';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-quote',
  imports: [FormsModule, NgIf],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  constructor(private quote: Quotes, private router: Router, private snackBar: MatSnackBar) { }

  // onCreate(form: any) {
  //   const data = {
  //     message: form.value.message,
  //     policyType: form.value.policyType
  //   }

  //   this.quote.createQuote(data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.router.navigate(['/'])

  //     },
  //     error: (err) => {
  //       console.log(err.error.message);

  //     }
  //   })
  // }
  onCreate(form: any) {
    const data = {
      message: form.value.message,
      policyType: form.value.policyType
    };

    this.quote.createQuote(data).subscribe({
      next: (res) => {
        console.log(res);
        this.snackBar.open('Quote created successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snackbar-success']

        });

        this.router.navigate(['/my-dashboard']);
      },
      error: (err) => {
        this.snackBar.open(err.error.message || 'Failed to create quote', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snackbar-error']

        });
        console.log(err.error.message);
      }
    });
  }

}
