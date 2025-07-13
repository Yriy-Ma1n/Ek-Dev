import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadWordPipe } from '../../pipes/bad-word.pipe';
import { NgFor, NgClass, NgIf, KeyValuePipe } from '@angular/common';
import { CardService } from '../../../core/services/card.service';
import { HttpClient } from '@angular/common/http';
import { LaptopItem } from '../../types/LapTopItem-type';
import type { characteristic } from '../../types/characteristics-type';
import { FooterComponent } from "../../../footer/footer.component";
import { CurrencySwitcherPipe } from '../../../pipes/currency-switcher.pipe';
import { Title } from '@angular/platform-browser';
import { UserDataService } from '../../../core/services/user-data.service';
import { MessageComponent } from "../message/message.component";
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
    CurrencySwitcherPipe,
    MessageComponent,
    KeyValuePipe
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

        this.id = this.data[0]?._id
        this.comments = data[0].comments //Достаем из базы комент по id и записываем в comments для рендера
        console.log(data)
        this.title.setTitle(titleTovar)
      })
    })

  }


  commentInput = new FormControl("", [Validators.required])

  showComment: boolean = false
  showAdd: boolean = false

  id: string = this.data[0]?._id

  comments: { name: string, message: string, image: string, date: string }[] = []
  dateOptions:Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }

  backToMainPage() {
    history.back()
  }
  async addComment() {
    if (!this.commentInput.valid) {
      this.showComment = true
      setTimeout(() => this.showComment = false, 2500)
      return
    }
    const userInAccount = await this.userData.checkAcc

    if (userInAccount) {
      const dataUser = await this.userData.getAsyncUser()
      const date = new Date().toLocaleString('en-US', this.dateOptions).replace(',', '-')
      const userMessage = { name: dataUser.name, message: this.commentInput.value!, image: dataUser.profileImg, date: date }
      this.comments.push(userMessage)
      this.commentInput.reset()
      this.http.post('http://localhost:5500/addCommentToProduct', {...userMessage, tovarId:this.id}).subscribe(data=>console.log(data))
    }

  }

  async buyButton(element: HTMLButtonElement, name: HTMLElement, photo: HTMLImageElement, price: HTMLElement) {
    const userInAccount = await this.userData.checkAcc

    if (!userInAccount) {
      this.router.navigate(['/SingIn'])
      return
    }


    this.updateUI(true, 'Добавленно в корзину', true, element)
    setTimeout(() => this.updateUI(false, 'В корзину', false, element), 1500)

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


    this.http.patch('http://localhost:5500/addItemToCard', { item: { _Itemid: this.id, name: name.textContent!, price: +uahPrise!, quantity: 1, src: photo.src } }, { withCredentials: true }).subscribe(async (data) => {
      await this.CardProduct.rewriteProduct();
    })

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
  messageR: string = 'Напишіть що небудь щоб додати коментар'
  messageG: string = 'Товар було додано до корзини!'



}
