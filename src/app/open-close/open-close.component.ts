import { Component, Input, Signal, signal, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.sass',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
      }),
      ),
      state('close', style({
        height: '100px',
        opacity: 0.8,
      }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ])
  ]
})
export class OpenCloseComponent {
  @Input() isOpen: Signal<boolean>;

  constructor() {
    this.isOpen = signal(false); // Initialize the signal with a value
  }
}
