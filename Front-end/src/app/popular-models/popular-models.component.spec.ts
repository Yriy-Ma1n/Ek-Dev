import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularModelsComponent } from './popular-models.component';

describe('PopularModelsComponent', () => {
  let component: PopularModelsComponent;
  let fixture: ComponentFixture<PopularModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
