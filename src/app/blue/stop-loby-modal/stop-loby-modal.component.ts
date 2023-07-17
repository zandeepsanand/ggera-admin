import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-loby-modal',
  templateUrl: './stop-loby-modal.component.html',
  styleUrls: ['./stop-loby-modal.component.scss']
})
export class StopLobyModalComponent {
  constructor(public dialogRef: MatDialogRef<StopLobyModalComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
