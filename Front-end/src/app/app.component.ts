import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PopularModelsComponent } from './popular-models/popular-models.component';
import { MainSectionComponent } from "./main-section/main-section.component";

import { BusketPageComponent } from "./busket-page/busket-page.component";
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "./footer/footer.component";
import { AdminService } from './admin-page/admin.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderBarComponent, RouterOutlet, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hideLayout = false;
  layout = inject(AdminService)

  constructor() {
    this.layout.hideLayout$.subscribe(value => {
      console.log(value)
      this.hideLayout = value;
    });
  }
}
