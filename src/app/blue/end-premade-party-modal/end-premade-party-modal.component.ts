import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-end-premade-party-modal',
  templateUrl: './end-premade-party-modal.component.html',
  styleUrls: ['./end-premade-party-modal.component.scss']
})
export class EndPremadePartyModalComponent {
  constructor(public dialogRef: MatDialogRef<EndPremadePartyModalComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
