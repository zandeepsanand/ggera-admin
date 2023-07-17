import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInProgresssStopTimerComponent } from './single-in-progresss-stop-timer.component';

describe('SingleInProgresssStopTimerComponent', () => {
  let component: SingleInProgresssStopTimerComponent;
  let fixture: ComponentFixture<SingleInProgresssStopTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleInProgresssStopTimerComponent]
    });
    fixture = TestBed.createComponent(SingleInProgresssStopTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
