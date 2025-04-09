import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WindowService } from '../window-reference-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private tokenKey = 'token'; // Local storage key for JWT

  constructor(private http: HttpClient, private windowService: WindowService, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, credentials);
  }

  getUsers(): Observable<any> {
    const windowRef = this.windowService.nativeWindow;
    const token = windowRef ? windowRef.localStorage.getItem(this.tokenKey) : null; // Retrieve stored token

    if (!token) {
      throw new Error('User is not authenticated');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${environment.apiUrl}/users/all`, { headers });
  }

  saveToken(token: string) {
    const windowRef = this.windowService.nativeWindow;
    return windowRef ? windowRef.localStorage.setItem(this.tokenKey, token) : null;
  }

  logout() {
    const windowRef = this.windowService.nativeWindow;
    windowRef ? windowRef.localStorage.removeItem(this.tokenKey) : null;
    return this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!window.localStorage.getItem(this.tokenKey);
  }
}
