import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsBlueComponent } from './tournaments-blue.component';

describe('TournamentsBlueComponent', () => {
  let component: TournamentsBlueComponent;
  let fixture: ComponentFixture<TournamentsBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentsBlueComponent]
    });
    fixture = TestBed.createComponent(TournamentsBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
