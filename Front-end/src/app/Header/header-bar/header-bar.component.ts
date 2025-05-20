import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchComponent } from '../search/search.component';
import { SinginAdminComponent } from '../singin-admin/singin-admin.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryComponent } from '../category/category.component';
import { BasketComponent } from '../../basket/basket.component';

@Component({
  selector: 'app-header-bar',
  imports: [LogoComponent, SearchComponent, SinginAdminComponent, CategoryListComponent, CategoryComponent, BasketComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

}
