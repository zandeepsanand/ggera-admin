import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReportBlueComponent } from './chat-report-blue.component';

describe('ChatReportBlueComponent', () => {
  let component: ChatReportBlueComponent;
  let fixture: ComponentFixture<ChatReportBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatReportBlueComponent]
    });
    fixture = TestBed.createComponent(ChatReportBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
