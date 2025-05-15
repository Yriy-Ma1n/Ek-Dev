import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './Header/header-bar/header-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-end';
}
