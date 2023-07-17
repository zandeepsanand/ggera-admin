import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-timer-modal',
  templateUrl: './timer-modal.component.html',
  styleUrls: ['./timer-modal.component.scss']
})
export class TimerModalComponent {
  constructor(public dialogRef: MatDialogRef<TimerModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
