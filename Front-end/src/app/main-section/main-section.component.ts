import { Component } from '@angular/core';
import { NewsComponent } from "./news/news.component";
import { CategoryListComponent } from '../Header/category-list/category-list.component';
import { HeaderBarComponent } from "../shared/components/header-bar/header-bar.component";
import { PopularModelsComponent } from '../popular-models/popular-models.component';

@Component({
  selector: 'app-main-section',
  imports: [NewsComponent, CategoryListComponent, HeaderBarComponent, PopularModelsComponent ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
