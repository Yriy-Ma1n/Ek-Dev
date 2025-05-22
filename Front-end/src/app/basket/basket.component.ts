import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  router = inject(Router)
  openCardPage(){
    this.router.navigate(['busket'])
  }
}
