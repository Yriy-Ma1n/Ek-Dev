import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { CardService } from '../../core/services/card.service';


@Component({
  selector: 'app-card-tovar',
  imports: [],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {

  productChange = inject(CardService)

  @Input() count: number = 1;
  @Input() price: number = 0;
  @Input() name: string = '';
  @Input() src: string = '';
  


  ngOnChanges(changes: SimpleChanges) {
    if (changes['count'].currentValue < 1) return
    this.price *= changes['count'].currentValue
    this.constPrice = changes['price'].currentValue
    
  }

  constPrice: number = 0

  plusButton(element: HTMLElement) {
    this.count += 1

    this.price = this.constPrice * this.count

    this.productChange.changeQuantityPlus = String(element.textContent)

  }
  minusButton(element: HTMLElement) {

    if (this.count <= 1) return

    this.count -= 1
    this.price -= this.constPrice

    this.productChange.changeQuantityMinus = String(element.textContent)

  }

  deleteItem(name:HTMLHeadingElement){
    this.productChange.clearOnItem(name.textContent!)
    console.log(this.productChange)
  }



}
