import { Routes } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: LoadingScreenComponent,
    },
    {
        path: "Home",
        component: HomeComponent,
    }
];
