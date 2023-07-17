import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReviewsModalComponent } from '../reviews-modal/reviews-modal.component';

@Component({
  selector: 'app-completed-orders-blue',
  templateUrl: './completed-orders-blue.component.html',
  styleUrls: ['./completed-orders-blue.component.scss']
})
export class CompletedOrdersBlueComponent {
  p: number = 1;
  items: string[] = [];
  pageSize: number = 10;
  totalPages: number = 0;
  paginatedItems: string[] = [];
  constructor(private dialog: MatDialog , private breakpointObserver: BreakpointObserver) {}
  
 
  generateItems(): string[] {
    for (let i = 1; i <= 40; i++) {
      this.items.push(`Item ${i}`);
    }
    return this.items;
  }

  ngOnInit() {
    this.generateItems();
    this.paginateItems();
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.p = page;
      this.paginateItems();
    }
  }

  paginateItems() {
    const startIndex = (this.p - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedItems = this.items.slice(startIndex, endIndex);

    this.totalPages = Math.ceil(this.items.length / this.pageSize);
  }

  getPageRange(totalPages: number): number[] {
    return Array(totalPages).fill(0).map((_, i) => i + 1);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
  
    // Set the desired width of the dialog based on the screen size
    if (this.breakpointObserver.isMatched('(max-width: 800px)')) {
      dialogConfig.width = '95%'; // Set the width as 90% for mobile screens
    } else {
      dialogConfig.width = '60%'; // Set the default width as 70% for other screens
    }
    
    dialogConfig.height = '80%';
  
    // Open the dialog with the specified configuration
    const dialogRef = this.dialog.open(ReviewsModalComponent, dialogConfig);
  }
}
