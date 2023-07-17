import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressOrderComponent } from './in-progress-order.component';

describe('InProgressOrderComponent', () => {
  let component: InProgressOrderComponent;
  let fixture: ComponentFixture<InProgressOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InProgressOrderComponent]
    });
    fixture = TestBed.createComponent(InProgressOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
