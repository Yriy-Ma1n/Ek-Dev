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
    if (this.userInAccount) {
      this.currTheme === 'ligth' ? this.currTheme = 'dark' : this.currTheme = 'ligth'
      this.http.patch('http://localhost:5500/changeStatusTheme', { id: this.userId, theme: this.currTheme }).subscribe(data=>console.log(data))
    }
    return this.themeService.theme() === 'dark'
  });

  constructor(public themeService: ThemeService) {
    this.getUserData()
  }

  getUserData() {
    this.userService.UserinAccount$.subscribe(data => {
      console.log(data)
      if (data) {
        this.userInAccount = data
      }
    })
    this.userService.user$.subscribe(data => {
      if (data) {
        this.userId = data._id
      }
    })
  }


}
