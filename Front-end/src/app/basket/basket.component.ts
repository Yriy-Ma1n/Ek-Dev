import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../core/services/card.service';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  router = inject(Router);
  countProduct = inject(CardService).GetProduct.length
  openCardPage(){
    this.router.navigate(['busket'])
  }
}
