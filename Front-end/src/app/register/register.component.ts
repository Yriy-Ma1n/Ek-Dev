import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [HeaderBarComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router)

  registerForm = new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    password:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
    confirmPassword:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)])
  })

  NavigateToLogin(){
    this.router.navigate(['/SingIn'])
  }
  
  checkFormError(){
  }

  register(){
    if(this.registerForm.valid){
      console.log('register in process...')
    }
  }
}
