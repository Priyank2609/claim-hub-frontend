import { ChangeDetectorRef, Component } from '@angular/core';
import { Claim } from '../service/claim';

import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog.component'
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../service/auth';
@Component({
  selector: 'app-update-status',
  imports: [NgClass, AsyncPipe, DatePipe, NgIf, FormsModule,],
  templateUrl: './update-status.html',
  styleUrl: './update-status.css',
})
export class UpdateStatus {

  constructor(private claim: Claim, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private auth: Auth
    , private dialog: MatDialog) { }

  claimById!: Observable<any>
  remark: string = '';
  role!: Observable<String>

  ngOnInit() {
    this.role = this.auth.checkRole
    this.getClaim()
  }
  getClaim() {
    const claimId = this.route.snapshot.params['id']
    this.claimById = this.claim.getClaimById(claimId)
  }


  onUpdate(data: any) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to update this claim status?' },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;


      const claimId = this.route.snapshot.params['id'];
      this.claim.updataClaim(claimId, data).subscribe({
        next: (res) => {
          this.remark = '';

          console.log(res);

          this.snackBar.open(
            `Claim #${res.claimById.claimNumber} status updated to ${res.claimById.status}`,
            'Close',
            { duration: 4000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: 'snackbar-success' }
          );

          this.router.navigate(['/claims'])



        },
        error: (err) => {
          this.snackBar.open(err.error.message || 'Failed to update claim', 'Close', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: "snackbar-error" });
          console.error(err);
        },
      });
    });
  }

}
