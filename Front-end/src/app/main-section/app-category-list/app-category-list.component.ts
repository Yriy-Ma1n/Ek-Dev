import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-category-list',
  imports: [],
  templateUrl: './app-category-list.component.html',
  styleUrl: './app-category-list.component.css'
})
export class AppCategoryListComponent {

  router = inject(Router)

  NavigateToPage(event: Event) {
    const evntQ = event.target as HTMLElement 
    this.router.navigate(['/tovarList'], {queryParams: {q: evntQ.textContent}})
  }

}
