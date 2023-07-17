import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPremadePartyBlueComponent } from './new-premade-party-blue.component';

describe('NewPremadePartyBlueComponent', () => {
  let component: NewPremadePartyBlueComponent;
  let fixture: ComponentFixture<NewPremadePartyBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPremadePartyBlueComponent]
    });
    fixture = TestBed.createComponent(NewPremadePartyBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
