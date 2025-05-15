import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchComponent } from '../search/search.component';
import { ThemeBtnComponent } from '../theme-btn/theme-btn.component';
import { LanguageBtnComponent } from '../language-btn/language-btn.component';
import { SinginAdminComponent } from '../singin-admin/singin-admin.component';

@Component({
  selector: 'app-header-bar',
  imports: [LogoComponent, SearchComponent, ThemeBtnComponent, LanguageBtnComponent, SinginAdminComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {

}
