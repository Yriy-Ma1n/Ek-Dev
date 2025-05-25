import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';

@Component({
  selector: 'app-product-card-inner',
  imports: [ProductCardCharacteristicsComponent],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {

}
