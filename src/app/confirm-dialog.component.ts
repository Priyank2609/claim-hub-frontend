import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="dialog-container">
      <h2 class="dialog-title">Confirm Action</h2>
      <p class="dialog-message">{{ data.message }}</p>

      <div class="dialog-actions">
        <button mat-button class="cancel-btn" (click)="onCancel()">Cancel</button>
        <button mat-button color="primary" class="confirm-btn" (click)="onConfirm()">Confirm</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirm-dialog.css']
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
