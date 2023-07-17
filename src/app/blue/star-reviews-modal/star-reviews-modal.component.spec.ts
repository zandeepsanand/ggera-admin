import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarReviewsModalComponent } from './star-reviews-modal.component';

describe('StarReviewsModalComponent', () => {
  let component: StarReviewsModalComponent;
  let fixture: ComponentFixture<StarReviewsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarReviewsModalComponent]
    });
    fixture = TestBed.createComponent(StarReviewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
