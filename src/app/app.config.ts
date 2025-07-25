import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withViewTransitions(),//animation
    withInMemoryScrolling({scrollPositionRestoration:'top'}),//ywdeny awl el sf7ah
  withHashLocation()       //3ashan el raf3
  ), 
    
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),//3ashan el httpclint el api
  ]
};
