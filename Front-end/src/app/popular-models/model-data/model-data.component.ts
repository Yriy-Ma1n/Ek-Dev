import { NgClass, NgFor, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import type { apiProduct } from '../../shared/types/apiGetProduct';

@Component({
  selector: 'app-model-data',
  imports: [NgFor, NgClass],
  templateUrl: './model-data.component.html',
  styleUrl: './model-data.component.css'
})
export class ModelDataComponent {

  products: apiProduct[] = [];
  originalArr:apiProduct[] = []
  currentPage = 1;
  pageSize = 5;
  nextPageLength = 0;
  show: boolean = true
  padding: number = 0
  router = inject(HttpClient)


  ngOnInit() {
     this.getPageContent();
    
  }

  getPageContent() {
    this.router.get<apiProduct[]>(
      `http://localhost:5500/PopularModel?limit=${this.pageSize}&page=${this.currentPage - 1}`
    ).subscribe((data) => {
      this.products = data;
    });
    this.router.get<apiProduct[]>(
      `http://localhost:5500/PopularModel?limit=${this.pageSize}&page=${this.currentPage}`
    ).subscribe((data) => {
      this.nextPageLength = data.length;
    });
  }

  nextPage() {
    this.currentPage++;
    this.getPageContent()
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPageContent();
    }
  }
  showInp() {
    this.show = !this.show
  }
  filteredItem(event:Event){
    const input = (event.currentTarget as HTMLInputElement).value
    this.products.filter(item=>item.name.includes(input))
    console.log(this.originalArr)
  }

    
  
}

