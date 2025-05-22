import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { NewsComponent } from './News/news/news.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [NewsComponent, HeaderBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

 
 
 
 
}
