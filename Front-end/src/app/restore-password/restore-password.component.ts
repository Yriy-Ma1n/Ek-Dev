import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

type DropPasswordResponse =
  | { status: number; message: string; error: { error: string } }
  | { message: string };

@Component({
  selector: 'app-restore-password',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css'
})
export class RestorePasswordComponent {

  http = inject(HttpClient)

  userName = new FormControl('', [Validators.required, Validators.minLength(4)])
  email = new FormControl('', [Validators.required, Validators.email])

  showNotEqualEmail:boolean = false

  resetPassword(event: Event, userName: HTMLInputElement, email: HTMLInputElement) {
    event.preventDefault()
   
    if (!this.userName.valid || !this.email.valid) return

    this.http.post<DropPasswordResponse>('http://localhost:5500/dropPassword', {
      name: userName.value,
      email: email.value
    }, { withCredentials: true }).subscribe({
      next:(data)=>{
        console.log('nice', data)
      },
      error:(err)=>{
        if(err.error){
          if(err.error.error){
            this.showNotEqualEmail = true
          }
        }
      }
    }
    )
  }
  backToHistory() {
    history.back()
  }

}
