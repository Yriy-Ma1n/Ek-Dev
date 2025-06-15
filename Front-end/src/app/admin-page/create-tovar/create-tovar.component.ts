import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-tovar',
  imports: [ReactiveFormsModule,],
  templateUrl: './create-tovar.component.html',
  styleUrl: './create-tovar.component.css'
})
export class CreateTovarComponent {
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
