import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  http = inject(HttpClient)
  userData = {}
  constructor() {
    this.http.get<{_id:string, name:string, password:string, profileImg:string}>("http://localhost:5500/userInAccount", {
      withCredentials: true
    }).subscribe(data => {
      console.log(data)  
      if (data.name) {
        
        this.userData = data || null
      }else{
        this.userData = false
      }

    })
  }
  get TakeUser() {
    return this.userData || {
      _id:'',
      name:'',
      password:'',
      profileImg:''
    }
  }
}
