import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrderModalComponent } from './completed-order-modal.component';

describe('CompletedOrderModalComponent', () => {
  let component: CompletedOrderModalComponent;
  let fixture: ComponentFixture<CompletedOrderModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedOrderModalComponent]
    });
    fixture = TestBed.createComponent(CompletedOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
