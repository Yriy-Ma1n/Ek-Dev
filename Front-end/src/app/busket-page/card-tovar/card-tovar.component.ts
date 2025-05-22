import { Component } from '@angular/core';

@Component({
  selector: 'app-card-tovar',
  imports: [],
  templateUrl: './card-tovar.component.html',
  styleUrl: './card-tovar.component.css'
})
export class CardTovarComponent {
count:number = 0

 plusButton(){
  
  this.count += 1
 }
 minusButton(){
  if(this.count <= 0) return
  this.count -= 1
 }
}
