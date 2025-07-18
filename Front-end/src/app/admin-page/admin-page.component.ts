import { Component, inject, Input } from '@angular/core';
import { AndminPasswordComponent } from './andmin-password/andmin-password.component';
import { NgIf } from '@angular/common';
import { CreateTovarComponent } from './create-tovar/create-tovar.component';
import { TovarListComponent } from './tovar-list/tovar-list.component';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-page',
  imports: [TovarListComponent, CreateTovarComponent, AndminPasswordComponent, NgIf],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  layoutService = inject(AdminService)
  modal: boolean = true;
  constructor(){
    this.modal = true;
  }
  @Input()
  inputValueBul(event:boolean){
    this.modal = event;
  };

  ngOnInit() {
  this.layoutService.hide();
}

ngOnDestroy() {
  this.layoutService.show();
}

}
