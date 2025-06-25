import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   data:{id:string,cost:string,description:string[],img:string,name:string}[] = JSON.parse(localStorage.getItem('admin-prod')!) || []

    set setColection(value:{id:string,cost:string,description:string[],img:string,name:string}[]){
      this.data = value
    }
    get getColection(): {id:string,cost:string,description:string[],img:string,name:string}[]{
      return this.data
    }

}
