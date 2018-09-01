import { trigger, transition, style, animate, animation, state, keyframes, useAnimation } from '@angular/animations';

let bounceOutLeftAnimation = animation(
    animate('1s ease-in-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(40px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ])))

let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition('void <=> *', [
        animate(600)
    ]),

    transition('* => void', [
        style({ backgroundColor: 'rgba(220, 0, 0, .4)' })
    ])

]),
    slide = trigger('slide', [

        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate(500)
        ]),

        transition(':leave',
            useAnimation(bounceOutLeftAnimation)
        )

    ]),
    todoAnimation = trigger('todoAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(600)
        ]),
        transition(':leave', [
            style({ backgroundColor: 'rgba(250, 0, 0, ,5)' }),
            useAnimation(bounceOutLeftAnimation)
        ])
    ]);

export {
    fade,
    slide,
    todoAnimation
}