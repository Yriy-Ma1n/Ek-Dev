import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryListComponent } from './app-category-list.component';

describe('AppCategoryListComponent', () => {
  let component: AppCategoryListComponent;
  let fixture: ComponentFixture<AppCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
