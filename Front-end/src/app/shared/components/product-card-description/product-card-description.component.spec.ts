import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardDescriptionComponent } from './product-card-description.component';

describe('ProductCardDescriptionComponent', () => {
  let component: ProductCardDescriptionComponent;
  let fixture: ComponentFixture<ProductCardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
