import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { PageNfComponent } from './page404/page-nf/page-nf.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

export const routes: Routes = [
  {
    path: '',
    component: LoadingScreenComponent
  },
  {
    path: 'Home',
    component: MainSectionComponent,
  },
  {
    path: 'busket',
    component: BusketPageComponent,
    title: 'busket'
  },
   {
    path:'tovar',
    component:ProductCardComponent,
    title:'tovar'
  },
  {
    path: '**',
    component: PageNfComponent,
    title: 'Page not found'
  },
];
