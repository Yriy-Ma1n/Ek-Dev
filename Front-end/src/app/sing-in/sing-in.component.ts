import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../core/services/user-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sing-in',
  imports: [NgIf],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  router = inject(Router)
  UserInAccountData = inject(UserDataService)
  UserInAccount: boolean = false
  loadSingInPage() {
    this.router.navigate(['/SingIn'])
  }
  user:{_id:string, name:string, password:string, profileImg:string} = {_id:'', name:'', password:'', profileImg:''}
  constructor() {
    setTimeout(() => {
      if (Object.keys(this.UserInAccountData.TakeUser).length === 0){
        this.UserInAccount = false
      }else{
        this.user = this.UserInAccountData.TakeUser
        this.UserInAccount = true
      }
        
      }, 5)
  }
}
