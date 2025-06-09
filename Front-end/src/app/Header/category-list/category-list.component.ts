import { Component, inject } from '@angular/core';
import { CardCategoryComponent } from './card-category/card-category.component';
import { NgFor, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListCategoryService } from '../../core/services/list-category.service';

@Component({
  selector: 'app-category-list',
  imports: [CardCategoryComponent, NgFor],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  http = inject(HttpClient)
  router = inject(Router)
  arrDo = inject(ListCategoryService).getArrDo
  nameCategory: { name: string, width: number, height: number, img: string }[] = []


  constructor() {
    this.http.get<{ name: string, width: number, height: number, img: string }[]>('http://localhost:5500/CategoryList').subscribe(item => {
      this.nameCategory = item

    })
  }

  switchToCategory(event: Event) {
    const element = (event.target as HTMLDivElement).parentNode as HTMLElement
    this.arrDo.forEach(item=>{
      element.classList.contains(item.name) ? item.do : false
    })
   
  }
  NavigateToPage(page: string) {
    this.router.navigate(['/tovarList'], { queryParams: { q: page } })
  }



}

