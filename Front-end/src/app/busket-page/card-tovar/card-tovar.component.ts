import { Component } from '@angular/core';

@Component({
  selector: 'app-card-tovar',
  imports: [],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {
count:number = 1;
price:number = 20;
constPrice:number = 20;

 plusButton(){
  this.count += 1
  this.price += this.constPrice
 }
 minusButton(){
  if(this.count <= 0) return
  this.count -= 1
  this.price -= this.constPrice
 }
}
