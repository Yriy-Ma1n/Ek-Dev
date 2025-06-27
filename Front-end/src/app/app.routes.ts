import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { PageNfComponent } from './page404/page-nf/page-nf.component';
import { ProductCardInnerComponent } from './shared/components/product-card-inner/product-card-inner.component';
import { TovarListComponent } from './main-section/tovar-list/tovar-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppCategoryListComponent } from './main-section/app-category-list/app-category-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LoadingScreenComponent,
    title: 'loading Screen'
  },
  {
    path: 'Home',
    component: MainSectionComponent,
    title: 'home'
  },
  {
    path: 'busket',
    component: BusketPageComponent,
    title: 'busket'
  },
   {
    path:'tovar',
    component:ProductCardInnerComponent,
   
  },
  {
    path: 'admin',
    component:AdminPageComponent,
    title: 'admin'
  },
  {
     path:'tovarList',
    component:TovarListComponent,
    title:'catagol tovars'
  },
  {
    path: '**',
    component: PageNfComponent,
    title: 'Page not found'
  },

  
];
