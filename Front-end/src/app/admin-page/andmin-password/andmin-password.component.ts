import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidator } from './Passwors.validators.directive';
import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-andmin-password',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './andmin-password.component.html',
  styleUrl: './andmin-password.component.css'
})
export class AndminPasswordComponent {
  adminPassword: string = "";
  inputValue: string = "";
  inputValueBul: boolean = true;
  http = inject(HttpClient)

  @Output() inputEmiter = new EventEmitter<boolean>();

  inputItem = new FormControl('', [
    PasswordValidator(this.adminPassword),
  ]);

  ngIfPass = false;

  constructor() {
    this.http.get<{ login: string, password: string }[]>('http://localhost:5500/adminpass').subscribe(response => {
      this.adminPassword = response[0].password
    })
  
  }


  getValueInput(inputItem: HTMLInputElement) {
    if (this.inputItem.invalid) {
      this.ngIfPass = true;
    }
    this.inputValue = inputItem.value;
    this.checkValueInput();
    this.inputEmiter.emit(this.inputValueBul);
  };

  checkValueInput() {
    if (this.inputValue === this.adminPassword) {
      this.inputValueBul = false;
    } else {
      this.inputValueBul = true;
    }
  };
}
