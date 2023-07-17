import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneSessionMoreModalComponent } from './one-one-session-more-modal.component';

describe('OneOneSessionMoreModalComponent', () => {
  let component: OneOneSessionMoreModalComponent;
  let fixture: ComponentFixture<OneOneSessionMoreModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneOneSessionMoreModalComponent]
    });
    fixture = TestBed.createComponent(OneOneSessionMoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
