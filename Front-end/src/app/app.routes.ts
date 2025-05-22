import { Routes } from '@angular/router';
import { CardComponent } from './News/card/card.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{
    path:'card',
    component:CardComponent,
    title:'card-page'
 }
];
