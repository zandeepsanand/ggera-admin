import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StopLobyModalComponent } from '../stop-loby-modal/stop-loby-modal.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-chat-report-blue',
  templateUrl: './chat-report-blue.component.html',
  styleUrls: ['./chat-report-blue.component.scss']
})
export class ChatReportBlueComponent {constructor(private dialog: MatDialog , private breakpointObserver: BreakpointObserver) {}
openDialog(): void {
  const dialogConfig = new MatDialogConfig();

  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')){
    dialogConfig.width = '95%';// Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '50%';// Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';// Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(StopLobyModalComponent, dialogConfig);
}
openReview(): void {
  const dialogConfig = new MatDialogConfig();

  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')){
    dialogConfig.width = '95%';// Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '50%';// Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';// Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(StopLobyModalComponent, dialogConfig);
}
textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra auctor nisi, et varius risus convallis id. Sed feugiat, felis ac pharetra ullamcorper, velit elit scelerisque tortor, et facilisis sapien velit ut nunc.';
maxLength =9;
}