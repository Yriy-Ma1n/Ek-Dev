import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../../core/services/user-data.service';

@Component({
  selector: 'app-app-toggle-theme',
  imports: [NgIf],
  templateUrl: './app-toggle-theme.component.html',
  styleUrl: './app-toggle-theme.component.css'
})
export class AppToggleThemeComponent {
  http = inject(HttpClient)

  userService = inject(UserDataService)
  userInAccount: boolean = false;
  userId: string = ''
  currTheme = localStorage.getItem("theme") || ''

  isDark = computed(() => {
    return this.themeService.theme() === 'dark'
  });

  constructor(public themeService: ThemeService) {
    
  }

 

}
