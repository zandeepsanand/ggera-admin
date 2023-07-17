import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChatBlueComponent } from './single-chat-blue.component';

describe('SingleChatBlueComponent', () => {
  let component: SingleChatBlueComponent;
  let fixture: ComponentFixture<SingleChatBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleChatBlueComponent]
    });
    fixture = TestBed.createComponent(SingleChatBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
