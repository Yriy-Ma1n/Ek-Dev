import { Component } from '@angular/core';
import { LogoComponent } from '../../../Header/logo/logo.component';
import { SearchComponent } from '../../../Header/search/search.component';
import { SinginAdminComponent } from '../../../Header/singin-admin/singin-admin.component';
import { BasketComponent } from '../../../basket/basket.component';
import { CategoryComponent } from '../../../Header/category/category.component';
import { SingInComponent } from '../../../sing-in/sing-in.component';
import { ChangeCurrencyComponent } from '../../../change-currency/change-currency.component';
import { AppToggleThemeComponent } from '../../../Header/app-toggle-theme/app-toggle-theme.component';
import { BurgerMenuComponent } from '../../../Header/burger-menu/burger-menu.component';



@Component({
  selector: 'app-header-bar',
  imports: [BurgerMenuComponent, LogoComponent, SearchComponent, SinginAdminComponent, BasketComponent, CategoryComponent, SingInComponent, ChangeCurrencyComponent, AppToggleThemeComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  
}
