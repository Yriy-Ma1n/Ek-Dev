import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorUrl } from './cart-validator.directive';
import { NgClass, NgIf} from '@angular/common';


@Component({
  selector: 'app-create-tovar',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './create-tovar.component.html',
  styleUrl: './create-tovar.component.css'
})
export class CreateTovarComponent {
  inputCost = new FormControl("",[
      Validators.pattern(/^[0-9]+$/)
    ]);

  form = new FormGroup({
    inputName: new FormControl("",[
      Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/)
    ]),
    textAreaDescription: new FormControl("",[
      Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/)
    ]),
    inputUrl: new FormControl("", [
      ValidatorUrl()
    ]),
    inputCost: this.inputCost
  });

  http = inject(HttpClient);
  inputNgifCost = false;

  sendData(name:HTMLInputElement, description:HTMLTextAreaElement, url:HTMLInputElement, cost:HTMLInputElement) {
    const newCart = {
      img: url.value,
      name: name.value,
      cost: cost.value,
      description:[description.value]
    }

    if(this.inputCost.invalid){
      this.inputNgifCost = true;
    }else{
      this.inputNgifCost = false;
    }

    // if(this.form.valid){
    //   this.http.post("http://localhost:5500/addProduct", newCart).subscribe(data=>console.log(data));
    // }
  }
}
