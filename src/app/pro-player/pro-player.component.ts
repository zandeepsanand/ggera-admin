import { Component } from '@angular/core';
import { ProPlayerModalComponent } from '../pro-player-modal/pro-player-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TimerModalComponent } from '../timer-modal/timer-modal.component';

@Component({
  selector: 'app-pro-player',
  templateUrl: './pro-player.component.html',
  styleUrls: ['./pro-player.component.scss']
})
export class ProPlayerComponent {
  constructor(private dialog: MatDialog) {}
  openDialog(){
    const dialogRef = this.dialog.open(ProPlayerModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogTimer() {
    const dialogRef = this.dialog.open(TimerModalComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    });
  }
}
