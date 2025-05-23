import { Routes } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> d4ffbc1bdb69390b14f2f106ad1d6a92ca866913
import { MainSectionComponent } from './main-section/main-section.component';
import { BusketPageComponent } from './busket-page/busket-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

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
  }
];
