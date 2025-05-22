import { Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  openCardPage(){
    console.log('open card page')
  }
}
