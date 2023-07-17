import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reviews-modal',
  templateUrl: './reviews-modal.component.html',
  styleUrls: ['./reviews-modal.component.scss']
})
export class ReviewsModalComponent {
  constructor(public dialogRef: MatDialogRef<ReviewsModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
