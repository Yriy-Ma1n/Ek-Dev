import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { PasswordValidator } from './Passwors.validators.directive';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-andmin-password',
  imports: [ReactiveFormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './andmin-password.component.html',
  styleUrl: './andmin-password.component.css'
})
export class AndminPasswordComponent {
  adminPassword: string = "admin";
  inputValue: string = "";
  inputValueBul: boolean = true;
  @Output() inputEmiter = new EventEmitter <boolean>();
  inputItem = new FormControl('',[
    PasswordValidator(this.adminPassword),
  ]);
  ngIfPass = false;


  getValueInput(inputItem: HTMLInputElement){
    if(this.inputItem.invalid){
      this.ngIfPass = true;
    }
    this.inputValue = inputItem.value;
    this.checkValueInput();
    this.inputEmiter.emit(this.inputValueBul);
  };

  checkValueInput(){
    if(this.inputValue === this.adminPassword){
      this.inputValueBul = false;
    }else{
      this.inputValueBul = true;
    }
  };
}
