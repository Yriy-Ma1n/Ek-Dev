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
import { UserDataService } from './core/services/user-data.service';

@Component({
  selector: 'app-root',
  imports: [HeaderBarComponent, RouterOutlet, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hideLayout = false;
  layout = inject(AdminService);

  userInAccount: boolean = false;
  userData = inject(UserDataService)

  constructor() {
    this.layout.hideLayout$.subscribe(value => {
      this.hideLayout = value;
    });
   this.userData.user$.subscribe(data=>{
    if(data?.name){
      data.theme === 'dark' ? this.changeClassBody('dark-theme') : document.body.classList.remove('dark-theme')
      
    }
   })

  }

  changeClassBody(clas:string){
    document.body.classList.add(clas)
  }

}
