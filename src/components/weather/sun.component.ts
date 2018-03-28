import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-sun',
  template: `
    <img [@state]="state" src="assets/imgs/sun.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 80pt)',
        top: '10pt',
        transform: 'scale(0)'
      })),
      state('isMain', style({
        left: 'calc(50% - 60pt)',
        top: '40pt',
        transform: 'scale(1)'
      })),
      state('isPresent', style({
        left: 'calc(50% - 25pt)',
        top: '10pt',
        transform: 'scale(1)'
      })),
      transition('none => isMain', animate('1.5s 1s ease')),
      transition('none => isPresent', animate('1.5s 1s ease'))
    ])
  ]
})
export class AnimationSun {
  @Input() state;
}