import { Component, computed } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-app-toggle-theme',
  imports: [NgIf],
  templateUrl: './app-toggle-theme.component.html',
  styleUrl: './app-toggle-theme.component.css'
})
export class AppToggleThemeComponent {
  isDark = computed(() => this.themeService.theme() === 'dark');

  constructor(public themeService: ThemeService){}
}
