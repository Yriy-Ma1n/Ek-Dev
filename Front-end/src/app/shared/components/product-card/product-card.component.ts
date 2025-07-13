import { KeyValuePipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { characteristic } from '../../types/characteristics-type';
import { Router } from '@angular/router';
import { CurrencySwitcherPipe } from '../../../pipes/currency-switcher.pipe';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-card',
  imports: [NgIf, NgFor, KeyValuePipe, CurrencySwitcherPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data: characteristic[] = []
  randomCounts: number[] = [0, 0, 0, 0, 0, 0]
  router = inject(Router)
    Currency =  localStorage.getItem('currencu') ? localStorage.getItem('currencu')! : "UAH";
    title = inject(Title)


  constructor() {
    this.randomCounts = this.randomCounts.map((item) => item = Math.floor(Math.random() * 70))
  }
  openPageTovar(item: HTMLSpanElement) {
    this.router.navigate(['tovar'], { queryParams: { "id": item.textContent } })
    this.title.setTitle(item.textContent!)
  }
  checkisEmptyArr(arr: string[]): boolean | void {

    if (String(arr) === "[]") {
      return true
    }
  }


}
