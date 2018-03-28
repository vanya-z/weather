import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-cloud-dark',
  template: `
    <img [@state]="state" src="assets/imgs/cloud-dark.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        opacity: '0',
        transform: 'scale(0.5)',
        left: '-100%',
        top: '0'
      })),
      state('isPresent', style({
        opacity: '0.7',
        transform: 'scale(1)',
        left: 'calc(50% - 40pt)',
        top: '40pt'
      })),
      transition('none => isPresent', animate('1.5s 2.5s ease-in'))
    ])
  ]
})
export class AnimationCloudDark {
   @Input() state;
}