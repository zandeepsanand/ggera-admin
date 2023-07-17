import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBlueComponent } from './referral-blue.component';

describe('ReferralBlueComponent', () => {
  let component: ReferralBlueComponent;
  let fixture: ComponentFixture<ReferralBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralBlueComponent]
    });
    fixture = TestBed.createComponent(ReferralBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
