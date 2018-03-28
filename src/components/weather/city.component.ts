import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-city',
  template: `
    <div [@name]="name" class="object city" text-center>
      <span>{{name}}</span>
    </div>
  `,
  animations: [
    trigger('name', [
      state('none', style({
        top: '-50%'
      })),
      state('*', style({
        top: '200pt'
      })),
      transition('none => *', animate('1.5s 4s ease')),
    ])
  ]
})
export class AnimationCity {
   @Input() name;
}