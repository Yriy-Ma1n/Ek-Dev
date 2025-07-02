import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<'light'|'dark'>(localStorage.getItem('theme') as any ?? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  constructor() {
    effect(() => {
      const t = this.theme();
      document.body.classList.toggle('dark-theme', t === 'dark');
      localStorage.setItem('theme', t);
    });
  }

  toggle() {
    this.theme.update(prev => prev === 'dark' ? 'light' : 'dark');
  }
}