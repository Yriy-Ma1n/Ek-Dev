import { Component } from '@angular/core';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, RouterLinkActive, HeaderBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
