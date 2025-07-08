import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadWordPipe } from '../../pipes/bad-word.pipe';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { CardService } from '../../../core/services/card.service';
import { HttpClient } from '@angular/common/http';
import { LaptopItem } from '../../types/LapTopItem-type';
import type { characteristic } from '../../types/characteristics-type';
import { FooterComponent } from "../../../footer/footer.component";
import { CurrencySwitcherPipe } from '../../../pipes/currency-switcher.pipe';
import { Title } from '@angular/platform-browser';
import { UserDataService } from '../../../core/services/user-data.service';
@Component({
  selector: 'app-product-card-inner',
  imports: [
    ProductCardCharacteristicsComponent,
    HeaderBarComponent,
    ReactiveFormsModule,
    BadWordPipe,
    NgFor,
    NgClass,
    NgIf,
    FooterComponent,
    CurrencySwitcherPipe
  ],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  CardProduct = inject(CardService)
  Currency = localStorage.getItem('currencu') ? localStorage.getItem('currencu')! : "UAH";
  title = inject(Title)
  http = inject(HttpClient)
  data: any[] = [] //Тут будут все характеристики и описание к товару
  name: string = ''
  ram: boolean = false;
  userData = inject(UserDataService);

  constructor() {
    this.activeRoute.queryParams.subscribe(params => {
      const titleTovar = params["id"]
      this.http.get<any[]>(`http://localhost:5500/search?q=${titleTovar}`).subscribe(data => {

        this.data = []

        this.ram = false

        if (!data[0]) return

        !data[0].MemoryRam ? this.ram = false : false
        this.data = [...data]

        console.log('here')
        console.log(data)

        this.id = this.data[0]?._id
        this.comments = JSON.parse(localStorage.getItem(`comment:${this.id}`) || '[]') //Достаем из localStorage комент по id и записываем в comments для рендера

        this.title.setTitle(titleTovar)
      })
    })

  }


  commentInput = new FormControl("", [Validators.required])

  showComment: boolean = false
  showAdd: boolean = false

  id: string = this.data[0]?._id

  comments: { comment: string }[] = []

  backToMainPage() {
    history.back()
  }
  addComment() {
    if (!this.commentInput.valid) {
      this.showComment = true
      setTimeout(() => this.showComment = false, 2500)
      return
    }
    this.comments.push({ comment: this.commentInput.value! })
    this.commentInput.reset()
    localStorage.setItem(`comment:${this.id}`, JSON.stringify(this.comments))
  }

  async buyButton(element: HTMLButtonElement, name: HTMLElement, photo: HTMLImageElement, price: HTMLElement) {
    this.updateUI(true, 'Добавленно в корзину', true, element)

    setTimeout(() => this.updateUI(false, 'В корзину', false, element), 1500)
    console.log(this.Currency);
    let changedPrice
    let uahPrise
    if (this.Currency === "UAH") {
      changedPrice = price.textContent?.replaceAll('₴', '').replaceAll(' ', '')!;
      uahPrise = `${(+changedPrice).toFixed(0)}`
    } else if (this.Currency === "USD") {
      changedPrice = price.textContent?.replaceAll('$', '').replaceAll(' ', '')!
      uahPrise = `${(+changedPrice * 41.85).toFixed(2)}`
    } else if (this.Currency === "EUR") {
      changedPrice = price.textContent?.replaceAll('€', '').replaceAll(' ', '')!
      uahPrise = `${(+changedPrice * 49.43).toFixed(2)}`
    }

    const userId = this.userData.datas?._id

    this.http.patch('http://localhost:5500/addItemToCard', { id: userId, item: { _Itemid: this.id, name: name.textContent!, price: +uahPrise!, quantity: 1, src: photo.src } }).subscribe(data => console.log(data))


    await this.CardProduct.rewriteProduct();

  }


  updateUI(show: boolean, text: string, disabled: boolean, element: HTMLButtonElement) {
    this.showAdd = show
    element.textContent = text
    element.disabled = disabled
  }

  sendArr() {
    return [this.data[0].characteristics]
  }

  checkisEmptyArr(arr: string[]): boolean | void {

    if (String(arr) === "[]") {
      return true
    }
  }



}
