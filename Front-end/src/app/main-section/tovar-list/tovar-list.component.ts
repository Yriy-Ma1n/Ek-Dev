import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import type { characteristic } from '../../shared/types/characteristics-type';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-tovar-list',
  imports: [ProductCardComponent, NgIf],
  templateUrl: './tovar-list.component.html',
  styleUrl: './tovar-list.component.css'
})
export class TovarListComponent {
  http = inject(HttpClient);
  activeRoute = inject(ActivatedRoute);
  title = inject(Title)
  name: string = '';
  data: characteristic[] = []

  constructor() {
    this.activeRoute.queryParams.subscribe(params => {
      this.name = params["q"]
      this.http.get<characteristic[]>(`http://localhost:5500/search?q=${this.name}`).subscribe(data => setTimeout(() => {
        this.title.setTitle(this.name)
        this.data = data
      }))
    })

  }




}
