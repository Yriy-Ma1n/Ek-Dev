import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tovar-list',
  imports: [],
  templateUrl: './tovar-list.component.html',
  styleUrl: './tovar-list.component.css'
})
export class TovarListComponent {
  http = inject(HttpClient)
  activeRoute = inject(ActivatedRoute)
  name:string = ''

  constructor(){
    this.activeRoute.queryParams.subscribe(params=>{
      this.name = params["q"]
    })
  
  }
}
