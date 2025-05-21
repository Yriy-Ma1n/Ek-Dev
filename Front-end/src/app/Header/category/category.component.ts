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
    element.classList.contains("Gadgets") ? this.listCategoryItem = this.categoryesData[0].Gadgets : false
    element.classList.contains("Computers") ? this.listCategoryItem = this.categoryesData[0].Computers : false
    element.classList.contains("photo") ? this.listCategoryItem = this.categoryesData[0].Photo : false
    element.classList.contains("TV") ? this.listCategoryItem = this.categoryesData[0].Tv : false
    element.classList.contains("Audio") ? this.listCategoryItem = this.categoryesData[0].Audio : false
    element.classList.contains("Home-technik") ? this.listCategoryItem = this.categoryesData[0].HomeTechnik : false
    element.classList.contains("Climat") ?  this.listCategoryItem = this.categoryesData[0].Climat : false
    element.classList.contains("Home") ?  this.listCategoryItem = this.categoryesData[0].Home : false
    element.classList.contains("Child-tovar") ? this.listCategoryItem = this.categoryesData[0].ChildTovar : false
    element.classList.contains("Car") ?  this.listCategoryItem = this.categoryesData[0].Cars : false
    element.classList.contains("Tool") ? this.listCategoryItem = this.categoryesData[0].Tools : false
    element.classList.contains("Tourism") ?  this.listCategoryItem = this.categoryesData[0].Tourism : false
    element.classList.contains("Sport") ? this.listCategoryItem = this.categoryesData[0].Sport : false
    element.classList.contains("Fashion") ?  this.listCategoryItem = this.categoryesData[0].FashionBeauti : false
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
