import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { PageNfComponent } from './page404/page-nf/page-nf.component';
import { ProductCardInnerComponent } from './shared/components/product-card-inner/product-card-inner.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

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
    component:ProductCardInnerComponent,
    title:'tovar'
  },
  {
    path: 'admin',
    component:AdminPageComponent,
  },
  {
    path: '**',
    component: PageNfComponent,
    title: 'Page not found'
  },
];
