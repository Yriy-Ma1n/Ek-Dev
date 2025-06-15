import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { characteristic } from '../../types/characteristics-type';

@Component({
  selector: 'app-product-card-characteristics',
  imports: [NgFor, KeyValuePipe],
  templateUrl: './product-card-characteristics.component.html',
  styleUrl: './product-card-characteristics.component.css'
})
export class ProductCardCharacteristicsComponent {
  @Input() characteristic: any[] = []
  characteristic_name: string[] = []

  constructor() {
    setTimeout(() => {
      if (!this.characteristic[0]) return

      this.characteristic_name = Object.keys(this.characteristic[0].characteristics)
    }, 100)
  }

}
