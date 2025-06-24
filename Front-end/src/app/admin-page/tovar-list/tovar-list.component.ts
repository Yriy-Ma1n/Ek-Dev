import { Component, inject, } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tovar-list',
  imports: [NgFor],
  templateUrl: './tovar-list.component.html',
  styleUrl: './tovar-list.component.css'
})
export class TovarListComponent {
  colection = inject(AdminService);
}
