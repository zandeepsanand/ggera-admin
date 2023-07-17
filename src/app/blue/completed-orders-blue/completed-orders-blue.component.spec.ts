import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrdersBlueComponent } from './completed-orders-blue.component';

describe('CompletedOrdersBlueComponent', () => {
  let component: CompletedOrdersBlueComponent;
  let fixture: ComponentFixture<CompletedOrdersBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedOrdersBlueComponent]
    });
    fixture = TestBed.createComponent(CompletedOrdersBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
