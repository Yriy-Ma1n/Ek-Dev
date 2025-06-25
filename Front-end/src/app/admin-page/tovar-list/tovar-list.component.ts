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
  element = '';

  getServiseData(){
    return this.colection.getColection
  }
  
  confirmationNgIf = false;
  blockingScrol(){
    if(this.confirmationNgIf){
      return document.body.style.overflowY = "hidden";
    }else{
      return document.body.style.overflowY = "auto";
    }
  }

  deleteItem(event:Event) {
    this.confirmationNgIf = true;
    const item = (event.currentTarget as HTMLElement).parentElement;
    if(item){
      console.log(item);
      this.element = item.getAttribute('id')!
      console.log(this.element);
    }
      this.blockingScrol();
  }
  async delete(){
    const ItemId = this.element
    console.log(ItemId?.length);
    console.log(ItemId);
   await this.http.delete("http://localhost:5500/DeleteProduct", {body:{id:ItemId}}).subscribe(data => console.log(data));
    this.colection.getData();
  }
  refusal(){
    this.confirmationNgIf = false;
    this.blockingScrol();
  }
  agreement(){
    this.confirmationNgIf = false;
    this.delete();
    this.blockingScrol()
  }
}
