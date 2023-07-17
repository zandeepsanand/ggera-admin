import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-one-one-session-more-modal',
  templateUrl: './one-one-session-more-modal.component.html',
  styleUrls: ['./one-one-session-more-modal.component.scss']
})
export class OneOneSessionMoreModalComponent {
  constructor(public dialogRef: MatDialogRef<OneOneSessionMoreModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
