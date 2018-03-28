import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-mist',
  template: `
    <img [@state]="state" src="assets/imgs/mist.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 100pt)',
        top: '40pt',
        opacity: '0',
      })),
      state('isMain', style({
        left: 'calc(50% - 100pt)',
        top: '50pt',
        opacity: '1',
      })),
      transition('none => isMain', animate('3s 1.5s ease'))
    ])
  ]
})
export class AnimationMist {
  @Input() state;
}