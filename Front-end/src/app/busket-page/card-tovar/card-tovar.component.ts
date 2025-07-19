import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { CardService } from '../../core/services/card.service';
import { CurrencySwitcherPipe } from '../../pipes/currency-switcher.pipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card-tovar',
  imports: [CurrencySwitcherPipe],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {
  productChange = inject(CardService);
  Currency = localStorage.getItem('currencu') ? localStorage.getItem('currencu')! : "UAH";

  http = inject(HttpClient)

  @Input() count: number = 1;
  @Input() name: string = '';
  @Input() price: number = 0;
  priceString = '';
  @Input() src: string = '';
  @Input() id: string = ''

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if (changes['count'].currentValue < 1) return
    if (changes['price']?.currentValue) {
      this.constPrice = changes['price'].currentValue
    }

    this.price = this.constPrice * changes['count'].currentValue
    this.priceString = String(this.price);

  }

  constPrice: number = 0;

  disabledPlus: boolean = false
  disabledMinus: boolean = false


  plusButton() {

    this.count += 1
    this.price = this.constPrice * this.count

    this.priceString = String(this.price)

    this.productChange.changeQuantityPlus = ''

    this.disabledPlus = true
    console.log(this.disabledPlus)
    this.http.patch('http://localhost:5500/productQuantityPlus', { ItemId: this.id }, { withCredentials: true }).subscribe(data => {
      this.disabledPlus = false
    })

  }
  minusButton() {
    if (this.count <= 1) return

    this.count -= 1

    this.price -= this.constPrice

    this.priceString = String(this.price)

    this.productChange.changeQuantityMinus = ''

    this.disabledMinus = true
    this.http.patch('http://localhost:5500/productQuantityMinus', { ItemId: this.id }, { withCredentials: true }).subscribe(data => {
      this.disabledMinus = false
    })

  }

  deleteItem(name: HTMLHeadingElement) {

    this.http.patch('http://localhost:5500/deleteItemFromCard', { itemName: name.textContent }, { withCredentials: true }).subscribe(data => {
      if (data) {
        this.productChange.rewriteProduct()
      }
    })
  }

  showCount() {
    return this.count
  }



}
