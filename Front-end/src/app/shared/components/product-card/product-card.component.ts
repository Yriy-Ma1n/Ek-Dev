import { KeyValuePipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { characteristic } from '../../types/characteristics-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [NgIf, NgFor, KeyValuePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data: characteristic[] = []
  randomCounts: number[] = [0, 0, 0, 0, 0, 0]
  router = inject(Router)


  constructor() {
    this.randomCounts = this.randomCounts.map((item) => item = Math.floor(Math.random() * 70))

  }
  openPageTovar(item: HTMLElement) {
    this.router.navigate(['tovar'], { queryParams: { "title": item.textContent } })
  }
  checkisEmptyArr(arr: string[]): boolean | void {

    if (String(arr) === "[]") {
      return true
    }
  }


}
