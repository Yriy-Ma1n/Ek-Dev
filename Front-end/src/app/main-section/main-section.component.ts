import { Component } from '@angular/core';
import { CategoryComponent } from '../Header/category/category.component';
import { CategoryListComponent } from '../Header/category-list/category-list.component';
import { NewsComponent } from "./news/news.component";

@Component({
  selector: 'app-main-section',
  imports: [CategoryComponent, CategoryListComponent, NewsComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
