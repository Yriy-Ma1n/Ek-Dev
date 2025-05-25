import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-characteristics',
  imports: [NgFor],
  templateUrl: './product-card-characteristics.component.html',
  styleUrl: './product-card-characteristics.component.css'
})
export class ProductCardCharacteristicsComponent {
  characteristic = [
    { name: "Екран:", info: "6.82, AMOLED (LTPO), 3168x1440, 510 ppi, 120 Гц" },
    { name: "Камера:", info: "3 модулі, 50 МП, + 50 МП, та 50 МП" },
    { name: "Відео:", info: "fullHD 60 к/с, 4K, стабілізація, уповільнена зйомкa" },
    { name: "Память:", info: "256 ГБ, UFS 4.0" },
    { name: "Процесор:", info: "Snapdragon 8 Elite" },
    { name: "ОЗП:", info: "12 ГБ, LPDDR5X" },
    { name: "Акумулятор:", info: "6000 мАгод" },
    { name: "Корпус:", info: "скло, 213 г, товщина 8.5 мм" }
  ]
}
