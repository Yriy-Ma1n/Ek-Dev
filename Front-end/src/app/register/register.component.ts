import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [HeaderBarComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router)

  http = inject(HttpClient)

  registerForm = new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    password:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
    confirmPassword:new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(36)])
  })

  NavigateToLogin(){
    this.router.navigate(['/SingIn'])
  }
  


   register(name:HTMLInputElement, password:HTMLInputElement){
    if(!this.registerForm.valid){
      return
    }

      const data = {
      name:name.value,
      password:password.value
    }
    this.http.post("http://localhost:5500/register", data).subscribe(data=>console.log(data));
  }
}
