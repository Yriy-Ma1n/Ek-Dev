import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sing-in-page',
  imports: [HeaderBarComponent, ReactiveFormsModule],
  templateUrl: './sing-in-page.component.html',
  styleUrl: './sing-in-page.component.css'
})
export class SingInPageComponent {
  router = inject(Router)
  http = inject(HttpClient)

  logInForm = new FormGroup({
    name:new FormControl("", [Validators.required]),
    password:new FormControl("", [Validators.required])
  })

  NavigateToRegister(){
    this.router.navigate(['/Register'])
  }
  logIn(name:HTMLInputElement, password:HTMLInputElement){

console.log(name.value)
console.log(password.value)

    // this.http.post(`http://localhost:5500/login`, {name:name.value, password:password.value}).subscribe(data=>console.log(data))

    this.http.get(`http://localhost:5500/omg`).subscribe(data=>console.log(data))
  }

}
