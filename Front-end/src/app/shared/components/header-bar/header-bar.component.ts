import { Component } from '@angular/core';
import { LogoComponent } from '../../../Header/logo/logo.component';
import { SearchComponent } from '../../../Header/search/search.component';
import { SinginAdminComponent } from '../../../Header/singin-admin/singin-admin.component';
import { CategoryComponent } from '../../../Header/category/category.component';
import { BasketComponent } from '../../../basket/basket.component';
import { CategoryListComponent } from '../../../Header/category-list/category-list.component';


@Component({
  selector: 'app-header-bar',
  imports: [LogoComponent, SearchComponent, SinginAdminComponent, CategoryComponent, BasketComponent, CategoryListComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

}
