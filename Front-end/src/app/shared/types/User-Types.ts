export type User = {
  _id: string;
  name: string;
  password: string;
  profileImg: string;
  cardItem:{_Itemid:string, name:string, price:number, quantity:number, src:string}[]
}