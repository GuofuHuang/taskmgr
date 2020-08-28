import { trigger, state, transition, style, animate } from '@angular/animations';

export const itemAnim = trigger('item', [
  state('in', style({'border-left-width': '3px', 'background-color': 'none'})),
  state('out', style({'border-left-width': '8px', 'background-color': '#E3E3E3'})),
  // transition('out => in', animate('50ms ease-in')),
  // transition('in => out', animate('50ms ease-out'))
]);
