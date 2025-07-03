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

    this.arrProduct.push(item)

    this.arrProduct = this.arrProduct.reduce((acc: any[], obj) => {
      const existing = acc.find(item => item._id === obj._id);

      existing ? existing.quantity += obj.quantity : acc.push({ ...obj })

      return acc;
    }, [] as any[]);

    this.changeData()

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
  clearOnItem(nameProduct:string){
   
    this.arrProduct = this.arrProduct.filter(({name})=>name !== nameProduct)
    this.changeData()
  }

  changeData(){
    localStorage.setItem("allCardTovar", JSON.stringify(this.arrProduct))
  }
}
