import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDataComponent } from './model-data.component';

describe('ModelDataComponent', () => {
  let component: ModelDataComponent;
  let fixture: ComponentFixture<ModelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
