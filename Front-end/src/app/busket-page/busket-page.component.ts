import { Component, inject } from '@angular/core';
import { CardTovarComponent } from './card-tovar/card-tovar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CardService } from '../core/services/card.service';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from './name.name.validators.directive';
import { CurrencySwitcherPipe } from '../pipes/currency-switcher.pipe';
import { UserDataService } from '../core/services/user-data.service';

@Component({
  selector: 'app-busket-page',
  imports: [CardTovarComponent, NgFor, NgClass, NgIf, ReactiveFormsModule, CurrencySwitcherPipe],
  templateUrl: './busket-page.component.html',
  styleUrl: './busket-page.component.css'
})

export class BusketPageComponent {
  cardService = inject(CardService)
  userData = inject(UserDataService)
  product = this.cardService.GetProduct
  http = inject(HttpClient);
  Currency = localStorage.getItem('currencu') ? localStorage.getItem('currencu')! : "UAH";

  price: number = 0;
  sum: number = 0;
  show: boolean = false
  Showconfirmation: boolean = false

  name: string = '';
  telNum: string = '';

  showThatUserNotInAccount: boolean = false

  dataForm = new FormGroup({
    name: new FormControl("", [Validators.required, nameValidator()]),
    number: new FormControl("", [Validators.required, Validators.minLength(13), Validators.pattern(/^\+?\d+$/)])
  })

  clearCard() {
    if (this.product.length > 0) {
      this.http.delete('http://localhost:5500/clearCard', { withCredentials: true }).subscribe(data => {
        if (data) {
          this.cardService.rewriteProduct()
        }
      })
    }
  }
  buyCard() {
    if (this.product.length === 0) return

    this.show = true
    this.name = this.dataForm.controls.name.value!
    this.telNum = this.dataForm.controls.number.value!


    setTimeout(() => this.show = false, 3000)

    this.http.post(`http://localhost:5500/Message`, {
      message: this.text()
    }).subscribe(anws => console.log(anws))

    this.Showconfirmation = false
    this.clearCard()

  }
  confirmation() {
    if (this.product.length === 0) return
    this.Showconfirmation = true
  }
  text() {
    return `
  Деталі замовлення:
 - Покупець: ${this.name}
 - Телефон: ${this.telNum}

  Товари:
${this.product.reduce((akk, item, i) => akk += `${i + 1}. ${item.name} (x${item.quantity}) \n`, '')}
`
  }
  closeConfirmation() {
    this.Showconfirmation = false
  }



  async ngOnInit() {

    await this.cardService.rewriteProduct();
    this.product = this.cardService.GetProduct

    const userInAccount = await this.userData.checkAcc

    !userInAccount ? this.showThatUserNotInAccount = true : this.showThatUserNotInAccount = false

  }
}
