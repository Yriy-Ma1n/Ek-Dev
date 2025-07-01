import { Component, inject } from '@angular/core';
import { HeaderBarComponent } from '../shared/components/header-bar/header-bar.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing-in-page',
  imports: [HeaderBarComponent, ReactiveFormsModule],
  templateUrl: './sing-in-page.component.html',
  styleUrl: './sing-in-page.component.css'
})
export class SingInPageComponent {
  router = inject(Router)

  logInForm = new FormGroup({
    name:new FormControl(),
    password:new FormControl()
  })

  NavigateToRegister(){
    this.router.navigate(['/Register'])
  }

}
