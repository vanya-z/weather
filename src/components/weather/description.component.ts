import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-description',
  template: `
    <div [@description]="description" class="object description" text-center>
      <span>{{description}}</span>
    </div>
  `,
  animations: [
    trigger('description', [
      state('none', style({
        top: '235pt',
        left: '-100%'
      })),
      state('*', style({
        top: '235pt',
        left: '0'
      })),
      transition('none => *', animate('0.5s 6s ease')),
    ])
  ]
})
export class AnimationDescription {
   @Input() description;
}