import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  imports: [],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  router = inject(Router)
    loadSingInPage(){
      this.router.navigate(['/SingIn'])
    }
}
