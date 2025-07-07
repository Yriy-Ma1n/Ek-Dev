import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
import { TheSamePasswordValidator } from './theSamePassword.validators.directive';

@Component({
  selector: 'app-register',
  imports: [HeaderBarComponent, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router)

  textNotEqualPassError:string = ''
  showNotEqualPassError:boolean = false

  http = inject(HttpClient)

  showEror: boolean = false;
  showSucces: boolean = false;

  messageTextRed: string = ''
  messageTextGreen: string = ''

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)])
  }, [TheSamePasswordValidator()])

  NavigateToLogin() {
    this.router.navigate(['/SingIn'])
  }



  register(name: HTMLInputElement, password: HTMLInputElement) {
     
    if (!this.registerForm.valid) {
      this.textNotEqualPassError = this.registerForm.errors!['PasswordValidator']
      this.showNotEqualPassError = true
      return
    }


    const data = {
      name: name.value,
      password: password.value,
      profileImg: 'https://i.pinimg.com/236x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg',

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
          setTimeout(() => {
            this.showEror = false
          }, 2000)
          this.messageTextGreen = 'Виникла помилка('
          this.showEror = true
        }
      });
  }
}
