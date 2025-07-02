import { Component } from '@angular/core';
import { LogoComponent } from '../../../Header/logo/logo.component';
import { SearchComponent } from '../../../Header/search/search.component';
import { SinginAdminComponent } from '../../../Header/singin-admin/singin-admin.component';
import { BasketComponent } from '../../../basket/basket.component';
import { CategoryComponent } from '../../../Header/category/category.component';
<<<<<<< HEAD
import { SingInComponent } from '../../../sing-in/sing-in.component';
=======
import { ChangeCurrencyComponent } from '../../../change-currency/change-currency.component';
>>>>>>> 34f7e7b63f6aff7e7fe0ddf77fd401b60c23cc3d


@Component({
  selector: 'app-header-bar',
<<<<<<< HEAD
  imports: [LogoComponent, SearchComponent, SinginAdminComponent, BasketComponent, CategoryComponent, SingInComponent],
=======
  imports: [LogoComponent, SearchComponent, SinginAdminComponent, BasketComponent, CategoryComponent, ChangeCurrencyComponent],
>>>>>>> 34f7e7b63f6aff7e7fe0ddf77fd401b60c23cc3d
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

}
