import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pro-client-modal',
  templateUrl: './pro-client-modal.component.html',
  styleUrls: ['./pro-client-modal.component.scss'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class ProClientModalComponent {
  constructor(public dialogRef: MatDialogRef<ProClientModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
