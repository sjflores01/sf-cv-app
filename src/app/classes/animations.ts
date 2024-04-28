import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from '@angular/animations';
export const animations : AnimationTriggerMetadata[] = [
  trigger('slideInFromLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms ease-out', style({ transform: 'translateX(0)' })),
    ])
  ]),
  trigger('slideOutToLeft', [
    transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
    ])
  ]),
  trigger('slideInFromRight', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('500ms ease-out', style({ transform: 'translateX(0)' })),
    ])
  ]),
  trigger('slideOutToRight', [
    transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
    ])
  ])
]
