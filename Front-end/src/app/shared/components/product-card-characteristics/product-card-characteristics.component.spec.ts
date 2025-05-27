import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCharacteristicsComponent } from './product-card-characteristics.component';

describe('ProductCardCharacteristicsComponent', () => {
  let component: ProductCardCharacteristicsComponent;
  let fixture: ComponentFixture<ProductCardCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCharacteristicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
