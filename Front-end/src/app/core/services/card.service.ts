import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private arrProduct = [
    { _id: "fgdfgsadsa", name: 'name-tovar1', price: 20, quantity: 1, src: '' },
    { _id: "dfgdfgergerxd", name: 'name-tovar2', price: 11, quantity: 1, src: '' },
    { _id: "dsvfghgtgsae", name: 'name-tovar3', price: 50, quantity: 1, src: '' },
    { _id: "32dffggtdsasd", name: 'name-tovar4', price: 10, quantity: 1, src: '' }
  ]

  get GetProduct() {
    return  [...this.arrProduct]
  }
  get CountProduct(){
    return this.arrProduct.reduce((akk,item)=>akk+=item.quantity,0)
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

  set addProduct(item: { _id: string, name: string, price: number, quantity: number, src: string }) {
    this.arrProduct.push(item)
    this.arrProduct = this.arrProduct.reduce((acc: any[], obj) => {
    const existing = acc.find(item => item._id === obj._id);
      
      
    if (existing) {
      existing.quantity += obj.quantity
      console.log('check and plus')
    } else {
    
      acc.push({ ...obj });
      console.log("psh")
    }

    return acc;
  }, [] as any[]);



    
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
