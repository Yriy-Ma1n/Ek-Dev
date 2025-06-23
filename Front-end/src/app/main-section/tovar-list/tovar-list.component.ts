import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { HeaderBarComponent } from "../../shared/components/header-bar/header-bar.component";
import { CardTovarComponent } from "../../busket-page/card-tovar/card-tovar.component";
import type { characteristic } from '../../shared/types/characteristics-type';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-tovar-list',
  imports: [ProductCardComponent, HeaderBarComponent, NgIf,],
  templateUrl: './tovar-list.component.html',
  styleUrl: './tovar-list.component.css'
})
export class TovarListComponent {
  http = inject(HttpClient);
  activeRoute = inject(ActivatedRoute);
  name: string = '';
  data: characteristic[] = []

  constructor() {
    this.activeRoute.queryParams.subscribe(params => {
      this.name = params["q"]
      this.http.get<characteristic[]>(`http://localhost:5500/search?q=${this.name}`).subscribe(data => setTimeout(() => {
        console.log(data)//[]
        this.data = data
      }))
    })

  }




}
