import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BadWordPipe } from '../../pipes/bad-word.pipe';
import { NgFor, NgClass } from '@angular/common';

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

  commentInput = new FormControl("", [
    Validators.required
  ])

  comments:{comment:string}[] = []

  show:boolean = false

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
}
