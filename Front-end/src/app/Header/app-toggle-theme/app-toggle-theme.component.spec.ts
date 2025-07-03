import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToggleThemeComponent } from './app-toggle-theme.component';

describe('AppToggleThemeComponent', () => {
  let component: AppToggleThemeComponent;
  let fixture: ComponentFixture<AppToggleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppToggleThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppToggleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
