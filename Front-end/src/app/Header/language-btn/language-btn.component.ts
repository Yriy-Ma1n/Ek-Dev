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
  displayValue = "none";
  languageValue:string = "UA";

 onClick(){
  if(this.transformArrow){
    this.displayValue = "none";
    this.transformValue = "rotate(180deg)";
  }else{
    this.displayValue = "flex";
    this.transformValue = "rotate(0deg)";
  }
   return this.transformArrow = !this.transformArrow;
 }

 getLanguage(event: HTMLElement){
  this.languageValue = String(event.textContent);
  this.transformArrow = true;
  this.onClick();
 }
}
