import { Component } from '@angular/core';
import { CurrencySwitcherPipe } from '../pipes/currency-switcher.pipe';

@Component({
  selector: 'app-change-currency',
  imports: [],
  templateUrl: './change-currency.component.html',
  styleUrl: './change-currency.component.css'
})
export class ChangeCurrencyComponent {
  transformArrow = false;
  transformValue = "rotate(180deg)";
  displayValue = "none";
  CurrencuValue:string = localStorage.getItem('currencu')! || "UAH";

 onClick(){
  if(this.transformArrow){
    setTimeout(()=>{this.displayValue = "none"}, 200);
    this.transformValue = "rotate(180deg)";
    document.querySelector<HTMLElement>(".mini-window-language")!.classList.remove('open');
    document.querySelector<HTMLElement>(".mini-window-language")!.classList.add('close');
  }else{
    this.displayValue = "flex";
    this.transformValue = "rotate(0deg)";
    document.querySelector<HTMLElement>(".mini-window-language")!.classList.add('open');
    document.querySelector<HTMLElement>(".mini-window-language")!.classList.remove('close');
  }
   return this.transformArrow = !this.transformArrow;
 }

  getCurrencu(event: HTMLElement){
  localStorage.setItem('currencu', event.textContent!)
  this.CurrencuValue = localStorage.getItem('currencu')!;
  location.reload();
  this.transformArrow = true;
  this.onClick();
 }
}
