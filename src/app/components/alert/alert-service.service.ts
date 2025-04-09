import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  message = signal('');
  type = signal<'success' | 'error'>('success');
  isVisible = signal(false);

  show(message: string, type: 'success' | 'error' = 'success') {
    this.message.set(message);
    this.type.set(type);
    this.isVisible.set(true);
  }

  hide() {
    this.isVisible.set(false);
  }
}
