import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-cloud',
  template: `
    <img [@state]="state" src="assets/imgs/cloud.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        transform: 'scale(0.5)',
        left: '-100%',
        top: '0'
      })),
      state('isMain', style({
        transform: 'scale(1.4)',
        left: 'calc(50% - 60pt)',
        top: '60pt'
      })),
      state('isPresent', style({
        transform: 'scale(1.3)',
        left: 'calc(50% - 70pt)',
        top: '60pt'
      })),
      transition('none => isMain', animate('1.5s 1.5s ease')),
      transition('none => isPresent', animate('1.5s 2.5s ease'))
    ])
  ]
})
export class AnimationCloud {
   @Input() state;
}