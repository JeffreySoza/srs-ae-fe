import { Component, computed, effect, inject, Input, signal, Signal, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AlertService } from './alert-service.service'

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.sass',
  animations: [
    trigger('isVisible', [
      state('displayAlert', style({
        transform: 'scaleX(1)',
        opacity: 1,
      }),
      ),
      state('hideAlert', style({
        transform: 'translateX(-50%) scale(0.95)',
        opacity: 0,
      }),
      ),
      transition('displayAlert => hideAlert', [animate('1s')]),
      transition('hideAlert => displayAlert', [animate('0.5s')]),
    ])
  ]
})
export class AlertComponent {
  private alertService = inject(AlertService);

  message = computed(() => this.alertService.message());
  type = computed(() => this.alertService.type());
  isVisible = computed(() => this.alertService.isVisible());

  closeAlert() {
    this.alertService.hide();
  }

  // USING @INPUTS YOU NEED TO ADD PARAM VALUES TO THE COMPONENT FROM THE PARENT
  // @Input() message: Signal<string>;
  // @Input() type: Signal<string>;
  // @Input() isVisible: Signal<boolean>;

  // constructor() {
  //   this.message = signal('');
  //   this.type = signal('');
  //   this.isVisible = signal(false);
  // }
}
