import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wallet-transaction-table-blue',
  templateUrl: './wallet-transaction-table-blue.component.html',
  styleUrls: ['./wallet-transaction-table-blue.component.scss']
})
export class WalletTransactionTableBlueComponent {
  p: number = 1;
  items: string[] = [];

  pageSize: number = 10;
  totalPages: number = 0;
  paginatedItems: string[] = [];
  constructor(private dialog: MatDialog) {}
 
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

  goToPage(page: number){    
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
}
