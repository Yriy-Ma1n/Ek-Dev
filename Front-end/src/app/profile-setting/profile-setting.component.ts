import { Component, inject } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-setting',
  imports: [NgClass],
  templateUrl: './profile-setting.component.html',
  styleUrl: './profile-setting.component.css'
})
export class ProfileSettingComponent {
  User = inject(UserDataService)
  http = inject(HttpClient)
  router = inject(Router)

  UserImage: string = ''
  UserId: string = ''

  showSuccesImageR: boolean = false;
  showSuccesImageG: boolean = false;

  messageTextGreen: string = ''
  messageTextRed: string = ''


  constructor() {
    this.User.user$.subscribe(data => {
      if (!data) this.router.navigate(['/SingIn'])
      this.UserImage = data?.profileImg!
      this.UserId = data?._id!
    })
  }

  addProfileImage(URLInput: HTMLInputElement) {
    this.http.post('http://localhost:5500/changeProfileAvatar', { id: this.UserId, URL: URLInput.value }).subscribe((data) => {
      if (data) {
        this.User.request()
        URLInput.value = ''
        this.showSuccesImageG = true
        this.messageTextGreen = 'Ви успішно змінили фотографію профіля!'
        setTimeout(() => {
          this.showSuccesImageG = false
        }, 2500)
      }

    })
  }
  removeProfileImage() {
    const defaulUrl = 'https://t4.ftcdn.net/jpg/13/11/63/01/240_F_1311630131_47VU96ZZgv9lff8TSCCU1xvnncQQU1wN.jpg'
    this.http.post('http://localhost:5500/changeProfileAvatar', { id: this.UserId, URL: defaulUrl }).subscribe((data) => {
      if (data) {
        this.User.request()
        this.showSuccesImageG = true
        this.messageTextGreen = 'Ви успішно видалили фотографію профіля!'
        setTimeout(() => {
          this.showSuccesImageG = false
        }, 2500)
      }
    })
  }

}
