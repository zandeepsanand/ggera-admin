import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-completed-order-modal',
  templateUrl: './completed-order-modal.component.html',
  styleUrls: ['./completed-order-modal.component.scss']
})
export class CompletedOrderModalComponent {
  constructor(public dialogRef: MatDialogRef<CompletedOrderModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
