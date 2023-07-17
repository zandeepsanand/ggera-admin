import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInProgresssStartTimerComponent } from './single-in-progresss-start-timer.component';

describe('SingleInProgresssStartTimerComponent', () => {
  let component: SingleInProgresssStartTimerComponent;
  let fixture: ComponentFixture<SingleInProgresssStartTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleInProgresssStartTimerComponent]
    });
    fixture = TestBed.createComponent(SingleInProgresssStartTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
