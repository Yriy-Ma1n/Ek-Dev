import { Component, inject, } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tovar-list',
  imports: [NgFor, NgIf],
  templateUrl: './tovar-list.component.html',
  styleUrl: './tovar-list.component.css'
})
export class TovarListComponent {
  colection = inject(AdminService);
  http = inject(HttpClient);
  element = {} as HTMLElement;
  
  confirmationNgIf = false;
  blockingScrol(){
    if(this.confirmationNgIf){
      return document.body.style.overflowY = "hidden";
    }else{
      return document.body.style.overflowY = "auto";
    }
  }

  deleteItem(value:HTMLElement) {
    this.confirmationNgIf = true;
    this.element = value
    this.blockingScrol()
  }
  delete(){
    const ItemId = this.element.getAttribute('id');
    const newList = JSON.parse(localStorage.getItem('admin-prod')!).filter((el:{id:string,cost:string,description:string[],img:string,name:string})=>el.id !== ItemId);
    localStorage.setItem('admin-prod', JSON.stringify(newList));
    document.location.reload();
  }
  refusal(){
    this.confirmationNgIf = false;
    this.blockingScrol()
  }
  agreement(){
    this.confirmationNgIf = false;
    this.delete();
    this.blockingScrol()
  }
}
