import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { SinginAdminComponent } from './Header/singin-admin/singin-admin.component';

export const routes: Routes = [
  {
    path: '',
    component: LoadingScreenComponent
  },
  {
    path:'Home',
    component:MainSectionComponent
  },
  {
    path:'busket',
    component:BusketPageComponent,
  },
  {
    path:'admin',
    component:SinginAdminComponent,
  }
];
