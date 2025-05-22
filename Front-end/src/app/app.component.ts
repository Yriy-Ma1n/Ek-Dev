import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { NewsComponent } from './News/news/news.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';

@Component({
  selector: 'app-root',
  imports: [NewsComponent, HeaderBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient)

  connectToReview(){
    this.http.get(`http://localhost:5500/review`).subscribe(data=>{
      console.log(data)
    })
  }
 
 
 
}
