import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-snow',
  template: `
    <img [@state]="state" src="assets/imgs/snow.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 40pt)',
        top: '120pt',
        opacity: '0'
      })),
      state('isPresent', style({
        left: 'calc(50% - 50pt)',
        top: '150pt',
        opacity: '1'
      })),
      transition('none => isPresent', animate('0.5s 4s ease'))
    ])
  ]
})
export class AnimationSnow {
  @Input() state;
}