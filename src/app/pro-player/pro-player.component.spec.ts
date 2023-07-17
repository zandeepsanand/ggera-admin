import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPlayerComponent } from './pro-player.component';

describe('ProPlayerComponent', () => {
  let component: ProPlayerComponent;
  let fixture: ComponentFixture<ProPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProPlayerComponent]
    });
    fixture = TestBed.createComponent(ProPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
