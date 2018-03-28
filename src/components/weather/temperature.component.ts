import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'animation-temperature',
  template: `
    <div [@temperature]="temperature" class="object temperature" text-center>
      <span>{{temperature}}°C</span>
    </div>
  `,
  animations: [
    trigger('temperature', [
      state('none', style({
        top: '200%'
      })),
      state('*', style({
        top: '255pt'
      })),
      transition('none => *', animate('1.5s 4s ease')),
    ])
  ]
})
export class AnimationTemperature {
   @Input() temperature;
}