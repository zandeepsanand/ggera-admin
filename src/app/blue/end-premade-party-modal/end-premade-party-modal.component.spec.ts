import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPremadePartyModalComponent } from './end-premade-party-modal.component';

describe('EndPremadePartyModalComponent', () => {
  let component: EndPremadePartyModalComponent;
  let fixture: ComponentFixture<EndPremadePartyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndPremadePartyModalComponent]
    });
    fixture = TestBed.createComponent(EndPremadePartyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
