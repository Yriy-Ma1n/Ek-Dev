import { effect, inject, Injectable, signal } from '@angular/core';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<'light' | 'dark'>(localStorage.getItem('theme') as any ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  userData = inject(UserDataService)

  userInAccount: boolean | null = false 


  constructor() {
    this.userData.UserinAccount$.subscribe(data => {
      this.userInAccount = data
      if (data === null) {
        effect(() => {
          const t = this.theme();
          document.body.classList.toggle('dark-theme', t === 'dark');
          localStorage.setItem('theme', t);
        });
      }
    })
  }

  toggle() {
    this.theme.update(prev => prev === 'dark' ? 'light' : 'dark');
  }
}