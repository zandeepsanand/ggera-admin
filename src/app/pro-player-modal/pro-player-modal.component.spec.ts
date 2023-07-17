import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPlayerModalComponent } from './pro-player-modal.component';

describe('ProPlayerModalComponent', () => {
  let component: ProPlayerModalComponent;
  let fixture: ComponentFixture<ProPlayerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProPlayerModalComponent]
    });
    fixture = TestBed.createComponent(ProPlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
