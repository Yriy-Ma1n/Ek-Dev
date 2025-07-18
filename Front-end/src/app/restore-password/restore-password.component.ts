import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  imports: [ReactiveFormsModule],
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css'
})
export class RestorePasswordComponent {

  http = inject(HttpClient)

  userName = new FormControl('', [Validators.required, Validators.minLength(4)])
  email = new FormControl('', [Validators.required, Validators.email])

  resetPassword(event: Event, userName:HTMLInputElement, email:HTMLInputElement) {
    event.preventDefault()

    if (!this.userName.valid || !this.email.valid) return
    
    this.http.post('http://localhost:5500/dropPassword', {
      name:userName.value,
      email:email.value
    })
  }

}
