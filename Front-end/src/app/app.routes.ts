import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { PageNfComponent } from './page404/page-nf/page-nf.component';
import { ProductCardInnerComponent } from './shared/components/product-card-inner/product-card-inner.component';
import { TovarListComponent } from './main-section/tovar-list/tovar-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SingInPageComponent } from './sing-in-page/sing-in-page.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { UserOrderComponent } from './user-order/user-order.component';

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
    path:'SingIn',
    component:SingInPageComponent,
    title:'SingIn'
  },
  {
    path:'Register',
    component:RegisterComponent,
    title:'Register'
  },
  {
    path:'Profile',
    component:ProfileComponent,
    title:'Profile'
  },
   {
    path:'Profile-setting',
    component:ProfileSettingComponent,
    title:'Profile settng'
  },
  {
    path:'OrderHistory',
    component:UserOrderComponent,
    title:'OrderHistory'
  },
  {
    path: '**',
    component: PageNfComponent,
    title: 'Page not found'
  },

  
];
