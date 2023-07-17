import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGuideComponent } from './modal-guide.component';

describe('ModalGuideComponent', () => {
  let component: ModalGuideComponent;
  let fixture: ComponentFixture<ModalGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGuideComponent]
    });
    fixture = TestBed.createComponent(ModalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
