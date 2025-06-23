import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndminPasswordComponent } from './andmin-password.component';

describe('AndminPasswordComponent', () => {
  let component: AndminPasswordComponent;
  let fixture: ComponentFixture<AndminPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndminPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndminPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
