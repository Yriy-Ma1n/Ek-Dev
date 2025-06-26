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
    if(textEvent === 'Телефон' || textEvent === 'Зв\'язок і гаджети') this.navigateFnc('Телефон')
    if(textEvent === 'Планшет') this.navigateFnc('Планшет')
    if(textEvent === 'Телевізор' || textEvent === 'Tv відео')this.navigateFnc('Телевізор')
    if(textEvent === 'Холодільник' || textEvent === 'Побутова техніка' )this.navigateFnc('Холодільник')

  }
  navigateFnc(path:string){
    this.router.navigate(['/tovarList'], {queryParams: {q: path}})

  }

}
