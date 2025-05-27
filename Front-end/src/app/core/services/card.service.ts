import { Injectable } from '@angular/core';

export type objProduct = { _id: string, name: string, price: number, quantity: number, src: string }

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private arrProduct: objProduct[] = JSON.parse(localStorage.getItem("allCardTovar")!) || []

  get GetProduct() {
    return [...this.arrProduct]
  }
  get CountProduct() {
    return this.arrProduct.reduce((akk, item) => akk += item.quantity, 0)
  }
  set changeQuantityPlus(name: string) {
    this.arrProduct.find(element => {
      if (element.name === name) {

        element.quantity += 1
        localStorage.setItem("allCardTovar", JSON.stringify(this.arrProduct))
      }
    })
  }

  set changeQuantityMinus(name: string) {
    this.arrProduct.find(element => {
      if (element.name === name) {
        if (element.quantity < 1) return
        element.quantity -= 1
        localStorage.setItem("allCardTovar", JSON.stringify(this.arrProduct))

      }
    })
  }

  set addProduct(item: objProduct) {

    this.arrProduct.push(item)

    this.arrProduct = this.arrProduct.reduce((acc: any[], obj) => {
      const existing = acc.find(item => item._id === obj._id);


      if (existing) {
        existing.quantity += obj.quantity
        console.log('check and plus')
      } else {

        acc.push({ ...obj });

      }
      console.log(acc)
      return acc;
    }, [] as any[]);

    localStorage.setItem("allCardTovar", JSON.stringify(this.arrProduct))

  }

  GetTotalPrice() {
    let total: number = 0
    const savedProduct = JSON.parse(localStorage.getItem("allCardTovar")!)


    if (savedProduct) {
      for (let item of savedProduct) {

        total += item.price * item.quantity
      }

    }

    return total
  }

  clearCard() {
    this.arrProduct = []

  }


}
