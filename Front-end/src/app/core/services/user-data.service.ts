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
  UserInAccountSubject = new BehaviorSubject<boolean>(false)
  UserinAccount$ = this.UserInAccountSubject.asObservable()

  constructor() {
    this.request()
  }

  get inAccount() {
    return this.UserinAccount$
  }

  request() {
    this.http.get<{ _id: string, name: string, password: string, profileImg: string }>("http://localhost:5500/userInAccount", {
      withCredentials: true
    }).subscribe(data => {
      if (data.name) {
        this.userSubject.next(data)
        this.UserInAccountSubject.next(true)
      } else {
        this.UserInAccountSubject.next(false)
        this.userData = false
      }
    })
  }
}
