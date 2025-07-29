import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from './core/interceptores/headers/headers.interceptor';
import { errosInterceptor } from './core/interceptores/errors/erros.interceptor';
import { loadingInterceptor } from './core/interceptores/loading/loading.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withViewTransitions(),//animation
    withInMemoryScrolling({scrollPositionRestoration:'top'}),//ywdeny awl el sf7ah
  withHashLocation()       //3ashan el raf3
  ), 
    
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errosInterceptor,loadingInterceptor])),//3ashan el httpclint el api
    provideAnimations(), provideToastr(),
    importProvidersFrom(NgxSpinnerModule,)
  ],
};
