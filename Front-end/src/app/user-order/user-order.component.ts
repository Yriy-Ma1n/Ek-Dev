import { Component, inject } from '@angular/core';
import { UserDataService } from '../core/services/user-data.service';
import { Router } from '@angular/router';
import type { HistoryOrd } from '../shared/types/User-Types';
import { KeyValuePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-order',
  imports: [NgFor, KeyValuePipe],
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent {

  User = inject(UserDataService)
  router = inject(Router)

  data: HistoryOrd[] = [{ orderId: '', _Itemid: '', name: '', price: 0, quantity: 0, src: '', date: '' }]

  filteredArr = []

  grouped: {[key:string]:any} = {}

  ngOnInit() {
    this.User.UserinAccount$.subscribe(data => {
      if (data !== null) {
        if (!data) {
          this.router.navigate(['/SingIn'])
        }
      }
    })
  }

  constructor() {
    this.takeData()

  }
  async takeData() {
    const user = await this.User.getAsyncUser()
    if (user.OrderHistory) {
      this.data = user.OrderHistory
    }

    this.data.forEach(item => {
      if (!this.grouped[item.orderId]) {
        this.grouped[item.orderId] = []
      }
      if (this.grouped[item.orderId]) {
        this.grouped[item.orderId].push(item)

      }

    })

    console.log(this.grouped)
  }


}
