import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { characteristic } from '../../types/characteristics-type';

@Component({
  selector: 'app-product-card-characteristics',
  imports: [NgFor],
  templateUrl: './product-card-characteristics.component.html',
  styleUrl: './product-card-characteristics.component.css'
})
export class ProductCardCharacteristicsComponent {
 @Input() characteristic:characteristic[] = []

 constructor(){
  setTimeout(() => {
      console.log(this.characteristic)
  }, 1000);
 }
}
