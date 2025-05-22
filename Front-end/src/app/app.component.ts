import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { NewsComponent } from './main-section/news/news.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainSectionComponent } from "./main-section/main-section.component";
import { CardComponent } from "./main-section/card/card.component";
import { BusketPageComponent } from "./busket-page/busket-page.component";

@Component({
  selector: 'app-root',
  imports: [NewsComponent, HeaderBarComponent, MainSectionComponent, BusketPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 
 
 
 
 
}
