import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressOrdersModalComponent } from './in-progress-orders-modal.component';

describe('InProgressOrdersModalComponent', () => {
  let component: InProgressOrdersModalComponent;
  let fixture: ComponentFixture<InProgressOrdersModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InProgressOrdersModalComponent]
    });
    fixture = TestBed.createComponent(InProgressOrdersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
