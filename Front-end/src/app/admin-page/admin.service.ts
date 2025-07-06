import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http = inject(HttpClient);
  data: { _id?: string, cost: string, description: string[], img: string, name: string }[] = []

  set setColection(value: { _id?: string, cost: string, description: string[], img: string, name: string }) {
    this.data.push(value)
  }
  get getColection(): { _id?: string, cost: string, description: string[], img: string, name: string }[] {
    return this.data
  }

  constructor() {
    this.getData();
  }

   getData() {
    setTimeout(async () => {
      await this.http.get<{ _id: string, cost: string, description: string[], img: string, name: string }[]>("http://localhost:5500/adminTovar").subscribe(data => { this.data = data; });
    }, 200)

  }

  private hideLayoutSubject = new BehaviorSubject<boolean>(false);
  hideLayout$ = this.hideLayoutSubject.asObservable();

  hide() {
    this.hideLayoutSubject.next(true);
  }

  show() {
    this.hideLayoutSubject.next(false);
  }

}
