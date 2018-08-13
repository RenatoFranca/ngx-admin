import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

export let slideInOutRight= [
  trigger('slideInOutRight', [
    transition('void => *', [
      style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0.5
      }),
      animate(250, style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      }))
    ]),
    transition('* => void', [
      style({
        opacity: 1
      }),
      animate(200, style({
        opacity: 0
      }))
    ]),
  ])
];
