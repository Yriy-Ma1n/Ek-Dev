import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private arrProduct = [
    { name: 'name-tovar1', price: 20, quantity: 1 }, 
    { name: 'name-tovar2', price: 11, quantity: 1 }, 
    { name: 'name-tovar3', price: 50, quantity: 1 }, 
    { name: 'name-tovar4', price: 10, quantity: 1 }
  ]

  get GetProduct() {
    return [...this.arrProduct]
  }
  set changeQuantityPlus(name: string) {
    this.arrProduct.find(element => {
      if (element.name === name) {
        element.quantity += 1
      }
    })
  }

  set changeQuantityMinus(name: string) {
    this.arrProduct.find(element => {
      if (element.name === name) {
        if (element.quantity < 1) return
        element.quantity -= 1
      }
    })
  }

  GetTotalPrice() {
    let total: number = 0
    for (let item of this.arrProduct) {
      total += item.price * item.quantity
    }
    return total
  }

  clearCard() {
    this.arrProduct = []

  }
}
