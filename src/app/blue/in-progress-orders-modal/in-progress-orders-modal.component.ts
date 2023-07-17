import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-in-progress-orders-modal',
  templateUrl: './in-progress-orders-modal.component.html',
  styleUrls: ['./in-progress-orders-modal.component.scss']
})
export class InProgressOrdersModalComponent {
  constructor(public dialogRef: MatDialogRef<InProgressOrdersModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
