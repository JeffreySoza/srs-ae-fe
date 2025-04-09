import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WindowService } from './window-reference-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private windowService: WindowService) { }

  canActivate(): boolean {
    const windowRef = this.windowService.nativeWindow;
    const token = windowRef ? windowRef.localStorage.getItem('token') : null;
    
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
