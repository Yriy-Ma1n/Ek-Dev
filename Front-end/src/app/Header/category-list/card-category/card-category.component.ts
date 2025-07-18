import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
    @Input() img:string = ''

   
}
