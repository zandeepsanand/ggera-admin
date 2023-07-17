import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChatRedComponent } from './single-chat-red.component';

describe('SingleChatRedComponent', () => {
  let component: SingleChatRedComponent;
  let fixture: ComponentFixture<SingleChatRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleChatRedComponent]
    });
    fixture = TestBed.createComponent(SingleChatRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
