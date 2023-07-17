import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardPopupModalComponent } from './onboard-popup-modal.component';

describe('OnboardPopupModalComponent', () => {
  let component: OnboardPopupModalComponent;
  let fixture: ComponentFixture<OnboardPopupModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardPopupModalComponent]
    });
    fixture = TestBed.createComponent(OnboardPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
