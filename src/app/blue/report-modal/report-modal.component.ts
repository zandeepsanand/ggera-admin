import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})
export class ReportModalComponent {
  constructor(public dialogRef: MatDialogRef<ReportModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
