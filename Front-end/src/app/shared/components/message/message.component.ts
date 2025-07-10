import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() showCommentR = false
  @Input() showCommentG = false

  @Input() message:string = ''

}
