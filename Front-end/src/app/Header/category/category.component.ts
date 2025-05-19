import { NgClass} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [NgClass],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  hovered:boolean = true

  listCategoryItem:{img:string, name:string}[] = []

  hoverToElemet(event:Event){
    const element = event.target as HTMLElement
    if(element.classList.contains("list-category-container")) return
    this.hovered = false
    element.classList.contains("Gadgets")
  }
  leaveOfElement(){
    this.hovered = true
    
  }
}
