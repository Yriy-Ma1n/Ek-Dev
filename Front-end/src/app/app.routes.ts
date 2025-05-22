import { Routes } from '@angular/router';
import { CardComponent } from './main-section/card/card.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
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
