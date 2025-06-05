import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  route = inject(Router)

  searchTovar(fieldInput:HTMLInputElement){
    this.route.navigate(['/tovarList'], {queryParams:{
      "q":fieldInput.value
    }})
  }

}
