import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './Header/header-bar/header-bar.component';
import { NewsComponent } from './News/news/news.component';

@Component({
  selector: 'app-root',
  imports: [HeaderBarComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  
=======
  http = inject(HttpClient)

  connectToReview(){
    this.http.get(`http://localhost:5500/review`).subscribe(data=>{
      console.log(data)
    })
  }
 
 
 
>>>>>>> dev
}
