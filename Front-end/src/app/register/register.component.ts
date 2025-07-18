import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
import { TheSamePasswordValidator } from './theSamePassword.validators.directive';
import { MessageComponent } from '../shared/components/message/message.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass, NgIf, MessageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router)

  textNotEqualPassError: string = ''
  showNotEqualPassError: boolean = false

  http = inject(HttpClient)

  showEror: boolean = false;
  showSucces: boolean = false;

  messageTextRed: string = ''
  messageTextGreen: string = ''

  showPassword: boolean = false;
  showEmail: boolean | string = false;
  showName: boolean = false



  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)])
  }, [TheSamePasswordValidator()])

  NavigateToLogin() {
    this.router.navigate(['/SingIn'])
  }



  register(name: HTMLInputElement, password: HTMLInputElement, email: HTMLInputElement) {
    if (!this.registerForm.valid) {
      if (this.registerForm.errors) {
        this.textNotEqualPassError = this.registerForm.errors!['PasswordValidator']
        this.showNotEqualPassError = true
      }
      else {
        this.showNotEqualPassError = false
      }
      if (this.registerForm.controls.email.errors) {
        this.showEmail = 'Введіть коректний email'
      }

      return
    }


    const data = {
      email: email.value,
      name: name.value,
      password: password.value,
      profileImg: 'https://i.pinimg.com/236x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg',
      cardItem: [],
      OrderHistory: [],
    }
    this.http.post("http://localhost:5500/register", data).subscribe(
      (data) => {
        if (data) {
          this.messageTextGreen = 'Ви успішно за реєструвалися'
          this.showSucces = true

          setTimeout(() => {
            this.showSucces = false
            this.NavigateToLogin()
          }, 1500)


        }
      },
      (error) => {
        if (error) {
          if (error.error.error === 'login already exist') {
            this.showEror = true
            this.messageTextGreen = 'Виникла помилка'
            this.showName = true
            setTimeout(() => {
              this.showEror = false
            }, 2000)
          }else if(error.error.error === 'email already exist'){
              this.showEmail = 'Данна email адреса зайнята'
          }
        }
      });
  }
  showPasswordMethod() {
    this.showPassword = !this.showPassword

  }
}
