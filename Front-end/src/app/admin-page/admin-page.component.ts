import { Component, Input } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { AndminPasswordComponent } from './andmin-password/andmin-password.component';
import { NgIf } from '@angular/common';
import { CreateTovarComponent } from './create-tovar/create-tovar.component';
import { TovarListComponent } from './tovar-list/tovar-list.component';
import { blockingScrol } from '../../blockingScrolFunction';

@Component({
  selector: 'app-admin-page',
  imports: [TovarListComponent, CreateTovarComponent, HeaderBarComponent, AndminPasswordComponent, NgIf],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  modal: boolean = true;
  constructor(){
    this.modal = true;
  }
  @Input()
  inputValueBul(event:boolean){
    this.modal = event;
  };
}
