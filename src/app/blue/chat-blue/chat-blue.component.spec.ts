import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBlueComponent } from './chat-blue.component';

describe('ChatBlueComponent', () => {
  let component: ChatBlueComponent;
  let fixture: ComponentFixture<ChatBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBlueComponent]
    });
    fixture = TestBed.createComponent(ChatBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
