import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-inner',
  imports: [ProductCardCharacteristicsComponent, HeaderBarComponent],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {
  router = inject(Router)
  backToMainPage(){
    this.router.navigate(["/Home"])
  }
}
