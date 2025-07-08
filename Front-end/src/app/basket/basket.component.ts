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
  quantity = inject(CardService)

  openCardPage(){
    this.router.navigate(['busket'])
  }
  showCountTovar(){
 

  }
  constructor(){
    this.showCountTovar()
  }
}
