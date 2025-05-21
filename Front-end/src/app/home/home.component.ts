import { Component } from '@angular/core';
import { NewsComponent } from '../News/news/news.component';
import { HeaderBarComponent } from '../Header/header-bar/header-bar.component';
import { CategoryListComponent } from '../Header/category-list/category-list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderBarComponent, NewsComponent, CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
