import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient)
  limit:number = 5
  connected(){
      this.http.get(`http://localhost:5000/products`).subscribe({
        next:(res)=>console.log(res),
        error:(err)=>console.log(err)
      })
  }
  popularProduct(){
     this.http.get(`http://localhost:5000/PopularModel?limit=${this.limit}`).subscribe({
        next:(res)=>console.log(res),
        error:(err)=>console.log(err)
      })
  }
  takeCount(event:Event){
   const element= event.target as HTMLInputElement
   this.limit = Number(element.value) || 5
  }
 
}
