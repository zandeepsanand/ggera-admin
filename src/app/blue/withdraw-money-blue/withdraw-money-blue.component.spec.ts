import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawMoneyBlueComponent } from './withdraw-money-blue.component';

describe('WithdrawMoneyBlueComponent', () => {
  let component: WithdrawMoneyBlueComponent;
  let fixture: ComponentFixture<WithdrawMoneyBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawMoneyBlueComponent]
    });
    fixture = TestBed.createComponent(WithdrawMoneyBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
