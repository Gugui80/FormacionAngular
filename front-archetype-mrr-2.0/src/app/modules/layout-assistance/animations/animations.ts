import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

export const noop = trigger('noop', [transition(':enter', [])]);

export const slide = adjustableSlide(250);

export function adjustableSlide( milliseconds: number ) {
    return trigger('slide', [
        transition('void => *', [
            style({ overflow: 'hidden', height: 0 }),
            animate(milliseconds, style({ height: '*' }))
        ]),
        transition('* => void', [
            style({ overflow: 'hidden', height: '*' }),
            animate(milliseconds, style({ height: 0 }))
        ])
    ]);
}

export const fade = adjustableFade(250);

export function adjustableFade( milliseconds: number ) {
    return trigger('fade', [
        transition('void => *', [
            style({ opacity: 0 }),
            animate(milliseconds)
        ]),
        transition('* => void', [
            style({ opacity: 1 }),
            animate(milliseconds, style({ opacity: 0 }))
        ])
    ]);
}

export const fadeIn = trigger('fadeIn', [
    transition('void => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
  
      query(':enter', stagger('250ms', [
        animate('.6s ease-in', keyframes([
          style({ opacity: 0 }),
          style({ opacity: .5 }),
          style({ opacity: 1 })
        ]))
      ]), { optional: true })
    ])
]);