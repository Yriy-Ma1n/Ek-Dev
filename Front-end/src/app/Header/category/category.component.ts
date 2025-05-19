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
      this.listCategoryItem.push({ img: './header-list/Gadgets/iphone-svg.svg', name: "Смартфони" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/iphone-box.svg', name: "Чохли" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/head-set.svg', name: "Навушники" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/smart-watch.svg', name: "Смартгодинники і браслети" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/power-bank.svg', name: "Повербанки" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/chargeGudget.svg', name: "Зарядки для гаджетів" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/speakers.svg', name: "Портативні колонки" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/Action-camera.svg', name: "Action камери" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/Quadcoper.svg', name: "Квадробери" })
    }
    if(element.classList.contains("Computers")){
      this.listCategoryItem = []
      this.listCategoryItem.push({ img: './header-list/Gadgets/iphone-svg.svg', name: "asd" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/iphone-box.svg', name: "sad" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/head-set.svg', name: "sad" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/smart-watch.svg', name: "sad і браслети" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/power-bank.svg', name: "sad" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/chargeGudget.svg', name: "ads для гаджетів" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/speakers.svg', name: "dsa колонки" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/Action-camera.svg', name: "dsa камери" })
      this.listCategoryItem.push({ img: './header-list/Gadgets/Quadcoper.svg', name: "ad" })
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
