import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPremadeOrdersComponent } from './completed-premade-orders.component';

describe('CompletedPremadeOrdersComponent', () => {
  let component: CompletedPremadeOrdersComponent;
  let fixture: ComponentFixture<CompletedPremadeOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedPremadeOrdersComponent]
    });
    fixture = TestBed.createComponent(CompletedPremadeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
