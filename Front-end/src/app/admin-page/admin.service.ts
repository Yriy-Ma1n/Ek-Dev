import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   data:{cost:string,description:string[],img:string,name:string}[] = JSON.parse(localStorage.getItem('admin-prod')!) || []

    set setColection(value:{cost:string,description:string[],img:string,name:string}[]){
      this.data = value
    }
    get getColection(): {cost:string,description:string[],img:string,name:string}[]{
      return this.data
    }

}
