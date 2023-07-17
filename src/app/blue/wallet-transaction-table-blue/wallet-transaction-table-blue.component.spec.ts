import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTransactionTableBlueComponent } from './wallet-transaction-table-blue.component';

describe('WalletTransactionTableBlueComponent', () => {
  let component: WalletTransactionTableBlueComponent;
  let fixture: ComponentFixture<WalletTransactionTableBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletTransactionTableBlueComponent]
    });
    fixture = TestBed.createComponent(WalletTransactionTableBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
