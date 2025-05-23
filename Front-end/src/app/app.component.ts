import { Component } from '@angular/core';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { MainSectionComponent } from "./main-section/main-section.component";

import { BusketPageComponent } from "./busket-page/busket-page.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderBarComponent, RouterOutlet],
=======
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, RouterLinkActive, HeaderBarComponent, RouterOutlet],
>>>>>>> d4ffbc1bdb69390b14f2f106ad1d6a92ca866913
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
