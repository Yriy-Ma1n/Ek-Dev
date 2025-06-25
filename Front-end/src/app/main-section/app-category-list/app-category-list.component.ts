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
    const textEvent = evntQ.textContent
    if(textEvent === 'Телефон') this.navigateFnc(textEvent)
    if(textEvent === 'Планшет') this.navigateFnc(textEvent)
    if(textEvent === 'Телевізор')this.navigateFnc(textEvent)
    if(textEvent === 'Холодільник')this.navigateFnc(textEvent)

  }
  navigateFnc(path:string){
    this.router.navigate(['/tovarList'], {queryParams: {q: path}})

  }

}
