import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-andmin-password',
  imports: [ReactiveFormsModule],
  templateUrl: './andmin-password.component.html',
  styleUrl: './andmin-password.component.css'
})
export class AndminPasswordComponent {
  inputItem = new FormControl();
  adminPassword: string = "admin";
  inputValue: string = "";
  inputValueBul: boolean = true;
  @Output() inputEmiter = new EventEmitter <boolean>();

  getValueInput(inputItem: HTMLInputElement){
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
