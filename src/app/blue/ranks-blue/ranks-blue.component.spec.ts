import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksBlueComponent } from './ranks-blue.component';

describe('RanksBlueComponent', () => {
  let component: RanksBlueComponent;
  let fixture: ComponentFixture<RanksBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RanksBlueComponent]
    });
    fixture = TestBed.createComponent(RanksBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
