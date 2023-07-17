import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OnboardPopupModalComponent } from '../onboard-popup-modal/onboard-popup-modal.component';
import { ReportModalComponent } from '../report-modal/report-modal.component';
import { ReviewsModalComponent } from '../reviews-modal/reviews-modal.component';
import { InProgressOrdersModalComponent } from '../in-progress-orders-modal/in-progress-orders-modal.component';
import { StopLobyModalComponent } from '../stop-loby-modal/stop-loby-modal.component';
import { EndPremadePartyModalComponent } from '../end-premade-party-modal/end-premade-party-modal.component';
import { StarReviewsModalComponent } from '../star-reviews-modal/star-reviews-modal.component';
import { OneOneSessionMoreModalComponent } from '../one-one-session-more-modal/one-one-session-more-modal.component';
import { OneOneSessionReportModalComponent } from '../one-one-session-report-modal/one-one-session-report-modal.component';
import { ProClientModalComponent } from 'src/app/pro-client-modal/pro-client-modal.component';
import { ProPlayerModalComponent } from 'src/app/pro-player-modal/pro-player-modal.component';
import { CompletedOrderModalComponent } from 'src/app/completed-order-modal/completed-order-modal.component';

@Component({
  selector: 'app-modal-guide',
  templateUrl: './modal-guide.component.html',
  styleUrls: ['./modal-guide.component.scss']
})
export class ModalGuideComponent {
  constructor(private dialog: MatDialog , private breakpointObserver: BreakpointObserver) {}
  openOnboard(): void {
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
  openReviews(): void {
    const dialogConfig = new MatDialogConfig();
  
    // Set the desired width of the dialog based on the screen size
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
      dialogConfig.width = '95%'; // Set the width as 90% for mobile screens
    } else {
      dialogConfig.width = '60%'; // Set the default width as 70% for other screens
    }
    // dialogConfig.height = '80%';
    // Open the dialog with the specified configuration
    const dialogRef = this.dialog.open(ReviewsModalComponent, dialogConfig);
  }
  openInProgress(): void {
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
openStopLobby(): void {
  const dialogConfig = new MatDialogConfig();

  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '20%'; // Set the default width as 70% for other screens
  }
  
  // dialogConfig.height = '80%';

  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(StopLobyModalComponent, dialogConfig);
}
openEndPremade(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '20%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(EndPremadePartyModalComponent, dialogConfig);
}
openStarReviews(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '40%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(StarReviewsModalComponent, dialogConfig);
}
openOneOneMore(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '70%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(OneOneSessionMoreModalComponent, dialogConfig);
}
openOneOneReport(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '20%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(OneOneSessionReportModalComponent, dialogConfig);
}
openProClient(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '60%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(ProClientModalComponent, dialogConfig);
}
openProPlayer(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '30%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(ProPlayerModalComponent, dialogConfig);
}
openCompleted(): void {
  const dialogConfig = new MatDialogConfig();
  // Set the desired width of the dialog based on the screen size
  if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
    dialogConfig.width = '100%'; // Set the width as 90% for mobile screens
  } else {
    dialogConfig.width = '40%'; // Set the default width as 70% for other screens
  }
  // dialogConfig.height = '80%';
  // Open the dialog with the specified configuration
  const dialogRef = this.dialog.open(CompletedOrderModalComponent, dialogConfig);
}
}
