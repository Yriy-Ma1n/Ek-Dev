import { Component, inject } from '@angular/core';
import { CardTovarComponent } from './card-tovar/card-tovar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-busket-page',
  imports: [CardTovarComponent, NgFor],
  templateUrl: './busket-page.component.html',
  styleUrl: './busket-page.component.css'
})
export class BusketPageComponent {
  
  arrProduct = [{name:'name-tovar1', price:20}, {name:'name-tovar2', price:11}, {name:'name-tovar3', price:50}]

  sum:number = 0;

  constructor(){
    this.sum = this.arrProduct.reduce((akk, item)=>{
      return akk += item.price
    },0)
  }

}
