import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-btn',
  imports: [],
  templateUrl: './language-btn.component.html',
  styleUrl: './language-btn.component.css'
})
export class LanguageBtnComponent {
  transformArrow = false;
  transformValue = "rotate(180deg)";
 onClick(){
  if(this.transformArrow){
    this.transformValue = "rotate(180deg)";
  }else{
    this.transformValue = "rotate(0deg)";
  }
   return this.transformArrow = !this.transformArrow;
 }
}
