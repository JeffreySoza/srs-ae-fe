import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { AlertService } from '../../components/alert/alert-service.service';
import { NgIf } from '@angular/common';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, AlertComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup;
  alertMessage = signal('');
  alertType = signal<'success' | 'error'>('success');
  alertState = signal(false);
  isOpen = signal(false); // for openCloseComponent

  constructor(private fb: FormBuilder, private http: HttpClient, private alertService: AlertService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  showAlert(message: string, type: 'success' | 'error') {
    this.alertService.show(message, type);
  }

  toggle() {
    this.isOpen.update(value => !value); // <- toggle the signal value
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      this.http.post<any>(`${environment.apiUrl}/auth/login`, this.loginForm.value)
        .subscribe({
          next: (response) => {
            if (response.access_token) {
              window.localStorage.setItem('token', response.access_token);
              this.showAlert('Login successful!', 'success');
            }
          },
          error: (error) => {
            this.showAlert(error.error?.message || 'Login failed!', 'error');
          }
        });

    } else {
      this.showAlert('Invalid form data', 'error');
    }
  }
}
