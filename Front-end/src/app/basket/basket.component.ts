import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../core/services/card.service';
import { objProduct } from '../core/services/card.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  router = inject(Router);
  quantity = inject(CardService)
  http = inject(HttpClient)

  openCardPage(){
    this.router.navigate(['busket'])
  }


}
