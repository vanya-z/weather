import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-thunder',
  template: `
    <img [@state]="state" src="assets/imgs/thunder.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 25pt)',
        top: '125pt',
        opacity: '0'
      })),
      state('isPresent', style({
        left: 'calc(50% - 25pt)',
        top: '125pt',
        opacity: '1'
      })),
      transition('none => isPresent', animate('200ms 4s ease'))
    ])
  ]
})
export class AnimationThunder {
  @Input() state;
}