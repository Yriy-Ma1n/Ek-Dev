import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  hoverToElemet(event:Event){
    const element = event.target as HTMLElement
    if(element.classList.contains("list-category-container")) return
    console.log(element)
  }
}
