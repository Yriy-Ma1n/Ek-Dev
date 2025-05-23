import { Component, EventEmitter, inject, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card-tovar',
  imports: [],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {
  
count: number = 1;
@Input() price: number = 20;
@Input() name:string = 'name-tovar'

  constPrice: number = 20;

  constructor(){
    
  }

  plusButton() {
    this.count += 1
    this.price += this.constPrice
  }
  minusButton() {
    if (this.count <= 0) return
    this.count -= 1
    this.price -= this.constPrice
  }
  
}
