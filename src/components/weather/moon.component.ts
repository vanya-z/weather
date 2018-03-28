import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-moon',
  template: `
    <img [@state]="state" src="assets/imgs/moon.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% + 40pt)',
        top: '40pt',
        transform: 'scale(0)'
      })),
      state('isMain', style({
        left: 'calc(50% - 20pt)',
        top: '80pt',
        transform: 'scale(2.8)'
      })),
      state('isPresent', style({
        left: 'calc(50% + 20pt)',
        top: '40pt',
        transform: 'scale(1.8)'
      })),
      transition('none => isMain', animate('1.5s 1s ease')),
      transition('none => isPresent', animate('1.5s 1s ease'))
    ])
  ]
})
export class AnimationMoon {
  @Input() state;
}