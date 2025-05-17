import { Component } from '@angular/core';
import { CardCategoryComponent } from './card-category/card-category.component';

@Component({
  selector: 'app-category-list',
  imports: [CardCategoryComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

}
