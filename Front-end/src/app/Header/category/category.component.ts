import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ListCategoryService } from '../../core/services/list-category.service';
import { Router } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-category',
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  hovered: boolean = true;
  router = inject(Router)

  categoryesData = inject(ListCategoryService).dataCategoryes
  listArr = inject(ListCategoryService)

  listCategoryItem: { img: string, name: string, additional:string }[] = []

  hoverToElemet(event: Event) {
    console.log('up')
    const element = event.target as HTMLElement
    if (element.classList.contains("list-category-container")) return
    console.log('123')
    this.hovered = false
    this.showItem(element)
  }
  leaveOfElement() {
    this.hovered = true

  }
  itemIn() {
    this.hovered = false
  }
  itemout() {
    this.hovered = true
    console.log("leav")
  }
  showItem(element: HTMLElement) {
    this.listArr.getChangeData.forEach(item => {
      if (element.classList.contains(`${item.name}`)) {
        this.listCategoryItem = (this.categoryesData[0] as Record<string, any>)[item.name];
      }
    })
  }
  clickCategory(event: Event) {
    this.hovered = true
    const element = (event.target as HTMLElement).parentElement?.textContent

    if (element === 'Смартфони') {
      this.NavigateToPage("Телефон")
    } else if (element === 'Планшети') {
      this.NavigateToPage("Планшет")
    } else if (element === 'Телевізори') {
      this.NavigateToPage('Телевізор')
    } else if (element === 'Холодильники') {
      this.NavigateToPage("Холодильник")
    }
  }
  NavigateToPage(page: string) {
    this.router.navigate(['/tovarList'], { queryParams: { q: page } })
  }


  display = 'none';

  displayOn(event: Event){
    const element = event.target as HTMLElement
    if (element.classList.contains("list-category-container")) return
    this.showItem(element)
    this.display = "flex"
  }

  displayOff(){
    this.display = "none"
  }


}
