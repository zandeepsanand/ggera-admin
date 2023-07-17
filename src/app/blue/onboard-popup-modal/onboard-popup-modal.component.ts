import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-onboard-popup-modal',
  templateUrl: './onboard-popup-modal.component.html',
  styleUrls: ['./onboard-popup-modal.component.scss']
})
export class OnboardPopupModalComponent {
  constructor(public dialogRef: MatDialogRef<OnboardPopupModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
