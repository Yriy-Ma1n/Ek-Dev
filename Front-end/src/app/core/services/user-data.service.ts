import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../shared/types/User-Types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  http = inject(HttpClient)

  userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable()

  userData = false
  UserinAccount: boolean = false
  constructor() {
    this.http.get<{ _id: string, name: string, password: string, profileImg: string }>("http://localhost:5500/userInAccount", {
      withCredentials: true
    }).subscribe(data => {
      console.log(data)
      if (data.name) {
        this.userSubject.next(data)
        this.UserinAccount = true
      } else {
        this.UserinAccount = false
        this.userData = false
      }

    })
  }

  get inAccount() {
    return this.UserinAccount
  }
}
