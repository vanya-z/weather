import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-rain',
  template: `
    <img [@state]="state" src="assets/imgs/rain.svg" class="object"/>
  `,
  animations: [
    trigger('state', [
      state('none', style({
        left: 'calc(50% - 30pt)',
        top: '150pt',
        opacity: '0'
      })),
      state('isPresent', style({
        left: 'calc(50% - 30pt)',
        top: '150pt',
        opacity: '1'
      })),
      transition('none => isPresent', animate('0.5s 4s ease'))
    ])
  ]
})
export class AnimationRain {
  @Input() state;
}