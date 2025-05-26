import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../core/services/card.service';
import { objProduct } from '../core/services/card.service';
@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  router = inject(Router);
  countProduct = JSON.parse(localStorage.getItem("allCardTovar")!)?.length || 0

  openCardPage(){
    this.router.navigate(['busket'])
  }
  showCountTovar(){
    const a = JSON.parse(localStorage.getItem("allCardTovar")!)

    if(a){
     this.countProduct = a.reduce((akk:number, item:objProduct)=>{
        return akk + item.quantity
      },0)
    }
  }
  constructor(){
    this.showCountTovar()
  }
}
