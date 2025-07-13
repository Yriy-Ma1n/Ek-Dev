import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { Router } from '@angular/router';
import { User } from '../shared/types/User-Types';

@Component({
  selector: 'app-profile',
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userInAccount: boolean = false;
  http = inject(HttpClient);
  userData = inject(UserDataService);
  router = inject(Router)

  user: User  = {_id:'', name:'', password:'', profileImg:'', cardItem:[]}
  constructor() {
    setTimeout(() => {
      this.userData.user$.subscribe(user => {
        if (user) {
          this.userInAccount = true
          this.user = user
        }
        if (!user?.name) {
          this.router.navigate(['/SingIn'])
        }
      })
    }, 200)

  }

  openSettingPage(){
    this.router.navigate(['/Profile-setting'])
  }

}
