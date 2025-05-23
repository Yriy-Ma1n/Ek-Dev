import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { NewsComponent } from './main-section/news/news.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterOutlet } from '@angular/router';
import { MainSectionComponent } from "./main-section/main-section.component";

import { BusketPageComponent } from "./busket-page/busket-page.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 
 
 
 
 
}
