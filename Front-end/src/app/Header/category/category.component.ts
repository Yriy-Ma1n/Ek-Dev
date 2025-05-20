import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ListCategoryService } from '../../core/services/list-category.service';

@Component({
  selector: 'app-category',
  imports: [NgClass, NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  hovered: boolean = true;

  categoryesData = inject(ListCategoryService).dataCategoryes

  listCategoryItem: { img: string, name: string }[] = []

  hoverToElemet(event: Event) {
    const element = event.target as HTMLElement
    if (element.classList.contains("list-category-container")) return
    this.hovered = false

    if (element.classList.contains("Gadgets")) {
      this.listCategoryItem = this.categoryesData[0].Gadgets
    }
    if(element.classList.contains("Computers")){
      this.listCategoryItem = this.categoryesData[0].Computers
    }
    if(element.classList.contains("photo")){
      this.listCategoryItem = this.categoryesData[0].Photo
    }
     if(element.classList.contains("TV")){
      this.listCategoryItem = this.categoryesData[0].Tv
    }
    if(element.classList.contains("Audio")){
      this.listCategoryItem = this.categoryesData[0].Audio
    }
    if(element.classList.contains("Home-technik")){
      this.listCategoryItem = this.categoryesData[0].HomeTechnik
    }

  }
  leaveOfElement() {
    this.hovered = true

  }
  itemIn(){
    this.hovered = false
  }
  itemout(){
    this.hovered = true
  }
}
