import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { characteristic } from '../../types/characteristics-type';

@Component({
  selector: 'app-product-card-characteristics',
  imports: [NgFor],
  templateUrl: './product-card-characteristics.component.html',
  styleUrl: './product-card-characteristics.component.css'
})
export class ProductCardCharacteristicsComponent {
  @Input() characteristic: characteristic[] = []
  characteristic_name: string[] = []

  constructor(){
    setTimeout(()=>{
      this.characteristic_name = Object.keys(this.characteristic[0].characteristics)
    },100)
  }

  getCharacteristics(i:number){
    const arr = this.characteristic_name.map(item=>{
      return this.characteristic[0].characteristics[item]
    })
    return arr[i]
  }
}
