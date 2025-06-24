import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, input, output, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf} from '@angular/common';
import { AdminService } from '../admin.service';
import { imageUrlValidator } from './ImgValidator.directive';


@Component({
  selector: 'app-create-tovar',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './create-tovar.component.html',
  styleUrl: './create-tovar.component.css'
})
export class CreateTovarComponent {
  service = inject(AdminService);
  colection: {cost:string,description:string[],img:string,name:string}[] = JSON.parse(localStorage.getItem('admin-prod')!) || [];
  inputName =  new FormControl("",[
      Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/),
      Validators.required
    ]);
  inputImg = new FormControl(
    '',
    {
      validators: [Validators.required],
      asyncValidators: [imageUrlValidator()],
      updateOn: 'blur'
    }
  );
  textAreaDescription = new FormControl("",[
      Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/),
      Validators.required
    ]);
  inputCost = new FormControl("",[
      Validators.pattern(/^[0-9]+$/),
      Validators.required
    ]);

  form = new FormGroup({
    inputName: this.inputName,
    inputImg: this.inputImg,
    textAreaDescription: this.textAreaDescription,
    inputCost: this.inputCost
  });

  http = inject(HttpClient);
  inputNgifCost = false;
  inputNgName = false;
  textAreaNgDescription = false;
  inputNgUrl = false;

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

    if(this.inputName.invalid){
      this.inputNgName = true;
    }else{
      this.inputNgName = false;
    }

    if(this.textAreaDescription.invalid){
      this.textAreaNgDescription = true;
    }else{
      this.textAreaNgDescription = false;
    }

    if(this.inputImg.invalid){
      this.inputNgUrl = true;
    }else{
      this.inputNgUrl = false;
    }



    if(this.form.valid){
      this.colection.push({
        img: newCart.img,
        name: newCart.name,
        description: newCart.description,
        cost: newCart.cost
      });
      this.service.setColection = this.colection;
      localStorage.setItem('admin-prod', JSON.stringify(this.colection));

     // this.http.post("http://localhost:5500/addProduct", newCart).subscribe(data=>console.log(data));
    }
  }
}
