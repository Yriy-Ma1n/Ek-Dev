import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorUrl } from './cart-validator.directive';


@Component({
  selector: 'app-create-tovar',
  imports: [ReactiveFormsModule,],
  templateUrl: './create-tovar.component.html',
  styleUrl: './create-tovar.component.css'
})
export class CreateTovarComponent {
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
    inputCost: new FormControl("",[
      Validators.pattern(/^[0-9]+$/)
    ]),
  });

  http = inject(HttpClient);

  sendData(name:HTMLInputElement, description:HTMLTextAreaElement, url:HTMLInputElement, cost:HTMLInputElement) {
    const newCart = {
      img: url.value,
      name: name.value,
      cost: cost.value,
      description:[description.value]
    }

    this.http.post("http://localhost:5500/addProduct", newCart).subscribe(data=>console.log(data));
  }
}
