import { NgFor} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-model-data',
  imports: [NgFor],
  templateUrl: './model-data.component.html',
  styleUrl: './model-data.component.css'
})
export class ModelDataComponent {

  products: { _id: string, img: string, name: string, cost: number }[] = [];
  currentPage = 1;
  pageSize = 5;
  nextPageLength = 0;
  router = inject(HttpClient)

  ngOnInit() {
    this.getPageContent();
  }
  
  getPageContent() {
    this.router.get<{ _id: string, img: string, name: string, cost: number }[]>(
      `http://localhost:5500/PopularModel?limit=${this.pageSize}&page=${this.currentPage-1}`
    ).subscribe((data) => {
      this.products = data;
    });
    this.router.get<{ _id: string, img: string, name: string, cost: number }[]>(
      `http://localhost:5500/PopularModel?limit=${this.pageSize}&page=${this.currentPage}`
    ).subscribe((data) => {
      this.nextPageLength = data.length;
    });
  }

  nextPage() {
    this.currentPage ++;
    this.getPageContent()
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPageContent();
    }
  }
}

