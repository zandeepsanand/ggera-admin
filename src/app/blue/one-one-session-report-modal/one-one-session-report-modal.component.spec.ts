import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneSessionReportModalComponent } from './one-one-session-report-modal.component';

describe('OneOneSessionReportModalComponent', () => {
  let component: OneOneSessionReportModalComponent;
  let fixture: ComponentFixture<OneOneSessionReportModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneOneSessionReportModalComponent]
    });
    fixture = TestBed.createComponent(OneOneSessionReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
