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
 

  openCardPage(){
    this.router.navigate(['busket'])
  }
  showCountTovar(){
    const item = JSON.parse(localStorage.getItem("allCardTovar")!)
  

    if(item){
     return item.reduce((akk:number, item:objProduct)=>{
        return akk + item.quantity
      },0)
    }
      return 0
    
  }
  constructor(){
    this.showCountTovar()
  }
}
