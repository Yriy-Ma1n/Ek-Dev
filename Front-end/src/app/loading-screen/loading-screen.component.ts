import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent {
  rout = inject(Router);

  constructor(){
    setTimeout(()=>{
      this.rout.navigate(["Home"]);
    }, 4500);
  }
}
