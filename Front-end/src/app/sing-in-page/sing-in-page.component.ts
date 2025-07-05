import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sing-in-page',
  imports: [HeaderBarComponent, ReactiveFormsModule, NgClass],
  templateUrl: './sing-in-page.component.html',
  styleUrl: './sing-in-page.component.css'
})
export class SingInPageComponent {
  router = inject(Router)
  http = inject(HttpClient)

  hideError: boolean = true
  logInForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  NavigateToRegister() {
    this.router.navigate(['/Register'])
  }
  logIn(name: HTMLInputElement, password: HTMLInputElement) {
    this.http.post<{ succes: boolean, user: { name: string, password: string, _id: string } }>(
      `http://localhost:5500/login`,
      { name: name.value, password: password.value },
      { withCredentials: true }
    ).subscribe((data) => {
      this.router.navigate(['/Home'])
      this.hideError = true
      setTimeout(() => {
        location.reload()
      }, 100)

    }, (error) => {
      if (error) {
        this.hideError = false
      }
    })

  }

}
