import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-stars',
  template: `
    <img [@state]="state" src="assets/imgs/stars.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 125pt)',
        top: '20pt',
        opacity: '0'
      })),
      state('isPresent', style({
        left: 'calc(50% - 105pt)',
        top: '20pt',
        opacity: '1'
      })),
      transition('none => isPresent', animate('3s 1.5s ease'))
    ])
  ]
})
export class AnimationStars {
  @Input() state;
}