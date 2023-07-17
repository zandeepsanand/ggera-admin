import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopLobyModalComponent } from './stop-loby-modal.component';

describe('StopLobyModalComponent', () => {
  let component: StopLobyModalComponent;
  let fixture: ComponentFixture<StopLobyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopLobyModalComponent]
    });
    fixture = TestBed.createComponent(StopLobyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
