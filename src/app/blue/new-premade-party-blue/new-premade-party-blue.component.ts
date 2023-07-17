import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OnboardPopupModalComponent } from '../onboard-popup-modal/onboard-popup-modal.component';

@Component({
  selector: 'app-new-premade-party-blue',
  templateUrl: './new-premade-party-blue.component.html',
  styleUrls: ['./new-premade-party-blue.component.scss']
})
export class NewPremadePartyBlueComponent {
  constructor(private dialog: MatDialog , private breakpointObserver: BreakpointObserver) {}
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
  
    // Set the desired width of the dialog based on the screen size
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
      dialogConfig.width = '95%'; // Set the width as 90% for mobile screens
    } else {
      dialogConfig.width = '60%'; // Set the default width as 70% for other screens
    }
    
    // dialogConfig.height = '80%';
  
    // Open the dialog with the specified configuration
    const dialogRef = this.dialog.open(OnboardPopupModalComponent, dialogConfig);
  }
}
