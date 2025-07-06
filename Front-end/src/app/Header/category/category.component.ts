import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ListCategoryService } from '../../core/services/list-category.service';
import { Router } from '@angular/router';

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
    const element = event.target as HTMLElement
    if (element.classList.contains("list-category-container")) return
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
  }
  showItem(element: HTMLElement) {
    this.listArr.getChangeData.forEach(item => {
      if (element.classList.contains(`${item.name}`)) {
        this.listCategoryItem = (this.categoryesData[0] as Record<string, any>)[item.name];
      }
    })
  }
  clickCategory(event: Event) {
    
    const element = (event.target as HTMLElement).parentElement?.textContent

    if (element === 'Смартфони') {
      this.NavigateToPage("Телефон")
    } else if (element === 'Планшети') {
      this.NavigateToPage("Планшет")
    } else if (element === 'Телевізори') {
      this.NavigateToPage('Телевизор')
    } else if (element === 'Холодильники') {
      this.NavigateToPage("Холодильник")
    }
  }
  NavigateToPage(page: string) {
    this.router.navigate(['/tovarList'], { queryParams: { q: page } })
  }

}
