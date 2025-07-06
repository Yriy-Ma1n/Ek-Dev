import { Component, inject } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-setting',
  imports: [],
  templateUrl: './profile-setting.component.html',
  styleUrl: './profile-setting.component.css'
})
export class ProfileSettingComponent {
  User = inject(UserDataService)
  http = inject(HttpClient)

  UserImage:string = ''
  UserId:string = ''

  constructor(){
    this.User.user$.subscribe(data=>{
      this.UserImage = data?.profileImg!
      this.UserId = data?._id!
     })
  }

  addProfileImage(URLInput:HTMLInputElement){
    this.http.post('http://localhost:5500/changeProfileAvatar', {id:this.UserId, URL:URLInput.value}).subscribe(()=>{
      this.User.request()
    })
    
  }

}
