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
@Component({
  selector: 'app-product-card-inner',
  imports: [
    ProductCardCharacteristicsComponent,
    HeaderBarComponent,
    ReactiveFormsModule,
    BadWordPipe,
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  CardProduct = inject(CardService)

  http = inject(HttpClient)
  data: characteristic[] = [] //Тут будут все характеристики и описание к товару


  ram: boolean = false;


  constructor(private cdr:ChangeDetectorRef) {
    setTimeout(()=>console.log(this.data[0]),1000)
    this.activeRoute.queryParams.subscribe(params => {
      console.log(params)
      this.http.get<any[]>(`http://localhost:5500/search?q=${params["title"]}`).subscribe(data => {
        console.log(data)
        this.data = []

        this.ram = false

        if (!data[0]) return

       
        !data[0].MemoryRam ? this.ram = false : false
        this.data = [...data]
        this.cdr.detectChanges()

        this.id = this.data[0]?._id
        this.comments = JSON.parse(localStorage.getItem(`comment:${this.id}`) || '[]') //Достаем из localStorage комент по id и записываем в comments для рендера
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

  buyButton(element: HTMLButtonElement, name: HTMLElement, photo: HTMLImageElement, price: HTMLElement) {
    this.updateUI(true, 'Добавленно в корзину', true, element)

    setTimeout(() => this.updateUI(false, 'В корзину', false, element), 1500)

    const changedPrice = price.textContent?.replaceAll('грн', '').replaceAll(' ', '')!

    this.CardProduct.addProduct = { _id: this.id, name: name.textContent!, price: +changedPrice, quantity: 1, src: photo.src }

  }


  updateUI(show: boolean, text: string, disabled: boolean, element: HTMLButtonElement) {
    this.showAdd = show
    element.textContent = text
    element.disabled = disabled
  }

  sendArr(){
    return [this.data[0].characteristics]
  }

  checkisEmptyArr(arr:string[]):boolean|void{
    
    if(String(arr) === "[]"){
      return true
    }
  }

}
