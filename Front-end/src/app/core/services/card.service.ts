import { inject, Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { firstValueFrom } from 'rxjs';

export type objProduct = { _Itemid: string; name: string; price: number; quantity: number; src: string; }

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private arrProduct: objProduct[] = []
  userData = inject(UserDataService)
  count: number = 0

  constructor() {
    this.rewriteProduct()


  }

  async takeUser() {
    return await this.userData.show()
  }

  get GetProduct() {
    if (this.arrProduct) {
      return [...this.arrProduct]
    } else {
      return []
    }
  }

  async rewriteProduct() {
    const item = await this.takeUser()
    this.arrProduct = item.cardItem
    if (this.arrProduct) {
      this.count = this.getQuantity()

    }

  }


  get CountProduct() {

    return this.count
  }

  set changeQuantityPlus(some: string) {
    this.count += 1
  }

  set changeQuantityMinus(itemD: string) {
    this.count -= 1


  }



  GetTotalPrice() {
    let total: number = 0


    if (!this.arrProduct) return

    for (let item of this.arrProduct) {
      total += item.price * item.quantity
    }

    return String(total)
  }

  clearCard() {
    this.arrProduct = []
  }
  clearOnItem(nameProduct: string) {

    this.arrProduct = this.arrProduct.filter(({ name }) => name !== nameProduct)
  }


  async changeQuantity(name: string) {
    await this.takeAndRewriteUserItem()
    if (!this.arrProduct) return

    this.findAndChangeQuantity(name, true)

    console.log(this.arrProduct)

  }
  async changeQuantityM(name: string) {

    await this.takeAndRewriteUserItem()
    if (!this.arrProduct) return

    this.findAndChangeQuantity(name, false)
  }
  async takeAndRewriteUserItem() {
    const item = await this.takeUser()
    this.arrProduct = item.cardItem
  }

  findAndChangeQuantity(name: string, plus: boolean) {
    this.arrProduct.find(element => {
      if (element.name !== name) return

      if (plus) {
        element.quantity += 1
        return
      }

      element.quantity -= 1
    })

    this.count = this.getQuantity()

  }

  getQuantity() {
    return this.arrProduct.reduce((akk, item) => {
      akk = item.quantity + akk
      return akk
    }, 0)
  }

}
