import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBlueComponent } from './request-blue.component';

describe('RequestBlueComponent', () => {
  let component: RequestBlueComponent;
  let fixture: ComponentFixture<RequestBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestBlueComponent]
    });
    fixture = TestBed.createComponent(RequestBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
