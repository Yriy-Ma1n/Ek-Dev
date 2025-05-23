import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-nf',
  imports: [],
  templateUrl: './page-nf.component.html',
  styleUrl: './page-nf.component.css'
})
export class PageNfComponent {
  router = inject(Router)
  back(){
    this.router.navigate(["/"])
  }
}
