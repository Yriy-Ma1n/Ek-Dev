import { Routes } from '@angular/router';

import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';

export const routes: Routes = [
  {
    path:'',
    component:MainSectionComponent
  },
  {
    path:'busket',
    component:BusketPageComponent,
    title:'busket'
  }
];
