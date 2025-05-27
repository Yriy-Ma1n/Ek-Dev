import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardInnerComponent } from './product-card-inner.component';

describe('ProductCardInnerComponent', () => {
  let component: ProductCardInnerComponent;
  let fixture: ComponentFixture<ProductCardInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
