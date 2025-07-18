import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../shared/types/User-Types';
import { BehaviorSubject, filter, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  http = inject(HttpClient)

  userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable()
  
  userData = false
  UserInAccountSubject = new BehaviorSubject<boolean | null>(null)
  UserinAccount$ = this.UserInAccountSubject.asObservable()

  datas:User|null = null
  constructor() {
    this.request()
  }

  get inAccount() {
    return this.UserinAccount$
  }

  get checkAcc(){
    return firstValueFrom(this.UserinAccount$)
  }
  getAsyncUser() {
    return firstValueFrom(this.user$.pipe(filter(user=>!!user)))
  }
  async show() {
    return await firstValueFrom(
       this.http.get<User>('http://localhost:5500/userInAccount', { withCredentials: true })
    )

  }

  request() {
    this.http.get<{
       _id: string, 
       email:string,
       name: string, 
       password: string, 
       profileImg: string, 
       cardItem:{_Itemid:string, name:string, price:number, quantity:number, src:string}[] ,
       OrderHistory:{orderId:string, _Itemid:string, name:string, price:number, quantity:number, src:string, date:string}[] | []
      
      }>("http://localhost:5500/userInAccount", {
      withCredentials: true
    }).subscribe(data => {
      this.datas = data
      if (data.name) {
        this.userSubject.next(data)
        this.UserInAccountSubject.next(true)
        this.datas = data
      } else {
        this.UserInAccountSubject.next(false)
        this.userData = false
      }
    })
  }
}
