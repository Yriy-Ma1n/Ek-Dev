import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    router = inject(HttpClient)
    tovar:{_id:string, img:string, name:string, description:string}[] = []
    ngOnInit(){
      this.router.get<{_id: string, img: string, name: string, description: string}[]>('http://localhost:5500/review').subscribe(tovar=>{
        this.tovar = tovar
      })
    }
}
