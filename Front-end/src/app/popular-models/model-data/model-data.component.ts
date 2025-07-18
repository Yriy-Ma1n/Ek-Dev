import { NgClass, NgFor, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import type { apiProduct } from '../../shared/types/apiGetProduct';
import { Router } from '@angular/router';
import { CurrencySwitcherPipe } from '../../pipes/currency-switcher.pipe';

@Component({
  selector: 'app-model-data',
  imports: [NgFor, NgClass,CurrencySwitcherPipe],
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
  http = inject(HttpClient)
  router = inject(Router)
  Currency =  localStorage.getItem('currencu') ? localStorage.getItem('currencu')! : "UAH";

  ngOnInit() {
     this.getPageContent();
    console.log(this.Currency)
  }


  getPageContent() {
    this.http.get<apiProduct[]>(
      `http://localhost:5500/PopularModel?limit=${this.pageSize}&page=${this.currentPage - 1}`
    ).subscribe((data) => {
      this.products = data;
      this.originalArr = data
    });
    this.http.get<apiProduct[]>(
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
    if(!input){
      this.products = this.originalArr
      return
    }

    this.products = this.products.filter(item=>item.name.toLocaleLowerCase().includes(input.toLowerCase()))
    
  }
  openTovarPage(item:HTMLSpanElement){
     this.router.navigate(['/tovar'], { queryParams: { id: item.textContent } })
  }

    
  
}

