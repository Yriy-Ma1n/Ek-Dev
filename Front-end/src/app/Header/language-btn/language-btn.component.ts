import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-btn',
  imports: [NgStyle],
  templateUrl: './language-btn.component.html',
  styleUrl: './language-btn.component.css'
})
export class LanguageBtnComponent {
  transformArrow = true;
  transformValue = "";
 onClick(){
  if(this.transformArrow){
    this.transformValue = "rotate(180deg)";
  }else{
    this.transformValue = "rotate(0deg)";
  }
   return this.transformArrow = !this.transformArrow;
 }
}
