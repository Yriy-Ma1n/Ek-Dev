import { Component, inject, } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { blockingScrol } from '../../../blockingScrolFunction';

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
    console.log(this.colection.getColection)
    return this.colection.getColection
  }
  
  confirmationNgIf = false;

  deleteItem(event:Event) {
    this.confirmationNgIf = true;
    const item = (event.currentTarget as HTMLElement).parentElement;
    console.log(event.currentTarget)
    console.log(item)
    if(item){
      this.element = item.getAttribute('id')!
    }
      blockingScrol(this.confirmationNgIf);
  }
  async delete(){
    const ItemId = this.element
    console.log(ItemId)
   await this.http.delete("http://localhost:5500/DeleteProduct", {body:{id:ItemId}}).subscribe(data => console.log(data));
    this.colection.getData();
  }
  refusal(){
    this.confirmationNgIf = false;
    blockingScrol(this.confirmationNgIf);
  }
  agreement(){
    this.confirmationNgIf = false;
    this.delete();
    blockingScrol(this.confirmationNgIf);
  }
}
