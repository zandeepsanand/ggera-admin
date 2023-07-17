import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProClientModalComponent } from './pro-client-modal.component';

describe('ProClientModalComponent', () => {
  let component: ProClientModalComponent;
  let fixture: ComponentFixture<ProClientModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProClientModalComponent]
    });
    fixture = TestBed.createComponent(ProClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
