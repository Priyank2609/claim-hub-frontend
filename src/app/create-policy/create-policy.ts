import { ChangeDetectorRef, Component } from '@angular/core';
import { Policy } from '../service/policy';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-policy',
  imports: [FormsModule],
  templateUrl: './create-policy.html',
  styleUrl: './create-policy.css',
})
export class CreatePolicy {
  constructor(private policy: Policy, private router: Router, private check: ChangeDetectorRef, private route: ActivatedRoute, private snackBar: MatSnackBar) { }
  isModalOpen = false;
  successMessage = '';


  onCreate(form: any) {
    const quoteId = this.route.snapshot.params['id']
    const data = {
      policyNumber: form.value.policyNumber,
      policyType: form.value.policyType,
      coverageAmount: form.value.coverageAmount,
      premium: form.value.premium

    }

    this.policy.createPolicy(data, quoteId).subscribe({
      next: (res) => {
        this.successMessage = 'Policy created successfully 🎉';

        this.snackBar.open(this.successMessage, 'Clsoe', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-success'
        })
        this.router.navigate(['/']);
        this.check.markForCheck()



      },
      error: (err) => {
        this.snackBar.open(err.error.message || 'Failed to create policy', 'Clsoe', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-error'
        })
      }
    })
  }

}
