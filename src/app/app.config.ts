import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: Window, useValue: window }, // this way i can inject window browser object on any component's constructor
    provideAnimationsAsync(), // Angular animations
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()) // i need to declare my provider here if i am to use http helper
  ]
};
