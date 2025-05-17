import { Component, inject } from '@angular/core';
import { CardCategoryComponent } from './card-category/card-category.component';
import { NgFor, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  imports: [CardCategoryComponent, NgFor],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
    http = inject(HttpClient)
    nameCategory:{name:string, width:number, height:number, img:string}[] = []

    constructor(){
      this.http.get<{name:string, width:number, height:number, img:string}[]>('http://localhost:5500/CategoryList').subscribe(item=>{
        this.nameCategory = item
        console.log(this.nameCategory)
      })
    }
   
}
//<{_id: string, img: string, name: string, description: string}[]>
