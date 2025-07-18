export type User = {
  _id: string;
  email:string;
  name: string;
  password: string;
  profileImg: string;
  cardItem: { _Itemid: string, name: string, price: number, quantity: number, src: string }[],
  OrderHistory: { orderId:string, _Itemid: string, name: string, price: number, quantity: number, src: string, date:string }[] | []
}
export type HistoryOrd = {
  orderId:string,
  _Itemid: string,
  name: string,
  price: number,
  quantity: number,
  src: string,
  date:string
}