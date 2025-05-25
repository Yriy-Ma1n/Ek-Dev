import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadWordPipe } from '../../pipes/bad-word.pipe';
import { NgFor, NgClass } from '@angular/common';
import { CardService } from '../../../core/services/card.service';

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
  
  commentInput = new FormControl("", [
    Validators.required
  ])

  comments:{comment:string}[] = []

  show:boolean = false
  showAdd:boolean = false

  id:string = crypto.randomUUID()
  backToMainPage() {
    this.router.navigate(["/Home"])
  }
  addComment() {
    if (!this.commentInput.valid){
      this.show = true
      setTimeout(()=>{
        this.show = false
      },2500)
      return 
    }
    this.comments.push({comment:this.commentInput.value!})
    this.commentInput.reset()
  }
  buyButton(element:HTMLButtonElement, name:HTMLElement, photo:HTMLImageElement, price:HTMLElement){
    this.showAdd = true
    element.textContent = 'Добавленно в корзину'
    setTimeout(()=>{
      this.showAdd = false
      element.textContent = 'В корзину'
    },1500)
    const  changedPrice = price.textContent?.replaceAll('грн', '').replaceAll(' ', '')!
    this.CardProduct.addProduct = {_id:this.id, name:name.textContent!, price:+changedPrice, quantity:1, src:photo.src}
  }
}
