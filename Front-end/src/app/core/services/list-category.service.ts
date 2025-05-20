import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {

  private dataCategory = [
    {
      Gadgets:[],
      Computers:[],
      Photo:[],
      Tv:[],
      Audio:[],
      HomeTechnik:[],
      Climat:[],
      Home:[],
      ChildTovar:[],
      Cars:[],
      Tools:[],
      Tourism:[],
      Sport:[],
      FashionBeauti:[]
    }
  ]

}
