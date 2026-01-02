import { ChangeDetectorRef, Component } from '@angular/core';
import { Policy } from '../service/policy';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../service/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-assign-policy',
  imports: [AsyncPipe, DatePipe, NgIf, NgClass, FormsModule],
  templateUrl: './assign-policy.html',
  styleUrl: './assign-policy.css',
})
export class AssignPolicy {

  constructor(private policy: Policy, private route: ActivatedRoute, private check: ChangeDetectorRef, private auth: Auth, private snackBar: MatSnackBar) { }

  policyDetail!: Observable<any>

  policyData: any;
  role!: Observable<String>

  editForm = false
  ngOnInit() {

    this.getPolicy()
    this.policyDetail.subscribe((res) => {
      this.policyData = res
    })
    console.log(this.policyDetail);
    this.role = this.auth.checkRole

  }
  getPolicy() {
    const policyId = this.route.snapshot.params['id']
    this.policyDetail = this.policy.policyById(policyId)
  }
  form: any = {
    policyType: '',
    coverageAmount: '',
    premium: '',

  }
  enableEdit() {
    this.check.markForCheck()
    this.form = {
      policyType: this.policyData.policyType,
      premium: this.policyData.premium,
      coverageAmount: this.policyData.coverageAmount,

    };

    this.editForm = true;
    console.log('enable', this.editForm);

  }

  closeEdit = () => {
    this.editForm = false
  }

  updatePolicy = () => {
    const policyId = this.route.snapshot.params['id'];


    this.policy.updatePolicy(policyId, this.form).subscribe({
      next: (res) => {
        console.log(res);

        this.getPolicy()
        this.policy.policyById(policyId).subscribe((updatedPolicy) => {
          this.policyData = updatedPolicy;
          this.editForm = false;
          this.check.markForCheck();
          this.snackBar.open("Policy updated successfully", 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'snackbar-success'
          })
        });
      },
      error: (err) =>

        this.snackBar.open(err.error.meaasge || "Failed to update policy", 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'snackbar-error'
        })

    });
  }

}
