import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArrowComponent } from './button-arrow.component';

describe('ButtonArrowComponent', () => {
  let component: ButtonArrowComponent;
  let fixture: ComponentFixture<ButtonArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
