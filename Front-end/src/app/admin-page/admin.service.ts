import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http = inject(HttpClient);
   data:{_id:string,cost:string,description:string[],img:string,name:string}[] = []

    set setColection(value:{_id:string,cost:string,description:string[],img:string,name:string}[]){
      this.data = value
    }
    get getColection(): {_id:string,cost:string,description:string[],img:string,name:string}[]{
      return this.data
    }

    constructor(){
      this.getData();
    }

    getData(){
    this.http.get<{_id:string,cost:string,description:string[],img:string,name:string}[]>("http://localhost:5500/adminTovar").subscribe(data => {this.data = data});

    }

}
