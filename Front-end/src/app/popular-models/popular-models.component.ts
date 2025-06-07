import { Component } from '@angular/core';
import { ModelDataComponent } from './model-data/model-data.component';

@Component({
  selector: 'app-popular-models',
  imports: [ModelDataComponent ],
  templateUrl: './popular-models.component.html',
  styleUrl: './popular-models.component.css'
})
export class PopularModelsComponent {
 
}
