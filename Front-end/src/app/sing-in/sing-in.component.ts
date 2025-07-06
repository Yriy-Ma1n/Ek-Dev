import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../core/services/user-data.service';
import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sing-in',
  imports: [NgIf, NgClass],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  router = inject(Router)
  UserInAccountData = inject(UserDataService)
  UserInAccount: boolean = true
  showInfoAccount:boolean = true
  http = inject(HttpClient)
  loadSingInPage() {
    this.router.navigate(['/SingIn'])
  }
  user: { _id: string, name: string, password: string, profileImg: string } = { _id: '', name: '', password: '', profileImg: '' }
  ngOnInit(){
    
    this.UserInAccountData.user$.subscribe(data=>{
      if(data){
        this.user = data 
        this.UserInAccount = this.UserInAccountData.UserinAccount
      }
    })
  }

  logout(){
    this.http.delete(`http://localhost:5500/logout`, {withCredentials:true}).subscribe(data=>console.log(data))
    location.reload()
  }
  openAdditional(){
    this.showInfoAccount = !this.showInfoAccount
  }
  openDataProfile(event:Event){
    const text = (event.target as HTMLDivElement).textContent
    if(text === 'Вийти') this.logout()
    if(text === 'Мої замовлення')this.router.navigate(['/busket'])
    if(text === 'Профіль') this.router.navigate(['/Profile'])
    if(text === 'Налаштування')this.router.navigate(['/Profile-setting'])


  }
}
