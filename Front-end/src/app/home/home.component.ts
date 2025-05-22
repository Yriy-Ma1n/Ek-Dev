import { Component } from '@angular/core';
import { NewsComponent } from '../News/news/news.component';
import { CategoryListComponent } from '../Header/category-list/category-list.component';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';

@Component({
  selector: 'app-home',
  imports: [HeaderBarComponent, NewsComponent, CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
