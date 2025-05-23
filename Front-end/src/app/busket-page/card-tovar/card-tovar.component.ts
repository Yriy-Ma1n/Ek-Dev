import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardService } from '../../core/services/card.service';


@Component({
  selector: 'app-card-tovar',
  imports: [],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {

  productChange = inject(CardService)

  count: number = 1;
  @Input() price: number = 0;
  @Input() name: string = ''

  constPrice: number = 0

  plusButton(element: HTMLElement) {
    this.count += 1
    this.price = this.price + this.constPrice
    this.productChange.changeQuantityPlus = String(element.textContent)
  }
  minusButton(element: HTMLElement) {

    if (this.count <= 1) return
    this.count -= 1
    this.price -= this.constPrice
    this.productChange.changeQuantityMinus = String(element.textContent)

  }
  ngOnInit() {
    this.constPrice = this.price;
  }


}
