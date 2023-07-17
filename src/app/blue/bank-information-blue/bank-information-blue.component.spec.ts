import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankInformationBlueComponent } from './bank-information-blue.component';

describe('BankInformationBlueComponent', () => {
  let component: BankInformationBlueComponent;
  let fixture: ComponentFixture<BankInformationBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankInformationBlueComponent]
    });
    fixture = TestBed.createComponent(BankInformationBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
