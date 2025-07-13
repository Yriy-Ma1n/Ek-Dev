import { Component, inject } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { imageUrlValidator } from '../admin-page/create-tovar/ImgValidator.directive';
import { MessageComponent } from '../shared/components/message/message.component';


@Component({
  selector: 'app-profile-setting',
  imports: [NgClass, MessageComponent, NgIf, NgClass, ReactiveFormsModule],
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

  formControlUserImg = new FormControl('',{
      validators: [Validators.required],
      asyncValidators: [imageUrlValidator()],
      updateOn: 'blur'
  });
  UserImgNgIf = false;
  passwordNotTheSame:boolean = false



  constructor() {
    this.accessRight()

  }

  addProfileImage(URLInput: HTMLInputElement) {
    if(this.formControlUserImg.invalid){
      this.UserImgNgIf = true;
      this.showSuccesImageR = true
      this.messageTextRed = 'Помилка('
      setTimeout(() => {
        this.showSuccesImageR = false
      }, 2500)
      return
    }else{
      this.UserImgNgIf = false;
    }

    this.http.patch('http://localhost:5500/changeProfileAvatar', { id: this.UserId, URL: URLInput.value }, { withCredentials: true }).subscribe((data) => {
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
    this.http.patch('http://localhost:5500/changeProfileAvatar', { id: this.UserId, URL: defaulUrl }, { withCredentials: true }).subscribe((data) => {
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

  changeUserName(username: HTMLInputElement, event: Event) {
    event.preventDefault()
    const name = username.value
    if (name === '') return

    this.http.patch<{ message: "Імя користувача зайнято" } | { sended: true }>('http://localhost:5500/changeUserName', { username: name }, { withCredentials: true }).subscribe(data => {
        console.log('another way1')
      
      if ('sended' in data) {
        this.messageTextGreen = 'Ви успішно змінили логін користувача'
        this.showSuccesImageG = true
        setTimeout(() => {
          this.showSuccesImageG = false
          location.reload()
        }, 1200)
      } else {
        this.messageTextRed = 'Ім\'я користувача зайнято'
        this.showSuccesImageR = true
        setTimeout(() => this.showSuccesImageR = false, 1200)
      }
    })

  }
  async getUser() {

    return await this.User.show()
  }
  async accessRight() {
    const user = await this.getUser()


    if ("userInAccount" in user) {
      this.router.navigate(['/SingIn'])
    } else {
      this.UserImage = user?.profileImg!
      this.UserId = user?._id!
    }
  }

  changePassword(event:Event, oldPassword:HTMLInputElement, newPassword:HTMLInputElement){
    event.preventDefault()
    this.http.patch('http://localhost:5500/changePassword', 
      {oldPassword:oldPassword.value, newPassword:newPassword.value} ,{withCredentials:true})
      .subscribe(data=>{
      if('message' in data){
        this.passwordNotTheSame = true
      }else{
        this.showSuccesImageG = true
        this.messageTextGreen = 'Ваш пароль успішно змінено!✅'
        setTimeout(()=>location.reload(), 1500)
      }
     

    })
  }

}
