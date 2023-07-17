import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-star-reviews-modal',
  templateUrl: './star-reviews-modal.component.html',
  styleUrls: ['./star-reviews-modal.component.scss']
})
export class StarReviewsModalComponent {
  constructor(public dialogRef: MatDialogRef<StarReviewsModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
