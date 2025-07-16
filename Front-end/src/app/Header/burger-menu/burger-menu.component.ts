import { Component } from '@angular/core';
import { SingInComponent } from '../../sing-in/sing-in.component';
import { ChangeCurrencyComponent } from '../../change-currency/change-currency.component';
import { BusketPageComponent } from '../../busket-page/busket-page.component';
import { BasketComponent } from '../../basket/basket.component';
import { SinginAdminComponent } from '../singin-admin/singin-admin.component';
import { LogoComponent } from '../logo/logo.component';
import { AppToggleThemeComponent } from '../app-toggle-theme/app-toggle-theme.component';

@Component({
  selector: 'app-burger-menu',
  imports: [AppToggleThemeComponent, SingInComponent, ChangeCurrencyComponent, BasketComponent, SinginAdminComponent],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  burgerMenuScreen = 'none';
  bgColor = 'transparent';

  onClickBurgerMenu(aside:HTMLElement){
    aside.classList.remove('close')
    aside.classList.add('open')
    this.burgerMenuScreen = 'block'
    this.bgColor = '#00000052'
  }
  onClickCross(aside:HTMLElement){
    aside.classList.remove('open')
    aside.classList.add('close')
    setTimeout(()=>{
        this.burgerMenuScreen = 'none'
    },300)
    this.bgColor = 'transparent'
  }
}
