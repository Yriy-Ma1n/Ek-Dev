import { Component, inject } from '@angular/core';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadWordPipe } from '../../pipes/bad-word.pipe';
import { NgFor, NgClass } from '@angular/common';
import { CardService } from '../../../core/services/card.service';
import { HttpClient } from '@angular/common/http';
import { LaptopItem } from '../../types/LapTopItem-type';
import { characteristic } from '../../types/characteristics-type';
@Component({
  selector: 'app-product-card-inner',
  imports: [
    ProductCardCharacteristicsComponent,
    HeaderBarComponent,
    ReactiveFormsModule,
    BadWordPipe,
    NgFor,
    NgClass
  ],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {
  router = inject(Router)
  CardProduct = inject(CardService)

  http = inject(HttpClient)
  data: characteristic[] = []

  constructor() {
    this.http.get<LaptopItem[]>('http://localhost:5500/Laptop').subscribe(data => {
      this.data = data
      this.parseStrToArr()
      this.id = this.data[0]?._id
    })


  }

  commentInput = new FormControl("", [
    Validators.required
  ])

  comments: { comment: string }[] = []

  show: boolean = false
  showAdd: boolean = false

  id: string = this.data[0]?._id

  backToMainPage() {
    this.router.navigate(["/Home"])
  }
  addComment() {
    if (!this.commentInput.valid) {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 2500)
      return
    }
    this.comments.push({ comment: this.commentInput.value! })
    this.commentInput.reset()
  }
  buyButton(element: HTMLButtonElement, name: HTMLElement, photo: HTMLImageElement, price: HTMLElement) {
    this.showAdd = true

    element.textContent = 'Добавленно в корзину'
    element.disabled = true
    setTimeout(() => {
      this.showAdd = false
      element.textContent = 'В корзину'
      element.disabled = false
    }, 1500)
    const changedPrice = price.textContent?.replaceAll('грн', '').replaceAll(' ', '')!

    this.CardProduct.addProduct = { _id: this.id, name: name.textContent!, price: +changedPrice, quantity: 1, src: photo.src }


  }

  parseStrToArr() {
    this.data[0].MemoryRam = JSON.parse(String(this.data[0].MemoryRam))
    this.data[0].categoryDescription = JSON.parse(this.data[0].categoryDescription)
    this.data[0].secondaryPhoto = JSON.parse(this.data[0].secondaryPhoto)
    this.data[0].colors = JSON.parse(this.data[0].colors)
  }

}
