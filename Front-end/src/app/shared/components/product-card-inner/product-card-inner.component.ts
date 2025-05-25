import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardCharacteristicsComponent } from '../product-card-characteristics/product-card-characteristics.component';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-card-inner',
  imports: [ProductCardCharacteristicsComponent, HeaderBarComponent, ReactiveFormsModule],
  templateUrl: './product-card-inner.component.html',
  styleUrl: './product-card-inner.component.css'
})
export class ProductCardInnerComponent {
  router = inject(Router)

  commentInput = new FormControl("", [
    Validators.required
  ])

  backToMainPage() {
    this.router.navigate(["/Home"])
  }
  addComment(){
    if(this.commentInput.valid){
      console.log('send')
    }
  }
}
