import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-one-one-session-report-modal',
  templateUrl: './one-one-session-report-modal.component.html',
  styleUrls: ['./one-one-session-report-modal.component.scss']
})
export class OneOneSessionReportModalComponent {
  constructor(public dialogRef: MatDialogRef<OneOneSessionReportModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
