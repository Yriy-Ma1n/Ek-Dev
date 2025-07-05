import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PopularModelsComponent } from './popular-models/popular-models.component';
import { MainSectionComponent } from "./main-section/main-section.component";

import { BusketPageComponent } from "./busket-page/busket-page.component";
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient)

  constructor(){
    this.http.get("http://localhost:5500/userInAccount",{
      withCredentials:true
    }).subscribe(data=>console.log('main', data))

    
  }

}