import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeacialEventsComponent } from './speacial-events.component';

describe('SpeacialEventsComponent', () => {
  let component: SpeacialEventsComponent;
  let fixture: ComponentFixture<SpeacialEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeacialEventsComponent]
    });
    fixture = TestBed.createComponent(SpeacialEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
