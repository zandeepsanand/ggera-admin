import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InProgressOrdersModalComponent } from '../in-progress-orders-modal/in-progress-orders-modal.component';
import { ReportModalComponent } from '../report-modal/report-modal.component';

@Component({
  selector: 'app-in-progress-orders',
  templateUrl: './in-progress-orders.component.html',
  styleUrls: ['./in-progress-orders.component.scss']
})
export class InProgressOrdersComponent {
  constructor(private dialog: MatDialog , private breakpointObserver: BreakpointObserver) {}
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
  
    // Set the desired width of the dialog based on the screen size
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
      dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
    } else {
      dialogConfig.width = '60%'; // Set the default width as 70% for other screens
    }
    
    // dialogConfig.height = '80%';
  
    // Open the dialog with the specified configuration
    const dialogRef = this.dialog.open(InProgressOrdersModalComponent, dialogConfig);
}
openReport(): void {
  const dialogConfig = new MatDialogConfig();

  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '20%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(ReportModalComponent, dialogConfig);
  console.log(this.breakpointObserver.isMatched('(max-width: 800px)'));

}
}
