import { Component } from '@angular/core';
import { CardTovarComponent } from './card-tovar/card-tovar.component';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';

@Component({
  selector: 'app-busket-page',
  imports: [CardTovarComponent, HeaderBarComponent],
  templateUrl: './busket-page.component.html',
  styleUrl: './busket-page.component.css'
})
export class BusketPageComponent {
 
}
