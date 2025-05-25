import { Component, inject } from '@angular/core';
import { CardTovarComponent } from './card-tovar/card-tovar.component';
import { NgClass, NgFor } from '@angular/common';
import { CardService } from '../core/services/card.service';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';

@Component({
  selector: 'app-busket-page',
  imports: [CardTovarComponent, NgFor, NgClass, HeaderBarComponent],
  templateUrl: './busket-page.component.html',
  styleUrl: './busket-page.component.css'
})

export class BusketPageComponent {
  cardService = inject(CardService)
  product = this.cardService.GetProduct.reduce((acc: any[], obj) => {
    const existing = acc.find(item => item._id === obj._id);

    if (existing) {
      existing.quantity += obj.quantity;
    } else {
      acc.push({ ...obj });
    }

    return acc;
  }, [] as any[]);


  price: number = 0;
  sum: number = 0;
  show: boolean = false


  clearCard() {
    this.cardService.clearCard()
    this.product = []
  }
  buyCard() {
    if (this.product.length === 0) return
    this.clearCard()
    this.show = true
    setTimeout(() => this.show = false, 3000)
  }

}
