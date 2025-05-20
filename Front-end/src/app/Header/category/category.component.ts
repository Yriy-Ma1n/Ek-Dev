import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [NgClass, NgFor],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  hovered: boolean = true

  listCategoryItem: { img: string, name: string }[] = []

  hoverToElemet(event: Event) {
    const element = event.target as HTMLElement
    if (element.classList.contains("list-category-container")) return
    this.hovered = false

    if (element.classList.contains("Gadgets")) {
      this.listCategoryItem = []
    }
    if(element.classList.contains("Computers")){
      this.listCategoryItem = []
      
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
