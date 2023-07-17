import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pro-player-modal',
  templateUrl: './pro-player-modal.component.html',
  styleUrls: ['./pro-player-modal.component.scss']
})
export class ProPlayerModalComponent {
  constructor(public dialogRef: MatDialogRef<ProPlayerModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
