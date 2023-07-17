import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlueComponent } from './navbar-blue.component';

describe('NavbarBlueComponent', () => {
  let component: NavbarBlueComponent;
  let fixture: ComponentFixture<NavbarBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarBlueComponent]
    });
    fixture = TestBed.createComponent(NavbarBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
