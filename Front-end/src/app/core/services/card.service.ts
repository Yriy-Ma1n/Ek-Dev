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

  constructor() {
    this.rewriteProduct()
  }

  async takeUser() {
    return await this.userData.show()
  }

  get GetProduct() {
    return [...this.arrProduct]
  }

  async rewriteProduct(){
    this.arrProduct = (await this.takeUser()).cardItem
  }

  get CountProduct() {
    return this.arrProduct.reduce((akk, item) => akk += item.quantity, 0)
  }

  set changeQuantityPlus(name: string) {
    this.arrProduct.find(element => {
      if (element.name !== name) return

      element.quantity += 1
      this.changeData()

    })
  }

  set changeQuantityMinus(name: string) {
    this.arrProduct.find(element => {
      if (element.name !== name) return
      if (element.quantity < 1) return

      element.quantity -= 1
      this.changeData()

    })
  }

  set addProduct(item: objProduct) {

   
  }

  GetTotalPrice() {
    let total: number = 0
    const savedProduct = JSON.parse(localStorage.getItem("allCardTovar")!)

    if (!savedProduct) return

    for (let item of savedProduct) {
      total += item.price * item.quantity
    }

    return String(total)
  }

  clearCard() {
    this.arrProduct = []
    this.changeData()
  }
  clearOnItem(nameProduct: string) {

    this.arrProduct = this.arrProduct.filter(({ name }) => name !== nameProduct)
    this.changeData()
  }

  changeData() {
    localStorage.setItem("allCardTovar", JSON.stringify(this.arrProduct))
  }
}
