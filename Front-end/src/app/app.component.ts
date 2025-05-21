import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
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
